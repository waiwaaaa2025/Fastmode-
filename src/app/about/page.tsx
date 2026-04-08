"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Target,
  Heart,
  Zap,
  Shield,
  Users,
  TrendingUp,
} from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Speed",
    description:
      "We move fast. Positions filled in days, not weeks — because your fleet can't wait.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description:
      "Every candidate is pre-vetted, background checked, and compliance verified before placement.",
  },
  {
    icon: Heart,
    title: "Partnership",
    description:
      "We're not just a staffing agency — we're an extension of your team, invested in your success.",
  },
  {
    icon: Target,
    title: "Precision",
    description:
      "We match the right person to the right role. No generic placements — every hire is intentional.",
  },
  {
    icon: Users,
    title: "People First",
    description:
      "Great companies are built by great people. We take care of our candidates so they take care of you.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "As your operation scales, we scale with you. From one driver to a full team — we grow together.",
  },
];

export default function AboutPage() {
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
              About <span className="text-[#6366f1]">Fast Mode</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed">
              Built by people who know transportation, for people who run it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                Our Story
              </h2>
              <div className="mt-6 space-y-4 text-gray-500 leading-relaxed">
                <p>
                  Fast Mode Cruit was founded with a simple mission: make it
                  easier for transportation companies to find the people they
                  need to keep freight moving.
                </p>
                <p>
                  We saw an industry struggling with driver shortages, high
                  turnover, and a lack of qualified back-office support. Companies
                  were spending more time recruiting than running their business.
                </p>
                <p>
                  So we built a staffing solution designed specifically for
                  trucking and logistics — with the industry knowledge, candidate
                  network, and 24/7 availability that this business demands.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#6366f1] to-[#4f46e5] rounded-3xl p-8 sm:p-10 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/80 leading-relaxed text-lg">
                To be the most trusted staffing partner in the transportation
                industry — connecting companies with exceptional talent, faster
                than anyone else, with the reliability and expertise that keeps
                America&apos;s freight moving.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-white/60 text-sm mt-1">
                    Drivers Placed
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold">150+</div>
                  <div className="text-white/60 text-sm mt-1">
                    Companies Served
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-white/60 text-sm mt-1">
                    Client Retention
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-white/60 text-sm mt-1">
                    Support Hours
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              What drives us
            </h2>
            <p className="mt-4 text-gray-500 text-lg">
              Our values shape every placement, every partnership, and every
              decision we make.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#6366f1]/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-[#6366f1]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let&apos;s build your team together.
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Whether you need one driver or a full support team, we&apos;re ready
            to help.
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
