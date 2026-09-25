import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { contact } from "@/content/site";
import { JsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

// Authored notice — logged in _docs/04-ADDED-CONTENT-REGISTER.md (needs legal review).
export const metadata: Metadata = {
  title: "Privacy notice",
  description: "How Hashmark Labs handles the information you send through the contact form on this website.",
  alternates: { canonical: "/privacy" },
  openGraph: { url: "/privacy", title: "Privacy notice · Hashmark Labs" },
};

const sections: { title: string; body: ReactNode }[] = [
  {
    title: "What this notice covers",
    body: (
      <p>
        This notice explains how Hashmark Labs handles the information you choose to send us through the contact form on this website.
        It covers the form only.
      </p>
    ),
  },
  {
    title: "What we collect",
    body: (
      <>
        <p>When you submit the contact form, we receive what you enter:</p>
        <ul>
          <li>your name and work email address;</li>
          <li>optionally, your company or project name, website and Telegram handle;</li>
          <li>the practices you are interested in, and optionally your stage, budget band and timeline;</li>
          <li>your message, and whether you asked for an NDA before we talk.</li>
        </ul>
        <p>
          To protect the form from abuse, your IP address is used briefly to limit repeated submissions. It is held in memory only and is
          not stored with your enquiry.
        </p>
      </>
    ),
  },
  {
    title: "Why we use it",
    body: (
      <p>
        We use this information only to read and respond to your enquiry, to prepare for a conversation with you, and — if we work
        together — to manage that engagement.
      </p>
    ),
  },
  {
    title: "How it is delivered",
    body: (
      <p>
        Form submissions are sent to our inbox through a third-party email delivery provider, which processes the message on our behalf
        in order to deliver it. If you contact us by email or WhatsApp instead, those services process your message under their own
        terms.
      </p>
    ),
  },
  {
    title: "How long we keep it",
    body: <p>Only as long as needed to respond and manage an engagement.</p>,
  },
  {
    title: "What we don't do",
    body: <p>We do not sell your information.</p>,
  },
  {
    title: "Your choices",
    body: (
      <p>
        You can ask us to correct or delete the information you have sent us at any time. Email{" "}
        <a href={`mailto:${contact.email}`}>{contact.email}</a> with your request.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="ambient relative overflow-hidden pb-12 pt-36 lg:pt-44">
        <div className="container-x">
          <header className="max-w-2xl">
            <p className="eyebrow">Privacy</p>
            <h1 className="display-l mt-4">
              Privacy <span className="em">notice.</span>
            </h1>
            <p className="label mt-6">
              Last updated: <time dateTime="2026-09">September 2026</time>
            </p>
          </header>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="container-x">
          <div className="max-w-2xl space-y-10 text-[1.02rem] leading-relaxed [&_a]:text-text [&_a]:underline [&_a]:decoration-line-strong [&_a]:underline-offset-4 hover:[&_a]:text-pink [&_li]:mt-1.5 [&_p+p]:mt-4 [&_p+ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul+p]:mt-4">
            {sections.map((s) => (
              <section key={s.title} aria-labelledby={slug(s.title)}>
                <h2 id={slug(s.title)} className="display-s">
                  {s.title}
                </h2>
                <div className="mt-4">{s.body}</div>
              </section>
            ))}
            <p className="border-t border-line pt-8 text-sm text-muted">
              Questions about this notice? Write to <a href={`mailto:${contact.email}`}>{contact.email}</a> or{" "}
              <Link href="/contact">get in touch</Link>.
            </p>
          </div>
        </div>
      </section>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
        ])}
      />
    </>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
