export interface ContactFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type ContactErrors = Partial<Record<keyof ContactFields, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(fields: ContactFields): ContactErrors {
  const errors: ContactErrors = {};
  const name = fields.name.trim();
  const email = fields.email.trim();
  const subject = fields.subject.trim();
  const message = fields.message.trim();

  if (name.length < 2) errors.name = "Please enter at least 2 characters.";
  if (!EMAIL_PATTERN.test(email)) errors.email = "Enter a valid email address.";
  if (subject.length < 3) errors.subject = "Please enter a short subject.";
  if (message.length < 20) errors.message = "Please share at least 20 characters.";
  if (message.length > 2000) errors.message = "Please keep your message below 2,000 characters.";

  return errors;
}

export function encodeContact(fields: ContactFields) {
  return new URLSearchParams({ "form-name": "portfolio-contact", ...fields }).toString();
}
