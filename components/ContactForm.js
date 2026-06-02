"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      aria-label="Contact form"
      className="space-y-6 max-w-lg mx-auto px-4 md:px-0"
    >
      {/* Name */}
      <div>
        <p className="font-bold text-brand-purple-dark mb-8">Name (Required)</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-firstname" className="text-sm text-brand-purple-dark block mb-1">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-firstname"
              name="first_name"
              type="text"
              required
              className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-brand-purple transition-colors bg-transparent"
            />
          </div>
          <div>
            <label htmlFor="contact-lastname" className="text-sm text-brand-purple-dark block mb-1">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-lastname"
              name="last_name"
              type="text"
              required
              className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-brand-purple transition-colors bg-transparent"
            />
          </div>
        </div>
      </div>

      {/* Email */}
      <div className="mt-13">
        <label htmlFor="contact-email" className="text-sm text-brand-purple-dark block mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-brand-purple transition-colors bg-transparent"
        />
      </div>

      {/* Message */}
      <div className="mt-13">
        <label htmlFor="contact-message" className="text-brand-purple-dark text-sm font-medium block mb-1">
          Message
        </label>
        <p className="text-gray-400 text-xs mb-2">Reach out for any questions or concerns.</p>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          className="w-full bg-[#E6F4F2] mt-4 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/30 transition-colors resize-none"
        />
      </div>

      {/* Status messages */}
      {status === "success" && (
        <p className="text-sm text-green-600">Message sent! We'll be in touch soon.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
      )}

      <div className="flex justify-center md:justify-start">
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-brand-purple-dark text-white font-semibold px-15 py-2 rounded-lg hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending..." : "Contact"}
        </button>
      </div>
    </form>
  );
}