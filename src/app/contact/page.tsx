"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [smsMarketing, setSmsMarketing] = useState(false);
  const [smsTransactional, setSmsTransactional] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
          alt="Office team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 overlay-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
              Get in <span className="shimmer-text">Touch</span>
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Tell us about your staffing needs and we&apos;ll put together a
              custom solution for your operation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-gray-950 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h2>

              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: "(877) 814-1807",
                  href: "tel:+18778141807",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@fastmodecruit.com",
                  href: "mailto:info@fastmodecruit.com",
                },
                {
                  icon: MapPin,
                  label: "Coverage",
                  value: "Nationwide",
                  href: null,
                },
                {
                  icon: Clock,
                  label: "Availability",
                  value: "24/7 Support",
                  href: null,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 bg-gray-900 rounded-2xl p-5 border border-gray-800"
                >
                  <div className="w-10 h-10 bg-[#6366f1] rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/25">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white font-medium hover:text-[#6366f1] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="bg-gradient-to-br from-[#6366f1] to-[#4338ca] rounded-2xl p-6">
                <h3 className="font-bold text-white mb-2">Quick Response</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  We respond to all inquiries within 2 business hours. For
                  urgent needs, call us directly.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2"
            >
              {submitted ? (
                <div className="bg-gray-900 rounded-3xl border border-gray-800 p-8 sm:p-12 text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Message Sent!
                  </h3>
                  <p className="mt-3 text-gray-400 max-w-md mx-auto">
                    Thank you for reaching out. Our team will review your request
                    and get back to you within 2 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        company: "",
                        email: "",
                        phone: "",
                        service: "",
                        message: "",
                      });
                    }}
                    className="mt-6 text-[#6366f1] font-medium hover:text-[#818cf8] transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-gray-900 rounded-3xl border border-gray-800 p-8 sm:p-10"
                >
                  <h2 className="text-2xl font-bold text-white mb-8">
                    Request Pricing
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6366f1]/50 focus:border-[#6366f1] transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Company *
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={form.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6366f1]/50 focus:border-[#6366f1] transition-all"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6366f1]/50 focus:border-[#6366f1] transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6366f1]/50 focus:border-[#6366f1] transition-all"
                        placeholder="(555) 123-4567"
                      />
                      {/* SMS Opt-In / Opt-Out for GoHighLevel */}
                      <div className="mt-3 space-y-3">
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={smsMarketing}
                            onChange={(e) => setSmsMarketing(e.target.checked)}
                            className="mt-0.5 w-4 h-4 rounded border-gray-600 bg-gray-700 text-[#6366f1] focus:ring-[#6366f1]/50 focus:ring-2 cursor-pointer"
                          />
                          <span className="text-sm text-gray-400 leading-snug">
                            I consent to receive marketing text messages from Domilea.CO at the phone number provided. Up to 4 messages per month. Message &amp; data rates may apply. Reply STOP to unsubscribe. Text HELP for assistance.
                          </span>
                        </label>
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={smsTransactional}
                            onChange={(e) => setSmsTransactional(e.target.checked)}
                            className="mt-0.5 w-4 h-4 rounded border-gray-600 bg-gray-700 text-[#6366f1] focus:ring-[#6366f1]/50 focus:ring-2 cursor-pointer"
                          />
                          <span className="text-sm text-gray-400 leading-snug">
                            I consent to receive non-marketing text messages from Domilea.CO about my order updates, appointment reminders, and other transactional notifications. Up to 4 messages per month. Message &amp; data rates may apply. Reply STOP to unsubscribe. Text HELP for assistance.
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Service Needed *
                      </label>
                      <select
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/50 focus:border-[#6366f1] transition-all"
                      >
                        <option value="">Select a service</option>
                        <option value="cdl-drivers">CDL Drivers</option>
                        <option value="dispatchers">Dispatchers</option>
                        <option value="safety">Safety & Compliance</option>
                        <option value="accounting">Accounting & Billing</option>
                        <option value="recruiters">Virtual Recruiters</option>
                        <option value="after-hours">24/7 After-Hours Support</option>
                        <option value="multiple">Multiple Services</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Tell us about your needs *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6366f1]/50 focus:border-[#6366f1] transition-all resize-none"
                        placeholder="Describe your staffing needs, fleet size, timeline, etc."
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#6366f1] text-white font-semibold rounded-xl hover:bg-[#4f46e5] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-indigo-500/25"
                  >
                    <Send className="w-4 h-4" />
                    Send Request
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
