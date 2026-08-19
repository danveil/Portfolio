"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { encodeContact, validateContact, type ContactErrors, type ContactFields } from "@/lib/contact";

const initialFields: ContactFields = { name: "", email: "", subject: "", message: "" };

export function ContactForm() {
  const [fields, setFields] = useState(initialFields);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");

  function update<K extends keyof ContactFields>(key: K, value: ContactFields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
    if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContact(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setState("sending");
    try {
      if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
        setState("success");
        setFields(initialFields);
        return;
      }
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeContact(fields),
      });
      if (!response.ok) throw new Error("Submission failed");
      setState("success");
      setFields(initialFields);
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 size={28} />
        <h3>Message queued.</h3>
        <p>Thanks for reaching out. Afiq will get back to you as soon as possible.</p>
        <button className="text-button" type="button" onClick={() => setState("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      className="contact-form"
      name="portfolio-contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={submit}
      noValidate
    >
      <input type="hidden" name="form-name" value="portfolio-contact" />
      <p className="hidden-field">
        <label>
          Do not fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <div className="form-row">
        <Field
          label="Name"
          name="name"
          value={fields.name}
          onChange={(value) => update("name", value)}
          error={errors.name}
          autoComplete="name"
        />
        <Field
          label="Email"
          name="email"
          type="email"
          value={fields.email}
          onChange={(value) => update("email", value)}
          error={errors.email}
          autoComplete="email"
        />
      </div>
      <Field
        label="Subject"
        name="subject"
        value={fields.subject}
        onChange={(value) => update("subject", value)}
        error={errors.subject}
      />
      <label className="field">
        <span>Message</span>
        <textarea
          name="message"
          rows={6}
          value={fields.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? <small id="message-error">{errors.message}</small> : null}
      </label>
      {state === "error" ? (
        <p className="form-error" role="alert">
          The form could not submit. Please email Afiq directly instead.
        </p>
      ) : null}
      <button className="button primary submit-button" type="submit" disabled={state === "sending"}>
        {state === "sending" ? (
          "Sending…"
        ) : (
          <>
            Send message <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: keyof ContactFields;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  const errorId = `${name}-error`;
  return (
    <label className="field">
      <span>{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
      />
      {error ? <small id={errorId}>{error}</small> : null}
    </label>
  );
}
