import { describe, expect, it } from "vitest";
import { encodeContact, validateContact } from "@/lib/contact";

describe("contact form helpers", () => {
  it("rejects incomplete or malformed fields", () => {
    const errors = validateContact({ name: "A", email: "not-an-email", subject: "Hi", message: "Too short" });
    expect(errors).toEqual(
      expect.objectContaining({
        name: expect.any(String),
        email: expect.any(String),
        subject: expect.any(String),
        message: expect.any(String),
      }),
    );
  });

  it("accepts a complete message and encodes Netlify's form name", () => {
    const fields = {
      name: "Recruiter Name",
      email: "recruiter@example.com",
      subject: "Internship opportunity",
      message: "I would like to discuss a cybersecurity internship opportunity.",
    };
    expect(validateContact(fields)).toEqual({});
    expect(encodeContact(fields)).toContain("form-name=portfolio-contact");
  });
});
