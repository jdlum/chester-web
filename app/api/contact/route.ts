import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

// Where notifications are sent — update when ready
const NOTIFY_EMAIL = "justindaniellum@gmail.com";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, type, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedType = type || "provider";
    const trimmedMessage = message.trim();

    // Insert into Supabase
    const { error } = await supabase.from("contact_submissions").insert({
      name: trimmedName,
      email: trimmedEmail,
      type: trimmedType,
      message: trimmedMessage,
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }

    // Send email notification (non-blocking — don't fail the form if email fails)
    if (resend) {
      try {
        await resend.emails.send({
          from: "Chester <onboarding@resend.dev>",
          to: NOTIFY_EMAIL,
          subject: `New Chester contact: ${trimmedName}`,
          html: `
            <div style="font-family: -apple-system, sans-serif; max-width: 560px; margin: 0 auto;">
              <h2 style="color: #2C3D28;">New Contact Form Submission</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #7A8C6A; width: 100px;">Name</td>
                  <td style="padding: 8px 0; color: #1E2E1A; font-weight: 500;">${trimmedName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #7A8C6A;">Email</td>
                  <td style="padding: 8px 0;"><a href="mailto:${trimmedEmail}" style="color: #C4783A;">${trimmedEmail}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #7A8C6A;">Type</td>
                  <td style="padding: 8px 0; color: #1E2E1A;">${trimmedType}</td>
                </tr>
              </table>
              <div style="margin-top: 16px; padding: 16px; background: #F0F4EE; border-radius: 12px;">
                <p style="margin: 0; color: #7A8C6A; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
                <p style="margin: 8px 0 0; color: #1E2E1A; line-height: 1.6;">${trimmedMessage}</p>
              </div>
              <p style="margin-top: 24px; font-size: 12px; color: #D9D0BF;">
                Sent from chester.pet contact form
              </p>
            </div>
          `,
        });
      } catch (emailError) {
        // Log but don't fail the form submission
        console.error("Email notification failed:", emailError);
      }
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
