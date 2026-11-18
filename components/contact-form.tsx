"use client";

import { FormEvent, useState } from "react";
import { contactEmail, projectTypes } from "@/lib/content";

type Field = "name" | "email" | "project" | "message";
type Errors = Partial<Record<Field, string>>;

const fields: Field[] = ["name", "email", "project", "message"];

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [mailto, setMailto] = useState<string | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const project = String(data.get("project") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const next: Errors = {};

    if (!name) next.name = "Add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Add a valid email.";
    if (!project) next.project = "Choose what you need.";
    if (message.length < 12) next.message = "Tell us a little about the project.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      setMailto(null);
      const first = fields.find((field) => next[field]);
      if (first) document.getElementById(first)?.focus();
      return;
    }

    const href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      `Forma project — ${project}`,
    )}&body=${encodeURIComponent(`${message}\n\n— ${name}\n${email}`)}`;
    setMailto(href);
    window.location.href = href;
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-6">
      <Field
        id="name"
        label="Name"
        error={errors.name}
        autoComplete="name"
      />
      <Field
        id="email"
        label="Email"
        type="email"
        error={errors.email}
        autoComplete="email"
      />
      <div>
        <label htmlFor="project" className="text-sm tracking-[0.14em] uppercase text-muted">
          What you need
        </label>
        <select
          id="project"
          name="project"
          defaultValue=""
          aria-invalid={errors.project ? true : undefined}
          aria-describedby={errors.project ? "project-error" : undefined}
          className="mt-2 w-full border-b border-ink/30 bg-transparent py-3 text-lg outline-none"
        >
          <option value="" disabled>
            Choose a service
          </option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.project ? (
          <p id="project-error" className="mt-2 text-sm text-clay">
            {errors.project}
          </p>
        ) : null}
      </div>
      <div>
        <label htmlFor="message" className="text-sm tracking-[0.14em] uppercase text-muted">
          About the project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-2 w-full resize-y border-b border-ink/30 bg-transparent py-3 text-lg outline-none"
        />
        {errors.message ? (
          <p id="message-error" className="mt-2 text-sm text-clay">
            {errors.message}
          </p>
        ) : null}
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="bg-ink px-5 py-3 text-paper hover:bg-clay">
          Prepare email
        </button>
        <a href={`mailto:${contactEmail}`} className="link-underline text-sm">
          {contactEmail}
        </a>
      </div>
      <p className="text-sm text-muted" aria-live="polite">
        {mailto
          ? "Your email app should open with the message ready. If it does not, use the address above."
          : "This opens your email app. Nothing is stored on the site."}
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  type = "text",
  autoComplete,
}: {
  id: Field;
  label: string;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm tracking-[0.14em] uppercase text-muted">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-2 w-full border-b border-ink/30 bg-transparent py-3 text-lg outline-none"
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-clay">
          {error}
        </p>
      ) : null}
    </div>
  );
}
