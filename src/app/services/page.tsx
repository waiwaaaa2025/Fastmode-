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
} from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "CDL Drivers",
    subtitle: "Regional & Over-the-Road",
    description:
      "We source experienced CDL drivers for all cargo types and routes. Whether you need regional day drivers or long-haul OTR operators, we match the right driver to your fleet.",
    features: [
      "Dry van, flatbed, reefer, tanker, and hazmat qualified",
      "Background checked and MVR verified",
      "DOT physical and drug screen compliant",
      "Temporary, contract-to-hire, and permanent placements",
    ],
  },
  {
    icon: Headset,
    title: "Dispatchers",
    subtitle: "In-House & Remote",
    description:
      "Our dispatchers know how to keep loads moving, manage driver communication, and optimize routes for maximum efficiency and profitability.",
    features: [
      "TMS and ELD proficient",
      "Load planning and route optimization",
      "Driver communication and scheduling",
      "Remote dispatch services available",
    ],
  },
  {
    icon: Shield,
    title: "Safety & Compliance",
    subtitle: "DOT & FMCSA Compliance",
    description:
      "Stay ahead of regulations with safety professionals who understand DOT requirements, CSA scores, and fleet compliance management.",
    features: [
      "DOT audit preparation and support",
      "CSA score monitoring and improvement",
      "Driver qualification file management",
      "Safety training program development",
    ],
  },
  {
    icon: Calculator,
    title: "Accounting & Billing",
    subtitle: "Trucking-Experienced Finance",
    description:
      "Our accounting professionals specialize in transportation finance — from factoring and invoicing to IFTA reporting and payroll.",
    features: [
      "Freight billing and invoicing",
      "IFTA and fuel tax reporting",
      "Payroll and settlement processing",
      "Accounts receivable and collections",
    ],
  },
  {
    icon: Users,
    title: "Virtual Recruiters",
    subtitle: "Talent Acquisition Specialists",
    description:
      "Scale your hiring without scaling your HR team. Our virtual recruiters handle sourcing, screening, and onboarding so you can focus on operations.",
    features: [
      "Driver sourcing across multiple platforms",
      "Pre-screening and qualification verification",
      "Recruitment training for your team",
      "Employer branding and job marketing",
    ],
  },
  {
    icon: Clock,
    title: "24/7 After-Hours Support",
    subtitle: "Round-the-Clock Coverage",
    description:
      "Transportation doesn't stop at 5 PM. Our after-hours team handles emergencies, breakdowns, and driver communication when your office is closed.",
    features: [
      "Emergency roadside coordination",
      "Driver check-ins and status updates",
      "Load tracking and customer communication",
      "Incident reporting and documentation",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-indigo-50/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-28 sm:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
              Our <span className="text-[#6366f1]">Services</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed">
              Comprehensive staffing solutions built specifically for the
              transportation and logistics industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#6366f1]/10 rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-[#6366f1]" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {service.title}
                      </h2>
                      <p className="text-sm text-[#6366f1] font-medium">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#6366f1] mt-0.5 shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Need a custom staffing solution?
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            We tailor our services to fit your operation. Let&apos;s talk about
            what you need.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#6366f1] text-white font-medium rounded-xl hover:bg-[#4f46e5] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
