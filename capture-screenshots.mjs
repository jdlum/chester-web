import { chromium } from 'playwright';

const SUPABASE_URL = 'https://skctibcrdcgfvvjywmkh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrY3RpYmNyZGNnZnZ2anl3bWtoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxNjI4MDMsImV4cCI6MjA4ODczODgwM30.LKyVgmIGtar63Pu_aDVmG7insBAPBwya7QRWfkRY9cQ';
const BASE = 'http://localhost:8081';
const OUT = 'public/screenshots';

const PROVIDER_SCREENS = [
  ['/(provider)/', 'dashboard.png'],
  ['/(provider)/schedule', 'schedule.png'],
  ['/(provider)/billing', 'billing.png'],
  ['/(provider)/reports', 'report-card.png'],
  ['/(provider)/health', 'health.png'],
  ['/(provider)/team', 'team.png'],
  ['/(provider)/messages', 'messages.png'],
  ['/(provider)/settings/subscription', 'subscription-plans.png'],
  ['/(provider)/settings/fee-settings', 'fee-settings.png'],
  ['/(provider)/settings', 'feat-cancellation.png'],
];

const CLIENT_SCREENS = [
  ['/(client)/', 'client-dashboard.png'],
  ['/(client)/schedule', 'client-booking.png'],
  ['/(client)/payments', 'client-payments.png'],
  ['/(client)/history', 'client-history.png'],
];

async function getSession(email, password) {
  const res = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'apikey': SUPABASE_ANON_KEY },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error(`Auth failed: ${res.status} ${await res.text()}`);
  return res.json();
}

async function main() {
  console.log('Authenticating with Supabase...');
  const session = await getSession('alex@chesterapp.com', 'testpass123');
  console.log('Authenticated as:', session.user?.email);

  const storageKey = 'sb-skctibcrdcgfvvjywmkh-auth-token';
  const sessionData = JSON.stringify({
    access_token: session.access_token,
    refresh_token: session.refresh_token,
    token_type: session.token_type,
    expires_in: session.expires_in,
    expires_at: session.expires_at,
    user: session.user,
  });

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  // Navigate to base URL to set origin, then inject session into localStorage
  await page.goto(BASE, { waitUntil: 'domcontentloaded' });
  await page.evaluate(({ key, data }) => {
    localStorage.setItem(key, data);
  }, { key: storageKey, data: sessionData });
  console.log('Session injected into localStorage');

  // Capture provider screens
  for (const [route, filename] of PROVIDER_SCREENS) {
    process.stdout.write(`  ${filename}...`);
    await page.goto(`${BASE}${route}`, { waitUntil: 'networkidle', timeout: 15000 }).catch(() => {});
    await page.waitForTimeout(4000);
    await page.screenshot({ path: `${OUT}/${filename}` });
    console.log(' done');
  }

  // Report card detail
  process.stdout.write('  feat-report-cards.png...');
  await page.goto(`${BASE}/(provider)/reports`, { waitUntil: 'networkidle', timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(4000);
  const rcCards = page.locator('div[tabindex="0"]');
  if (await rcCards.count() > 0) {
    await rcCards.first().click();
    await page.waitForTimeout(4000);
    await page.screenshot({ path: `${OUT}/feat-report-cards.png` });
    console.log(' done');
  } else { console.log(' skipped (no cards)'); }

  // Team member detail
  process.stdout.write('  feat-team.png...');
  await page.goto(`${BASE}/(provider)/team`, { waitUntil: 'networkidle', timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(4000);
  const samEl = page.locator('text=Sam').first();
  if (await samEl.isVisible({ timeout: 3000 }).catch(() => false)) {
    await samEl.click();
    await page.waitForTimeout(4000);
    await page.screenshot({ path: `${OUT}/feat-team.png` });
    console.log(' done');
  } else { console.log(' skipped'); }

  // Message thread detail
  process.stdout.write('  feat-messaging.png...');
  await page.goto(`${BASE}/(provider)/messages`, { waitUntil: 'networkidle', timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(4000);
  const sarahEl = page.locator('text=Sarah').first();
  if (await sarahEl.isVisible({ timeout: 3000 }).catch(() => false)) {
    await sarahEl.click();
    await page.waitForTimeout(4000);
    await page.screenshot({ path: `${OUT}/feat-messaging.png` });
    console.log(' done');
  } else { console.log(' skipped'); }

  // Client portal screens
  for (const [route, filename] of CLIENT_SCREENS) {
    process.stdout.write(`  ${filename}...`);
    await page.goto(`${BASE}${route}`, { waitUntil: 'networkidle', timeout: 15000 }).catch(() => {});
    await page.waitForTimeout(4000);
    await page.screenshot({ path: `${OUT}/${filename}` });
    console.log(' done');
  }

  // Pet detail for insights
  process.stdout.write('  insights.png...');
  await page.goto(`${BASE}/(client)/pets`, { waitUntil: 'networkidle', timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(4000);
  const maxEl = page.locator('text=Max').first();
  if (await maxEl.isVisible({ timeout: 3000 }).catch(() => false)) {
    await maxEl.click();
    await page.waitForTimeout(4000);
    await page.screenshot({ path: `${OUT}/insights.png` });
    console.log(' done');
  } else { console.log(' skipped'); }

  await browser.close();
  console.log('\nAll screenshots captured!');
}

main().catch(err => { console.error(err); process.exit(1); });
