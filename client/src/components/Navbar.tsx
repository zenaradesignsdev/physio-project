import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Activity } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Team", href: "/team" },
  { label: "Conditions", href: "/conditions" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-white/10 backdrop-blur-sm py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-[#0F766E] flex items-center justify-center shadow-md group-hover:bg-[#0d9488] transition-colors">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col leading-none">
            <span className={`font-bold text-base tracking-tight ${scrolled ? 'text-[#1F2937]' : 'text-white'}`}>Nova Motion</span>
            <span className={`text-[10px] font-medium tracking-widest uppercase ${scrolled ? 'text-[#0F766E]' : 'text-[#99F6E4]'}`}>Physiotherapy</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                location === link.href
                  ? scrolled ? "bg-[#0F766E]/10 text-[#0F766E]" : "bg-white/20 text-white"
                  : scrolled
                  ? "text-[#1F2937] hover:text-[#0F766E] hover:bg-[#0F766E]/8"
                  : "text-white hover:text-white hover:bg-white/20"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className={`font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 inline-block ${scrolled ? 'bg-[#0F766E] hover:bg-[#0d9488] text-white' : 'bg-white text-[#0F766E] hover:bg-[#99F6E4]'}`}
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-[#1F2937] hover:bg-[#0F766E]/10' : 'text-white hover:bg-white/20'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/98 backdrop-blur-md border-t border-gray-100 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                location === link.href
                  ? "bg-[#0F766E]/10 text-[#0F766E]"
                  : "text-[#1F2937] hover:bg-[#0F766E]/8 hover:text-[#0F766E]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/contact"
              className="block w-full text-center bg-[#0F766E] hover:bg-[#0d9488] text-white font-semibold px-5 py-3 rounded-full text-sm transition-all duration-300"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
