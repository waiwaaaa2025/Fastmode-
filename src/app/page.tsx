"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Truck,
  Headset,
  Shield,
  Calculator,
  Users,
  Clock,
  ArrowRight,
  CheckCircle2,
  Phone,
} from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "CDL Drivers",
    description:
      "Regional and OTR drivers for dry van, flatbed, reefer, tanker, and hazmat loads.",
  },
  {
    icon: Headset,
    title: "Dispatchers",
    description:
      "Experienced dispatchers and remote dispatch services to keep your fleet moving efficiently.",
  },
  {
    icon: Shield,
    title: "Safety & Compliance",
    description:
      "DOT compliance management, safety programs, and regulatory guidance.",
  },
  {
    icon: Calculator,
    title: "Accounting & Billing",
    description:
      "Trucking-experienced accounting professionals for invoicing, payroll, and financials.",
  },
  {
    icon: Users,
    title: "Virtual Recruiters",
    description:
      "Dedicated recruitment specialists and training programs to build your team.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "After-hours support services because transportation never stops.",
  },
];

const stats = [
  { value: "500+", label: "Drivers Placed" },
  { value: "150+", label: "Companies Served" },
  { value: "24/7", label: "Support Available" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-indigo-50/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 sm:pt-28 sm:pb-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full text-sm font-medium text-gray-700 mb-6">
              <span className="w-2 h-2 bg-[#6366f1] rounded-full animate-pulse" />
              Transportation Staffing Experts
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
              The right people,{" "}
              <span className="text-[#6366f1]">moving your business</span>{" "}
              forward.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-500 max-w-2xl leading-relaxed">
              Fast Mode Cruit connects transportation companies with qualified
              drivers, dispatchers, and support staff — around the clock.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-black text-white font-medium rounded-xl hover:bg-gray-800 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Request Pricing
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+18778141807"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-gray-700 font-medium rounded-xl border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                (877) 814-1807
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Everything your fleet needs
            </h2>
            <p className="mt-4 text-gray-500 text-lg">
              From drivers to back-office support, we provide the talent that
              keeps your operation running.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gray-50 group-hover:bg-[#6366f1]/10 rounded-xl flex items-center justify-center mb-4 transition-colors duration-200">
                  <service.icon className="w-6 h-6 text-gray-700 group-hover:text-[#6366f1] transition-colors duration-200" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#6366f1] font-medium hover:text-[#4f46e5] transition-colors"
            >
              View all services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                Why companies choose{" "}
                <span className="text-[#6366f1]">Fast Mode</span>
              </h2>
              <p className="mt-4 text-gray-500 text-lg leading-relaxed">
                We understand the transportation industry because we live it.
                Our team has decades of combined experience in trucking,
                logistics, and workforce management.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Pre-vetted, qualified candidates ready to work",
                  "Industry-specific expertise across all roles",
                  "Flexible staffing — temporary, contract, or permanent",
                  "24/7 support for around-the-clock operations",
                  "Fast turnaround — positions filled in days, not weeks",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#6366f1] mt-0.5 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-black text-white font-medium rounded-xl hover:bg-gray-800 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Partner with us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-sm"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-[#6366f1]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Headset className="w-8 h-8 text-[#6366f1]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Ready to get started?
                </h3>
                <p className="mt-3 text-gray-500">
                  Tell us what you need and we&apos;ll match you with the right
                  talent — fast.
                </p>
                <div className="mt-8 space-y-4">
                  <Link
                    href="/contact"
                    className="block w-full px-6 py-3.5 bg-[#6366f1] text-white font-medium rounded-xl hover:bg-[#4f46e5] transition-all duration-200 text-center"
                  >
                    Request a Quote
                  </Link>
                  <a
                    href="tel:+18778141807"
                    className="block w-full px-6 py-3.5 bg-gray-50 text-gray-700 font-medium rounded-xl hover:bg-gray-100 transition-all duration-200 text-center"
                  >
                    Call (877) 814-1807
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Transportation doesn&apos;t stop after business hours.
            </h2>
            <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
              Neither do we. Get 24/7 staffing support for your fleet.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#6366f1] text-white font-medium rounded-xl hover:bg-[#4f46e5] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Get Started Today
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
