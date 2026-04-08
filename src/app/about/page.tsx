"use client";

import Link from "next/link";
import Image from "next/image";
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
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Reliability",
    description:
      "Every candidate is pre-vetted, background checked, and compliance verified.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Heart,
    title: "Partnership",
    description:
      "We're not just a staffing agency — we're an extension of your team.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Target,
    title: "Precision",
    description:
      "We match the right person to the right role. Every hire is intentional.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Users,
    title: "People First",
    description:
      "Great companies are built by great people. We take care of our candidates.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "As your operation scales, we scale with you. From one driver to a full team.",
    color: "from-indigo-500 to-blue-500",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1605705658744-45f0fe8f9663?w=1920&q=80"
          alt="Truck on the road"
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
              About <span className="shimmer-text">Fast Mode</span>
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Built by people who know transportation, for people who run it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-gray-950 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Our Story
              </h2>
              <div className="mt-6 space-y-4 text-gray-400 leading-relaxed text-lg">
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
              className="relative rounded-3xl overflow-hidden h-96"
            >
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
                alt="Trucks on highway"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#6366f1]/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Our Mission</h3>
                <p className="text-white/80 leading-relaxed">
                  To be the most trusted staffing partner in the transportation
                  industry — connecting companies with exceptional talent, faster
                  than anyone else.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-[#6366f1] to-[#4338ca] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Drivers Placed" },
              { value: "150+", label: "Companies Served" },
              { value: "98%", label: "Client Retention" },
              { value: "24/7", label: "Support Hours" },
            ].map((stat, i) => (
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
                <div className="mt-2 text-white/60 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              What drives us
            </h2>
            <p className="mt-4 text-gray-400 text-lg">
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
                className="group bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-gray-700 hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1920&q=80"
          alt="Highway at sunset"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Let&apos;s build your team together.
          </h2>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
            Whether you need one driver or a full support team, we&apos;re ready
            to help.
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
