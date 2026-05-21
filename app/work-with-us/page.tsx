"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { CheckCircle, Clock, Users, Lightbulb } from "lucide-react";

/* ─── What to Expect ─────────────────────────────────────────────── */

const expectations = [
  {
    icon: Clock,
    title: "One Semester",
    body: "Engagements run the length of an academic semester, roughly four months. Your team commits to weekly check-ins and gives our consultants access to the information they need to do good work.",
  },
  {
    icon: Users,
    title: "A Dedicated Team",
    body: "You'll work with a team of four to six Georgetown undergraduates, led by a Project Manager and a Senior Consultant. They'll treat your organization like a client and your mission like it matters, because it does.",
  },
  {
    icon: Lightbulb,
    title: "Tailored Deliverables",
    body: "Every engagement is scoped to your specific challenges. Past deliverables have included strategic plans, brand identities, grant research toolkits, employee handbooks, websites, and social media campaigns.",
  },
  {
    icon: CheckCircle,
    title: "Pro Bono, Always",
    body: "DCivitas charges nothing for our services. Every team commits fully from kickoff through final presentation, bringing the same rigor and dedication you'd expect from a professional firm, at no cost.",
  },
];

/* ─── Hero ───────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section
      className="pt-32 pb-20 md:pt-44 md:pb-28"
      style={{ backgroundColor: "var(--purple-deep)" }}
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <FadeIn>
          <p className="eyebrow mb-6" style={{ color: "var(--purple-light)" }}>
            Work with Us
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h1
            className="mb-6"
            style={{
              fontFamily: "var(--font-pt-serif), 'PT Serif', Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(2.25rem, 5vw, 4rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--paper)",
              maxWidth: "22ch",
            }}
          >
            Bring DCivitas to your organization.
          </h1>
        </FadeIn>
        <FadeIn delay={0.16}>
          <p
            style={{
              fontSize: "var(--text-md)",
              lineHeight: 1.7,
              color: "rgba(233,234,244,0.72)",
              maxWidth: "54ch",
              fontFamily: "var(--font-public-sans)",
            }}
          >
            DCivitas partners with nonprofits in the D.C.-Maryland-Virginia area
            each semester. We bring structured consulting work, motivated Georgetown
            students, and a commitment to your mission, at no cost to your organization.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── What to Expect ─────────────────────────────────────────────── */

