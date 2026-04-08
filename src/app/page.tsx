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
  Phone,
  Star,
} from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "CDL Drivers",
    description: "Regional and OTR drivers for all cargo types.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80",
  },
  {
    icon: Headset,
    title: "Dispatchers",
    description: "Expert dispatch services to keep loads moving.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80",
  },
  {
    icon: Shield,
    title: "Safety & Compliance",
    description: "DOT compliance and safety program management.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
  },
  {
    icon: Calculator,
    title: "Accounting",
    description: "Trucking-experienced finance professionals.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
  },
  {
    icon: Users,
    title: "Recruiters",
    description: "Virtual recruitment specialists for your team.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "After-hours coverage that never sleeps.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
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
      {/* Hero - Dark with background image */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1657469067800-65aa03710ef0?w=1920&q=80"
          alt="Truck driver standing next to semi truck"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 overlay-gradient" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 mb-6 border border-white/20">
              <span className="w-2 h-2 bg-[#6366f1] rounded-full animate-pulse" />
              Transportation Staffing Experts
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
              The right people,{" "}
              <span className="shimmer-text">moving your business</span>{" "}
              forward.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed">
              Fast Mode Cruit connects transportation companies with qualified
              drivers, dispatchers, and support staff — around the clock.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#6366f1] text-white font-semibold rounded-xl hover:bg-[#4f46e5] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-indigo-500/30 text-lg"
              >
                Request Pricing
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+18778141807"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-200 text-lg"
              >
                <Phone className="w-5 h-5" />
                (877) 814-1807
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats - Dark section */}
      <section className="bg-gray-900 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
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
                <div className="text-4xl sm:text-5xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Cards with images */}
      <section className="py-20 sm:py-28 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Everything your fleet needs
            </h2>
            <p className="mt-4 text-gray-400 text-lg">
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
                className="group relative rounded-2xl overflow-hidden h-72 cursor-pointer"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-[#6366f1] rounded-xl flex items-center justify-center shadow-lg">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-white/70 text-sm">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#6366f1] text-white font-semibold rounded-xl hover:bg-[#4f46e5] transition-all shadow-lg shadow-indigo-500/25"
            >
              View all services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us - Split with image */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image side */}
          <div className="relative h-96 lg:h-auto">
            <Image
              src="https://images.unsplash.com/photo-1605705658744-45f0fe8f9663?w=1000&q=80"
              alt="Truck driver"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 lg:bg-none" />
          </div>

          {/* Content side */}
          <div className="bg-gray-900 px-8 sm:px-12 lg:px-16 py-16 sm:py-24 flex items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Why companies choose{" "}
                <span className="text-[#6366f1]">Fast Mode</span>
              </h2>
              <p className="mt-4 text-gray-400 text-lg leading-relaxed">
                We understand transportation because we live it. Decades of
                combined experience in trucking, logistics, and workforce
                management.
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
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#6366f1] text-white font-semibold rounded-xl hover:bg-[#4f46e5] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-indigo-500/25"
                >
                  Partner with us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-gradient-to-br from-[#6366f1] to-[#4338ca] py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-300 fill-yellow-300" />
              ))}
            </div>
            <blockquote className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              &ldquo;Fast Mode Cruit filled 12 driver positions for us in under
              two weeks. Their team understands trucking — they don&apos;t just
              send bodies, they send qualified professionals.&rdquo;
            </blockquote>
            <div className="mt-8">
              <div className="text-white font-semibold">Operations Manager</div>
              <div className="text-white/60 text-sm">Regional Carrier, Texas</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA - with background image */}
      <section className="relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1920&q=80"
          alt="Highway at sunset"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Transportation doesn&apos;t stop<br />after business hours.
            </h2>
            <p className="mt-4 text-gray-300 text-xl max-w-2xl mx-auto">
              Neither do we. Get 24/7 staffing support for your fleet.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#6366f1] text-white font-semibold rounded-xl hover:bg-[#4f46e5] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-indigo-500/30 text-lg"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+18778141807"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-200 text-lg"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
