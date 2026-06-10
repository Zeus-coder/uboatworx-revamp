"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { MODEL_FAMILIES } from "@/lib/models-data";
import { ENQUIRY_APPLICATIONS, SUBMARINE_INTERESTS } from "@/lib/site-data";

type Status = "idle" | "submitting" | "success" | "error";

const MODEL_OPTIONS = ["No Preference", ...MODEL_FAMILIES.map((model) => model.name)];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Request failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="glass-panel glow-border rounded-2xl p-8 text-center">
        <h3 className="font-display text-xl uppercase tracking-wide text-cyan-soft">
          Message Received
        </h3>
        <p className="mt-3 text-ink-300">
          Thank you for your enquiry. A member of our team will be in touch
          within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel space-y-6 rounded-2xl p-6 sm:p-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full Name" name="name" required />
        <Field label="Email Address" name="email" type="email" required />
        <Field label="Phone Number" name="phone" type="tel" />
        <Field label="Country" name="country" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <SelectField label="Submarine Interest" name="interest" options={SUBMARINE_INTERESTS} />
        <SelectField label="Application" name="application" options={ENQUIRY_APPLICATIONS} />
      </div>

      <SelectField label="Model of Interest" name="model" options={MODEL_OPTIONS} />

      <div>
        <label
          htmlFor="message"
          className="font-display text-xs uppercase tracking-[0.2em] text-ink-400"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your project, intended use, and timeline..."
          className="mt-2 w-full rounded-2xl border border-cyan-glow/15 bg-abyss-900/60 px-4 py-3 text-sm text-ink-100 placeholder:text-ink-400 focus:border-cyan-glow/50 focus:outline-none"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong — please try again or email{" "}
          info@uboatworx.com directly.
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        magnetic
        disabled={status === "submitting"}
        className={status === "submitting" ? "opacity-60" : undefined}
      >
        {status === "submitting" ? "Sending..." : "Send Enquiry"}
      </Button>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
};

function Field({ label, name, type = "text", required }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-display text-xs uppercase tracking-[0.2em] text-ink-400"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-full border border-cyan-glow/15 bg-abyss-900/60 px-4 py-2.5 text-sm text-ink-100 placeholder:text-ink-400 focus:border-cyan-glow/50 focus:outline-none"
      />
    </div>
  );
}

type SelectFieldProps = {
  label: string;
  name: string;
  options: readonly string[];
};

function SelectField({ label, name, options }: SelectFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-display text-xs uppercase tracking-[0.2em] text-ink-400"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="mt-2 w-full rounded-full border border-cyan-glow/15 bg-abyss-900/60 px-4 py-2.5 text-sm text-ink-100 focus:border-cyan-glow/50 focus:outline-none"
      >
        {options.map((option) => (
          <option key={option} value={option} className="bg-abyss-900">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
