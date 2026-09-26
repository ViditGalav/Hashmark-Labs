import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="ambient relative flex min-h-[80vh] items-center overflow-hidden pb-24 pt-36">
      <div aria-hidden="true" className="grid-lines pointer-events-none absolute inset-0" />
      <div className="container-x relative">
        <p className="eyebrow">Error 404</p>
        <p aria-hidden="true" className="mt-4 font-serif text-[clamp(7rem,4rem+14vw,14rem)] leading-[0.85] tracking-[-0.02em] text-gradient">
          404
        </p>
        <h1 className="display-m mt-6 max-w-2xl">
          This page isn&apos;t <span className="em">on the chain.</span>
        </h1>
        <p className="lead mt-5 max-w-xl">The link may be broken, or the page may have moved.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Contact us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
