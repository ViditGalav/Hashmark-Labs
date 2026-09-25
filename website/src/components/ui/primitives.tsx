import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

/* ---------- Logo ---------- */
export function LogoMark({ size = 32, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="hm-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff5e8e" />
          <stop offset="1" stopColor="#b98cff" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#hm-grad)" />
      <path
        d="M12.6 8.5 11.4 23.5M20.6 8.5 19.4 23.5M8.8 13.2h15.4M8.2 18.8h15.4"
        stroke="#0a0b14"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <LogoMark />
      <span className="font-mono text-[0.8rem] font-medium tracking-[0.32em] text-text">HASHMARK LABS</span>
    </span>
  );
}

/* ---------- Buttons ---------- */
type ButtonVariant = "primary" | "secondary" | "ghost";
const buttonBase =
  "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-medium transition-all duration-300 ease-out-expo";
const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "bg-pink text-bg hover:bg-pink-soft shadow-[0_0_0_1px_rgb(255_94_142/0.4),0_10px_40px_-10px_rgb(255_94_142/0.6)]",
  secondary: "border border-line-strong text-text hover:border-pink/60 hover:bg-white/[0.03]",
  ghost: "text-text hover:text-pink px-0",
};

export function ButtonLink({
  href,
  variant = "primary",
  children,
  className,
  arrow = true,
  ...rest
}: { href: string; variant?: ButtonVariant; arrow?: boolean; children: ReactNode } & Omit<ComponentProps<"a">, "href">) {
  const external = /^(https?:|mailto:|tel:)/.test(href);
  const content = (
    <>
      {children}
      {arrow && <Arrow className="transition-transform duration-300 group-hover:translate-x-0.5" />}
    </>
  );
  const cls = cn(buttonBase, buttonVariants[variant], className);
  if (external) {
    return (
      <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {content}
    </Link>
  );
}

export function Arrow({ className, direction = "right" }: { className?: string; direction?: "right" | "up-right" | "down" }) {
  const rotate = direction === "up-right" ? "-rotate-45" : direction === "down" ? "rotate-90" : "";
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className={cn(rotate, className)}>
      <path d="M3 8h10m0 0L8.5 3.5M13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ---------- Section header ---------- */
export function SectionHeader({
  index,
  eyebrow,
  title,
  emphasis,
  lead,
  className,
  as: Tag = "h2",
  size = "l",
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  emphasis?: string;
  lead?: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
  size?: "l" | "m";
}) {
  return (
    <header className={cn("max-w-3xl", className)} data-reveal>
      <p className="eyebrow">
        {index ? `${index} — ` : ""}
        {eyebrow}
      </p>
      <Tag className={cn("mt-4", size === "l" ? "display-l" : "display-m")}>
        {title}
        {emphasis && (
          <>
            {" "}
            <span className="em">{emphasis}</span>
          </>
        )}
      </Tag>
      {lead && <div className="lead mt-6 max-w-2xl">{lead}</div>}
    </header>
  );
}

/* ---------- Small bits ---------- */
export function LivePill({ label = "Live in production" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/[0.07] px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-teal">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inset-0 animate-ping rounded-full bg-teal/60" />
        <span className="relative h-1.5 w-1.5 rounded-full bg-teal" />
      </span>
      {label}
    </span>
  );
}

export function Chip({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("chip", className)}>{children}</span>;
}

export function Num({ n, className }: { n: number | string; className?: string }) {
  const s = typeof n === "number" ? String(n).padStart(2, "0") : n;
  return <span className={cn("font-mono text-xs tracking-[0.12em] text-faint", className)}>{s}</span>;
}

const avatarGradients = {
  pink: "from-pink to-violet",
  violet: "from-violet to-indigo",
  teal: "from-indigo to-teal",
} as const;

export function Avatar({ initials, gradient, size = "md" }: { initials: string; gradient: keyof typeof avatarGradients; size?: "md" | "lg" }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br font-serif text-bg",
        avatarGradients[gradient],
        size === "lg" ? "h-20 w-20 text-3xl" : "h-14 w-14 text-2xl",
      )}
    >
      {initials}
    </span>
  );
}

export function Hairline({ className }: { className?: string }) {
  return <div className={cn("h-px w-full bg-line", className)} />;
}
