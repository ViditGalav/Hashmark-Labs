"use client";

import { useRouter } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { practices } from "@/content/practices";
import { cases } from "@/content/work";
import { contact } from "@/content/site";
import { cn } from "@/components/ui/primitives";

type Entry = { group: string; label: string; hint?: string; href: string; keywords?: string };

const entries: Entry[] = [
  { group: "Pages", label: "Home", href: "/" },
  { group: "Pages", label: "Services", href: "/services" },
  { group: "Pages", label: "Work", href: "/work" },
  { group: "Pages", label: "Approach", href: "/approach", keywords: "process principles engagement" },
  { group: "Pages", label: "About", href: "/about", keywords: "team vidit haard bhargava" },
  { group: "Pages", label: "Contact", href: "/contact", keywords: "email whatsapp talk" },
  ...practices.map((p) => ({
    group: "Practices",
    label: p.name,
    hint: p.index,
    href: `/services/${p.slug}`,
    keywords: p.services.items.map((s) => s.title).join(" ") + " " + p.services.also.join(" "),
  })),
  ...practices.flatMap((p) =>
    p.services.items.map((s) => ({ group: "Services", label: s.title, hint: p.name, href: `/services/${p.slug}`, keywords: s.body })),
  ),
  ...cases.map((c) => ({ group: "Case studies", label: c.name, hint: c.category, href: `/work/${c.slug}`, keywords: c.stack.join(" ") + " " + c.summary })),
  { group: "Contact", label: `Email ${contact.email}`, href: `mailto:${contact.email}` },
  { group: "Contact", label: `WhatsApp ${contact.whatsappDisplay}`, href: contact.whatsappHref },
];

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const restoreFocus = useRef<HTMLElement | null>(null);
  const listId = useId();

  const results = useMemo(() => {
    const terms = q.toLowerCase().trim().split(/\s+/).filter(Boolean);
    if (!terms.length) return entries.filter((e) => e.group !== "Services");
    return entries.filter((e) => {
      const hay = `${e.label} ${e.hint ?? ""} ${e.keywords ?? ""} ${e.group}`.toLowerCase();
      return terms.every((t) => hay.includes(t));
    });
  }, [q]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("hm:open-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("hm:open-palette", onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      restoreFocus.current = document.activeElement as HTMLElement | null;
      requestAnimationFrame(() => inputRef.current?.focus());
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      restoreFocus.current?.focus?.();
    }
  }, [open]);

  const go = (e: Entry) => {
    setOpen(false);
    setQ("");
    if (/^(https?:|mailto:)/.test(e.href)) window.open(e.href, e.href.startsWith("http") ? "_blank" : "_self", "noopener");
    else router.push(e.href);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-start justify-center bg-bg/70 px-4 pt-[12vh] backdrop-blur-sm" onMouseDown={() => setOpen(false)}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search the site"
        className="card w-full max-w-xl overflow-hidden border-line-strong bg-surface shadow-2xl shadow-black/60"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-line px-4">
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="text-muted">
            <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="m11 11 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setActive(0);
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActive((a) => Math.min(a + 1, results.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActive((a) => Math.max(a - 1, 0));
              } else if (e.key === "Enter" && results[active]) {
                e.preventDefault();
                go(results[active]);
              } else if (e.key === "Escape") {
                setOpen(false);
              }
            }}
            role="combobox"
            aria-expanded="true"
            aria-controls={listId}
            aria-activedescendant={results[active] ? `${listId}-${active}` : undefined}
            aria-label="Search pages, services and case studies"
            placeholder="Search services, case studies, pages…"
            className="h-14 flex-1 bg-transparent text-[0.98rem] text-text placeholder:text-faint focus:outline-none"
          />
          <kbd className="rounded border border-line px-1.5 py-0.5 font-mono text-[0.65rem] text-faint">ESC</kbd>
        </div>
        <ul id={listId} role="listbox" className="max-h-[55vh] overflow-y-auto p-2">
          {results.length === 0 && <li className="px-3 py-8 text-center text-sm text-muted">No results for “{q}”.</li>}
          {results.map((r, i) => {
            const header = i === 0 || results[i - 1].group !== r.group ? r.group : null;
            return (
              <li key={`${r.group}-${r.label}-${r.href}`} role="presentation">
                {header && <p aria-hidden="true" className="label px-3 pb-1 pt-3 !text-[0.62rem]">{header}</p>}
                <div
                  id={`${listId}-${i}`}
                  role="option"
                  aria-selected={i === active}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => go(r)}
                  className={cn(
                    "flex cursor-pointer items-center justify-between gap-4 rounded-lg px-3 py-2.5 text-[0.93rem]",
                    i === active ? "bg-white/[0.06] text-text" : "text-text-2",
                  )}
                >
                  <span>{r.label}</span>
                  {r.hint && <span className="truncate font-mono text-[0.68rem] uppercase tracking-[0.12em] text-faint">{r.hint}</span>}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

/** Small trigger button for the header. */
export function PaletteTrigger({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("hm:open-palette"))}
      className={cn(
        "h-11 items-center justify-center gap-2 rounded-full border border-line-strong px-3 text-sm text-muted transition-colors hover:border-pink/50 hover:text-text lg:h-10",
        className,
      )}
      aria-label="Search the site (Ctrl or Command + K)"
    >
      <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
        <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="m11 11 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <kbd className="hidden font-mono text-[0.65rem] tracking-wider lg:inline">⌘K</kbd>
    </button>
  );
}
