import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact/ContactForm";
import { DealerList } from "@/components/contact/DealerList";
import { GradientText } from "@/components/ui/GradientText";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { COMPANY_INFO } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with U-Boat Worx headquarters in Breda, Netherlands, or one of our authorised dealers worldwide.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <SectionReveal className="max-w-3xl">
        <p className="font-display text-xs uppercase tracking-[0.3em] text-cyan-soft">
          Contact
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold uppercase tracking-tight text-ink-100 sm:text-5xl">
          Start Your <GradientText>Descent</GradientText>
        </h1>
        <p className="mt-4 text-lg text-ink-300">
          Whether you&apos;re exploring ownership, planning a research
          mission, or commissioning a bespoke build, our team is ready to
          help you find the right submersible.
        </p>
      </SectionReveal>

      <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <SectionReveal className="space-y-8">
          <div className="glass-panel overflow-hidden rounded-2xl">
            <div className="relative aspect-[4/3]">
              <Image
                src={COMPANY_INFO.image}
                alt="U-Boat Worx headquarters in Breda, Netherlands"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <div className="p-6">
              <h2 className="font-display text-lg uppercase tracking-wide text-ink-100">
                {COMPANY_INFO.name}
              </h2>
              <address className="mt-3 space-y-1 text-sm not-italic text-ink-400">
                {COMPANY_INFO.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </address>
              <dl className="mt-4 space-y-2 text-sm text-ink-300">
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-400">Phone</dt>
                  <dd>{COMPANY_INFO.phone}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-400">Email</dt>
                  <dd>{COMPANY_INFO.email}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-400">Hours</dt>
                  <dd className="text-right">{COMPANY_INFO.hours}</dd>
                </div>
              </dl>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <ContactForm />
        </SectionReveal>
      </div>

      <section className="mt-24">
        <SectionReveal className="max-w-2xl">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-cyan-soft">
            Authorised Dealers
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold uppercase tracking-tight text-ink-100 sm:text-4xl">
            Our Global <GradientText>Network</GradientText>
          </h2>
        </SectionReveal>
        <div className="mt-10">
          <DealerList />
        </div>
      </section>
    </div>
  );
}
