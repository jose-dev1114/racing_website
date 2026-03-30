"use client";

import { useState } from "react";
import QuoteStrip from "@/components/QuoteStrip";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  }

  return (
    <div className="flex flex-col min-h-screen section-blue">
      {/* Page Hero */}
      <div
        className="page-hero"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1541447271487-09612b3f49f7?auto=format&fit=crop&w=1800&q=85)",
        }}
      >
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
          <h1 className="page-title animate-fade-up">Partner With Carter</h1>
          <div className="page-header__divider animate-fade-up delay-100" />
          <p className="text-white/60 text-sm tracking-widest uppercase animate-fade-up delay-200">
            Sponsorship · Media · Collaborations
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <section className="flex-1 page-section px-4 sm:px-6">
        <div className="page-content--narrow mx-auto">
          <p className="text-white/80 text-base sm:text-lg text-center mb-3 leading-relaxed animate-fade-up">
            For partnership opportunities, media inquiries, or professional collaborations,
            please reach out below.
          </p>
          <p className="text-white/60 text-sm text-center mb-10 animate-fade-up delay-100">
            Or email directly:{" "}
            <a
              href="mailto:ck@carterknight.racing"
              className="text-white font-semibold underline underline-offset-4 decoration-white/40 hover:decoration-white transition-all"
            >
              ck@carterknight.racing
            </a>
          </p>

          {submitted ? (
            /* Success state */
            <div className="card text-center py-14 animate-fade-up delay-200">
              <div className="text-5xl mb-5">🏁</div>
              <p className="text-white text-2xl font-bold mb-2">Message Sent!</p>
              <p className="text-white/65 text-base leading-relaxed max-w-[360px] mx-auto">
                Thanks for reaching out. Carter will get back to you as soon as possible.
              </p>
              <button
                className="btn-primary mt-8"
                onClick={() => setSubmitted(false)}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 animate-fade-up delay-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="form-input"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="form-input"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="form-input"
                  placeholder="Partnership / Media / Other"
                />
              </div>
              <div>
                <label className="form-label">Message</label>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="form-input resize-y"
                  placeholder="Tell us about your partnership interest or inquiry..."
                />
              </div>
              <div className="text-center pt-2">
                <button type="submit" className="btn-primary px-12">
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <QuoteStrip />
    </div>
  );
}

