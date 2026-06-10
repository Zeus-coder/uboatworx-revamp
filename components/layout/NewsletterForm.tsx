"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitted");
  };

  if (status === "submitted") {
    return (
      <p className="font-display text-xs uppercase tracking-[0.2em] text-cyan-soft">
        Thank you — you&apos;re on the list.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center gap-2">
      <label htmlFor="footer-email" className="sr-only">
        Email address
      </label>
      <input
        id="footer-email"
        type="email"
        required
        placeholder="Your email address"
        className="w-full rounded-full border border-cyan-glow/15 bg-abyss-900/60 px-4 py-2.5 text-sm text-ink-100 placeholder:text-ink-400 focus:border-cyan-glow/50 focus:outline-none"
      />
      <Button type="submit" size="sm" variant="secondary" className="shrink-0">
        Subscribe
      </Button>
    </form>
  );
}
