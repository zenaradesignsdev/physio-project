import { Link } from "wouter";
import { Activity, Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white">
      {/* Main Footer */}
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-9 h-9 rounded-xl bg-[#0F766E] flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-white text-base tracking-tight">Nova Motion</span>
                <span className="text-[10px] text-[#99F6E4] font-medium tracking-widest uppercase">Physiotherapy</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Evidence-based physiotherapy care helping you move without pain. Serving our community with compassion and expertise since 2015.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0F766E] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/" },
                { label: "Our Team", href: "/team" },
                { label: "Blog & Resources", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#99F6E4] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-widest">Services</h4>
            <ul className="space-y-2.5">
              {[
                "Manual Therapy",
                "Sports Rehabilitation",
                "Post-Surgical Recovery",
                "Dry Needling",
                "Exercise Therapy",
                "Shockwave Therapy",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-[#99F6E4] text-sm transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-widest">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#0F766E] mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">123 Wellness Avenue, Suite 200<br />Vancouver, BC V6B 1A1</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#0F766E] shrink-0" />
                <a href="tel:+16045550123" className="text-gray-400 hover:text-[#99F6E4] text-sm transition-colors">
                  (604) 555-0123
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#0F766E] shrink-0" />
                <a href="mailto:hello@novamotion.ca" className="text-gray-400 hover:text-[#99F6E4] text-sm transition-colors">
                  hello@novamotion.ca
                </a>
              </li>
            </ul>
            <div className="mt-5 p-3 bg-white/5 rounded-xl">
              <p className="text-xs text-gray-400 font-medium mb-1.5">Hours of Operation</p>
              <p className="text-xs text-gray-300">Mon–Fri: 7:00 AM – 7:00 PM</p>
              <p className="text-xs text-gray-300">Saturday: 8:00 AM – 4:00 PM</p>
              <p className="text-xs text-gray-500">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Nova Motion Physiotherapy. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
