"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/components/ui/primitives";

export type WorkFilterOption = { id: string; label: string };
export type WorkFilterItem = { id: string; groups: string[]; content: ReactNode };

/**
 * Filter chips for the flagship case list. Items are server-rendered and passed in as nodes;
 * without JS the state stays on "all", so every case is visible.
 */
export function WorkFilter({ options, items, allLabel = "All" }: { options: WorkFilterOption[]; items: WorkFilterItem[]; allLabel?: string }) {
  const [active, setActive] = useState<string>("all");
  const all: WorkFilterOption[] = [{ id: "all", label: allLabel }, ...options];
  const visible = items.filter((it) => active === "all" || it.groups.includes(active));
  const activeLabel = all.find((o) => o.id === active)?.label ?? allLabel;

  return (
    <div>
      <div className="flex flex-col gap-5 border-b border-line pb-6 md:flex-row md:items-center md:justify-between" data-reveal>
        <div role="group" aria-label="Filter case studies by domain" className="-mx-1 flex flex-wrap gap-2">
          {all.map((o) => {
            const pressed = active === o.id;
            const count = o.id === "all" ? items.length : items.filter((it) => it.groups.includes(o.id)).length;
            return (
              <button
                key={o.id}
                type="button"
                aria-pressed={pressed}
                onClick={() => setActive(o.id)}
                className={cn(
                  "inline-flex min-h-11 items-center gap-2 rounded-full border px-4 font-mono text-[0.72rem] uppercase tracking-[0.16em] transition-colors duration-300",
                  pressed
                    ? "border-pink/60 bg-pink/[0.1] text-pink"
                    : "border-line bg-surface-2/60 text-text-2 hover:border-line-strong hover:text-text",
                )}
              >
                {o.label}
                <span aria-hidden="true" className={cn("text-[0.65rem]", pressed ? "text-pink-soft" : "text-faint")}>
                  {String(count).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>
        <p className="label shrink-0" aria-live="polite">
          {String(visible.length).padStart(2, "0")} of {String(items.length).padStart(2, "0")}
          <span className="sr-only"> case studies shown — {activeLabel}</span>
        </p>
      </div>

      <ul className="mt-10 grid gap-6">
        {items.map((it) => (
          <li key={it.id} hidden={!visible.includes(it)}>
            {it.content}
          </li>
        ))}
      </ul>
    </div>
  );
}
