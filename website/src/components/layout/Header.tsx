"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { nav } from "@/content/site";
import { practices } from "@/content/practices";
import { Arrow, ButtonLink, Logo, cn } from "@/components/ui/primitives";
import { PaletteTrigger } from "./CommandPalette";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaId = useId();
  const mobileId = useId();
  const megaRef = useRef<HTMLLIElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMobileOpen(false);
    setMegaOpen(false);
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setMobileOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) setMegaOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 140);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo",
        scrolled || mobileOpen ? "border-b border-line bg-bg/80 backdrop-blur-xl" : "border-b border-transparent",
      )}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-6">
        <Link href="/" aria-label="Hashmark Labs home" className="shrink-0 rounded-lg">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) =>
              item.href === "/services" ? (
                <li key={item.href} ref={megaRef} className="relative" onMouseEnter={openMega} onMouseLeave={scheduleClose}>
                  <button
                    type="button"
                    aria-expanded={megaOpen}
                    aria-controls={megaId}
                    onClick={() => setMegaOpen((v) => !v)}
                    className={cn(
                      "flex min-h-11 items-center gap-1.5 rounded-full px-4 text-[0.92rem] transition-colors",
                      isActive("/services") ? "text-text" : "text-muted hover:text-text",
                    )}
                  >
                    Services
                    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" className={cn("transition-transform", megaOpen && "rotate-180")}>
                      <path d="M2 3.5 5 6.5 8 3.5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
                    </svg>
                  </button>
                  <div
                    id={megaId}
                    hidden={!megaOpen}
                    className="absolute left-1/2 top-full w-[min(760px,90vw)] -translate-x-1/2 pt-3"
                  >
                    <div className="card overflow-hidden border-line-strong bg-surface/95 p-2 shadow-2xl shadow-black/60 backdrop-blur-xl">
                      <ul className="grid grid-cols-2 gap-1">
                        {practices.map((p) => (
                          <li key={p.slug}>
                            <Link
                              href={`/services/${p.slug}`}
                              className="group block rounded-xl p-4 transition-colors hover:bg-white/[0.04]"
                            >
                              <span className="flex items-center gap-2 text-[0.98rem] font-medium text-text">
                                {p.name}
                                <Arrow className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                              </span>
                              <span className="mt-1 block text-sm leading-relaxed text-muted">{p.summary}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/services"
                        className="mt-1 flex items-center justify-between rounded-xl bg-white/[0.03] px-4 py-3 text-sm text-text-2 hover:text-text"
                      >
                        <span>Use one practice or combine them.</span>
                        <span className="flex items-center gap-1.5 text-pink-soft">
                          All services <Arrow />
                        </span>
                      </Link>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "flex min-h-11 items-center rounded-full px-4 text-[0.92rem] transition-colors",
                      isActive(item.href) ? "text-text" : "text-muted hover:text-text",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <PaletteTrigger className="inline-flex w-11 lg:w-auto" />
          <span className="hidden sm:block">
            <ButtonLink href="/contact" className="!min-h-10 !px-5 !py-2 text-sm">
              Talk to an engineer
            </ButtonLink>
          </span>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-text lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls={mobileId}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              {mobileOpen ? (
                <path d="M4 4l10 10M14 4 4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M2.5 6h13M2.5 12h13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id={mobileId}
        hidden={!mobileOpen}
        className="h-[calc(100dvh-72px)] overflow-y-auto border-t border-line bg-bg lg:hidden"
      >
        <nav aria-label="Mobile" className="container-x flex flex-col gap-8 py-8">
          <div>
            <p className="label">Services</p>
            <ul className="mt-3 divide-y divide-line border-y border-line">
              {practices.map((p) => (
                <li key={p.slug}>
                  <Link href={`/services/${p.slug}`} className="flex items-center justify-between py-4 text-lg text-text">
                    <span>
                                            {p.name}
                    </span>
                    <Arrow />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <ul className="flex flex-col gap-1">
            {[{ label: "All services", href: "/services" }, ...nav.filter((n) => n.href !== "/services"), { label: "Contact", href: "/contact" }].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="display-s block py-2 text-text">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ButtonLink href="/contact" className="w-full">
            Talk to an engineer
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
