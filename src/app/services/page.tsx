"use client";

import Link from "next/link";
import Image from "next/image";
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
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
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
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&q=80"
          alt="Fleet of trucks"
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
              Our <span className="shimmer-text">Services</span>
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Comprehensive staffing solutions built specifically for the
              transportation and logistics industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 space-y-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Image */}
                <div className="relative h-64 lg:h-auto lg:col-span-2">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/50 hidden lg:block" />
                </div>

                {/* Content */}
                <div className="p-8 sm:p-10 lg:col-span-3">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#6366f1] rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/25">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">
                        {service.title}
                      </h2>
                      <p className="text-sm text-[#6366f1] font-medium">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#6366f1] mt-0.5 shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1920&q=80"
          alt="Highway"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Need a custom staffing solution?
          </h2>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
            We tailor our services to fit your operation. Let&apos;s talk about
            what you need.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#6366f1] text-white font-semibold rounded-xl hover:bg-[#4f46e5] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-indigo-500/30 text-lg"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
