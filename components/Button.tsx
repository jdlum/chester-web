import Link from "next/link";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const variants = {
  primary:
    "bg-chester-green text-white hover:bg-deep-forest",
  secondary:
    "bg-honey text-white hover:bg-honey/90",
  outline:
    "border-2 border-chester-green text-chester-green hover:bg-chester-green hover:text-white",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = `btn-lift inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