function WhatToExpect() {
  return (
    <section style={{ backgroundColor: "var(--paper)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <FadeIn>
          <p className="eyebrow mb-4" style={{ color: "var(--purple-mid)" }}>
            What to Expect
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h2
            className="mb-14"
            style={{
              fontFamily: "var(--font-pt-serif), 'PT Serif', Georgia, serif",
              fontWeight: 400,
              fontSize: "var(--text-xl)",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
              color: "var(--ink)",
              maxWidth: "36ch",
            }}
          >
            A structured engagement built around your goals.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expectations.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={0.06 + i * 0.08}>
                <div
                  className="p-8 flex gap-6 h-full"
                  style={{ border: "1px solid rgba(102,96,161,0.15)" }}
                >
                  <div
                    className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center mt-0.5"
                    style={{
                      backgroundColor: "var(--purple-pale)",
                      color: "var(--purple-dark)",
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3
                      className="mb-3"
                      style={{
                        fontFamily: "var(--font-pt-serif), 'PT Serif', Georgia, serif",
                        fontWeight: 400,
                        fontSize: "var(--text-md)",
                        lineHeight: 1.3,
                        color: "var(--ink)",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "var(--text-sm)",
                        lineHeight: 1.75,
                        color: "rgba(44,47,61,0.72)",
                        fontFamily: "var(--font-public-sans)",
                      }}
                    >
                      {item.body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Intake Form ────────────────────────────────────────────────── */

function IntakeForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section style={{ backgroundColor: "var(--purple-pale)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left: context */}
          <div className="md:sticky md:top-32">
            <FadeIn>
              <p className="eyebrow mb-4" style={{ color: "var(--purple-mid)" }}>
                Get in Touch
              </p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "var(--font-pt-serif), 'PT Serif', Georgia, serif",
                  fontWeight: 400,
                  fontSize: "var(--text-xl)",
                  lineHeight: 1.25,
                  letterSpacing: "-0.01em",
                  color: "var(--ink)",
                }}
              >
                Tell us about your organization.
              </h2>
            </FadeIn>
            <FadeIn delay={0.14}>
              <p
                className="mb-8"
                style={{
                  fontSize: "var(--text-base)",
                  lineHeight: 1.75,
                  color: "rgba(44,47,61,0.75)",
                  fontFamily: "var(--font-public-sans)",
                  maxWidth: "44ch",
                }}
              >
                Fill out the form and we&rsquo;ll be in touch before the next
                semester cycle begins. We review all submissions and reach out
                to organizations that are a strong fit for our consulting teams.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div
                className="p-6"
                style={{
                  backgroundColor: "var(--paper)",
                  border: "1px solid rgba(102,96,161,0.15)",
                }}
              >
                <p
                  className="eyebrow mb-3"
                  style={{ color: "var(--purple-mid)", fontSize: "var(--text-xs)" }}
                >
                  Good fits for DCivitas
                </p>
                <ul className="space-y-2">
                  {[
                    "Nonprofits based in the DMV area",
                    "Organizations with a clear challenge we can address",
                    "Teams that can commit to weekly touchpoints",
                    "Missions serving underresourced communities",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 items-start"
                      style={{
                        fontSize: "var(--text-sm)",
                        color: "rgba(44,47,61,0.75)",
                        fontFamily: "var(--font-public-sans)",
                        lineHeight: 1.6,
                      }}
                    >
                      <span
                        className="shrink-0 mt-[0.35rem] w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: "var(--purple-mid)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Right: form */}
          <FadeIn delay={0.1}>
            {submitted ? (
              <div
                className="p-10 text-center"
                style={{
                  backgroundColor: "var(--paper)",
                  border: "1px solid rgba(102,96,161,0.15)",
                }}
              >
                <p
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-pt-serif), 'PT Serif', Georgia, serif",
                    fontWeight: 400,
                    fontSize: "var(--text-lg)",
                    color: "var(--ink)",
                  }}
                >
                  Thank you for reaching out.
                </p>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "rgba(44,47,61,0.65)",
                    fontFamily: "var(--font-public-sans)",
                    lineHeight: 1.7,
                  }}
                >
                  We&rsquo;ll review your submission and be in touch before the
                  next semester cycle.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                style={{
                  backgroundColor: "var(--paper)",
                  border: "1px solid rgba(102,96,161,0.15)",
                  padding: "2.5rem",
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Field label="First Name" name="firstName" required />
                  <Field label="Last Name" name="lastName" required />
                </div>
                <Field label="Email Address" name="email" type="email" required />
                <Field label="Organization Name" name="orgName" required />
                <Field label="Organization Website" name="orgWebsite" type="url" />
                <SelectField
                  label="Primary Service Area Needed"
                  name="serviceArea"
                  options={[
                    "Operations",
                    "Strategy",
                    "Marketing & Outreach",
                    "Data & Analytics",
                    "Not sure, open to discussion",
                  ]}
                />
                <TextareaField
                  label="Briefly describe your organization and the challenge you're facing"
                  name="challenge"
                  rows={5}
                  required
                />
                <TextareaField
                  label="What would a successful engagement look like for you?"
                  name="successLooks"
                  rows={4}
                />
                <Field
                  label="How did you hear about DCivitas?"
                  name="referral"
                />

                <button
                  type="submit"
                  className="w-full py-3.5 font-semibold transition-opacity duration-150 hover:opacity-85"
                  style={{
                    backgroundColor: "var(--purple-dark)",
                    color: "var(--paper)",
                    fontSize: "var(--text-sm)",
                    fontFamily: "var(--font-public-sans)",
                    letterSpacing: "0.04em",
                  }}
                >
                  Submit Inquiry
                </button>

                <p
                  style={{
                    fontSize: "var(--text-xs)",
                    color: "rgba(44,47,61,0.5)",
                    fontFamily: "var(--font-public-sans)",
                    textAlign: "center",
                    lineHeight: 1.6,
                  }}
                >
                  We review all submissions and respond to organizations that are a
                  strong fit. Submitting does not guarantee a partnership.
                </p>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─── Form helpers ───────────────────────────────────────────────── */

const inputBase: React.CSSProperties = {
  width: "100%",
  padding: "0.625rem 0.875rem",
  fontSize: "var(--text-sm)",
  fontFamily: "var(--font-public-sans)",
  color: "var(--ink)",
  backgroundColor: "var(--paper)",
  border: "1px solid rgba(102,96,161,0.3)",
  outline: "none",
  lineHeight: 1.5,
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "var(--text-xs)",
  fontFamily: "var(--font-public-sans)",
  fontWeight: 600,
  color: "rgba(44,47,61,0.65)",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  marginBottom: "0.5rem",
};

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} style={labelStyle}>
        {label}
        {required && (
          <span style={{ color: "var(--purple-mid)", marginLeft: "0.2rem" }}>*</span>
        )}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        style={inputBase}
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label htmlFor={name} style={labelStyle}>
        {label}
      </label>
      <select id={name} name={name} style={{ ...inputBase, appearance: "none" }}>
        <option value="">Select one</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextareaField({
  label,
  name,
  rows = 4,
  required = false,
}: {
  label: string;
  name: string;
  rows?: number;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} style={labelStyle}>
        {label}
        {required && (
          <span style={{ color: "var(--purple-mid)", marginLeft: "0.2rem" }}>*</span>
        )}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        required={required}
        style={{ ...inputBase, resize: "vertical" }}
      />
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */

export default function WorkWithUsPage() {
  return (
    <>
      <Hero />
      <WhatToExpect />
      <IntakeForm />
    </>
  );
}
