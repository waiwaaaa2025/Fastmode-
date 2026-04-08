import Link from "next/link";
import { Truck, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#6366f1] rounded-xl flex items-center justify-center">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-white tracking-tight">
                Fast<span className="text-[#6366f1]">Mode</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Transportation staffing solutions that keep your business moving 24/7.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services" className="hover:text-white transition-colors">CDL Drivers</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Dispatchers</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Safety & Compliance</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Accounting</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Recruiters</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Our Services</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#6366f1]" />
                <a href="tel:+18778141807" className="hover:text-white transition-colors">(877) 814-1807</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#6366f1]" />
                <a href="mailto:info@fastmodecruit.com" className="hover:text-white transition-colors">info@fastmodecruit.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Fast Mode Cruit. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
