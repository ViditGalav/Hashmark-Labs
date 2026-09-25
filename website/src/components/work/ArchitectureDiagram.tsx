import type { Diagram } from "@/content/work";
import { cn } from "@/components/ui/primitives";

// Tints progress violet → plum top-to-bottom, as in the deck diagrams.
const tint = [
  "bg-[rgb(46_36_110/0.55)] border-[rgb(139_123_255/0.28)]",
  "bg-[rgb(56_32_100/0.55)] border-[rgb(185_140_255/0.26)]",
  "bg-[rgb(66_28_82/0.6)] border-[rgb(255_94_142/0.28)]",
  "bg-[rgb(76_26_74/0.62)] border-[rgb(255_94_142/0.34)]",
  "bg-[rgb(84_24_70/0.66)] border-[rgb(255_94_142/0.38)]",
  "bg-[rgb(92_24_68/0.7)] border-[rgb(255_94_142/0.44)]",
];

function DownArrow() {
  return (
    <div className="flex justify-center py-1.5" aria-hidden="true">
      <svg width="14" height="18" viewBox="0 0 14 18">
        <path d="M7 1v12" stroke="#ff5e8e" strokeWidth="3" strokeLinecap="round" />
        <path d="M1.5 10.5 7 16l5.5-5.5" fill="none" stroke="#ff5e8e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export function ArchitectureDiagram({ diagram, compact = false }: { diagram: Diagram; compact?: boolean }) {
  return (
    <figure className={cn("rounded-2xl border border-line bg-[rgb(17_19_42/0.7)]", compact ? "p-4" : "p-5 sm:p-6")}>
      <figcaption className="label mb-4">{diagram.title}</figcaption>

      {diagram.kind === "flow" && (
        <ol>
          {diagram.nodes.map((n, i) => (
            <li key={n.title}>
              {i > 0 && <DownArrow />}
              <div className={cn("rounded-xl border px-4 py-3", tint[Math.min(i * 2, tint.length - 1)])}>
                <p className="text-[0.95rem] font-semibold text-text">{n.title}</p>
                {n.body && <p className="mt-0.5 text-sm text-text-2">{n.body}</p>}
              </div>
            </li>
          ))}
        </ol>
      )}

      {diagram.kind === "layers" && (
        <ol className="space-y-2">
          {diagram.layers.map((layer, i) => {
            const n = diagram.layers.length - i;
            return (
              <li key={layer} className={cn("flex items-center gap-4 rounded-xl border px-4 py-2.5", tint[i])}>
                <span className="font-mono text-sm text-violet">{String(n).padStart(2, "0")}</span>
                <span className="text-[0.95rem] text-text">{layer}</span>
              </li>
            );
          })}
        </ol>
      )}

      {diagram.kind === "components" && (
        <ul className="grid gap-2">
          {diagram.items.map((item, i) => (
            <li key={item} className={cn("flex items-center gap-3 rounded-xl border px-4 py-2.5", tint[i])}>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-pink" aria-hidden="true" />
              <span className="text-[0.95rem] text-text">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {diagram.kind === "fee-router" && (
        <div>
          <div className={cn("rounded-xl border px-4 py-3", tint[0])}>
            <p className="text-[0.95rem] font-semibold text-text">GPX transaction fees</p>
            <p className="mt-0.5 text-sm text-text-2">Every trade funds the ecosystem</p>
          </div>
          <DownArrow />
          <div className={cn("rounded-xl border px-4 py-3 text-center", tint[2])}>
            <p className="text-[0.95rem] font-semibold text-text">Protocol fee router</p>
          </div>
          <DownArrow />
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {["Mines", "Pawn", "Treasury", "GoldPesa"].map((d) => (
              <li key={d} className={cn("rounded-lg border px-2 py-2.5 text-center text-sm font-semibold text-text", tint[4])}>
                {d}
              </li>
            ))}
          </ul>
          <div className="mt-3 rounded-xl border border-line bg-surface px-4 py-3 text-center">
            <p className="font-mono text-[0.95rem] text-pink-soft">
              GPO <span aria-hidden="true">⇄</span>
              <span className="sr-only">exchanges with</span> Vault <span aria-hidden="true">⇄</span>
              <span className="sr-only">exchanges with</span> GPX
            </p>
            <p className="mt-1 text-xs text-muted">1:1 periodic conversion · flexible unstaking</p>
          </div>
        </div>
      )}
    </figure>
  );
}
