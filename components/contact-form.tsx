"use client";

import { FormEvent, useState } from "react";
import { contactEmail, projectTypes, web3formsKey } from "@/lib/content";

type Field = "name" | "email" | "project" | "message";
type Errors = Partial<Record<Field, string>>;
type Status = "idle" | "sending" | "sent" | "error";

const fields: Field[] = ["name", "email", "project", "message"];

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get("botcheck")) return;
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const project = String(data.get("project") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const next: Errors = {};

    if (!name) next.name = "Add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Add a valid email.";
    if (!project) next.project = "Choose what you need.";
    if (!message) next.message = "Add a note about the project.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      setStatus("idle");
      const first = fields.find((field) => next[field]);
      if (first) document.getElementById(first)?.focus();
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3formsKey,
          name,
          email,
          message: `${message}\n\nProject: ${project}`,
          subject: `Forma project — ${project}`,
          from_name: "Forma website",
          replyto: email,
        }),
      });
      const result = (await response.json()) as { success?: boolean };

      if (!response.ok || !result.success) {
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-6">
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
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
          className="field"
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
          className="field resize-y"
        />
        {errors.message ? (
          <p id="message-error" className="mt-2 text-sm text-clay">
            {errors.message}
          </p>
        ) : null}
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-ink px-5 py-3 text-paper transition-colors hover:bg-clay disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send"}
        </button>
        <a href={`mailto:${contactEmail}`} className="link-underline text-sm">
          {contactEmail}
        </a>
      </div>
      <p className="text-sm text-muted" aria-live="polite">
        {status === "sent"
          ? "Sent. We will write back to the email you entered."
          : status === "error"
            ? "The message did not send. Try again, or use the address above."
            : "This sends a message to the studio. We will reply by email."}
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
        className="field"
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-clay">
          {error}
        </p>
      ) : null}
    </div>
  );
}
