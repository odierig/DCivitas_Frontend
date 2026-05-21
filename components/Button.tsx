import { ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

const base =
  "inline-flex items-center justify-center font-medium rounded-full transition-all duration-120 focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer select-none";

const sizes: Record<Size, string> = {
  sm: "px-5 py-2 text-sm",
  md: "px-7 py-3 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--purple-dark)] text-[var(--paper)] hover:bg-[#222d5e] active:scale-[0.98]",
  outline:
    "border border-[var(--paper)] text-[var(--paper)] bg-transparent hover:bg-[var(--paper)] hover:text-[var(--purple-dark)] active:scale-[0.98]",
  ghost:
    "text-[var(--purple-light)] bg-transparent hover:text-[var(--purple-mid)] active:scale-[0.98]",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
