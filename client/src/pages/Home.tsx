import { useEffect, useRef } from "react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import {
  CheckCircle, Star, ArrowRight, Phone, Calendar,
  Activity, Zap, Heart, Shield, Users, Award,
  ChevronRight, Dumbbell, Brain, Bone, Stethoscope, Move, Waves
} from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407703240/EpUJ8dvArWkCkVnJwS3RiA/hero-physio_461815f7.jpg";
const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407703240/EpUJ8dvArWkCkVnJwS3RiA/about-clinic_12752c8f.jpg";
const TEAM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407703240/EpUJ8dvArWkCkVnJwS3RiA/team-treatment_1a7906e3.jpg";
const CTA_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407703240/EpUJ8dvArWkCkVnJwS3RiA/booking-cta-bg_0e747a35.jpg";
const REHAB_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407703240/EpUJ8dvArWkCkVnJwS3RiA/exercise-rehab_8c36ffab.jpg";

const services = [
  { icon: Move, title: "Manual Therapy", desc: "Hands-on techniques to restore joint mobility, reduce pain, and improve tissue function." },
  { icon: Dumbbell, title: "Sports Rehabilitation", desc: "Targeted programs to help athletes recover faster and return to peak performance." },
  { icon: Activity, title: "Post-Surgical Recovery", desc: "Structured rehabilitation protocols following orthopedic and soft-tissue surgeries." },
  { icon: Zap, title: "Dry Needling", desc: "Precision needle therapy targeting trigger points to release muscle tension and pain." },
  { icon: Brain, title: "Exercise Therapy", desc: "Evidence-based therapeutic exercise programs tailored to your specific goals." },
  { icon: Waves, title: "Shockwave Therapy", desc: "Non-invasive acoustic wave treatment for chronic tendon and soft tissue conditions." },
];

const whyUs = [
  { icon: Users, title: "Personalized Plans", desc: "Every treatment plan is uniquely designed around your body, goals, and lifestyle." },
  { icon: Award, title: "Licensed Experts", desc: "All physiotherapists hold advanced certifications and pursue ongoing education." },
  { icon: Stethoscope, title: "Modern Equipment", desc: "State-of-the-art diagnostic and therapeutic technology for superior outcomes." },
  { icon: Heart, title: "Compassionate Care", desc: "We listen first. Your comfort and confidence guide every session." },
  { icon: Shield, title: "Evidence-Based", desc: "Every technique we use is backed by current clinical research and best practices." },
  { icon: CheckCircle, title: "Proven Results", desc: "Over 500 patients have returned to full, active lives under our care." },
];

const team = [
  {
    name: "Dr. Sarah Chen",
    title: "Lead Physiotherapist",
    specialty: "Sports & Orthopedic Rehab",
    credentials: "DPT, FCAMPT",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Michael Patel",
    title: "Senior Physiotherapist",
    specialty: "Neurological Rehabilitation",
    credentials: "DPT, CGIMS",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Emily Rodriguez",
    title: "Physiotherapist",
    specialty: "Pelvic Health & Women's Health",
    credentials: "DPT, PRPC",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face",
  },
];

const conditions = [
  "Back Pain", "Neck Pain", "ACL Injuries", "Sciatica", "Rotator Cuff Tears",
  "Tennis Elbow", "Plantar Fasciitis", "Hip Impingement", "Knee Osteoarthritis",
  "Frozen Shoulder", "Herniated Disc", "IT Band Syndrome",
];

const testimonials = [
  {
    name: "Jennifer M.",
    role: "Marathon Runner",
    text: "After my ACL surgery, I was terrified I'd never run again. Dr. Chen's program had me back on the trails in 8 months. The care here is exceptional.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "Robert T.",
    role: "Construction Worker",
    text: "Chronic back pain had me on disability for two years. Nova Motion gave me my life back. I'm now pain-free and back to work full-time.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "Lisa K.",
    role: "Office Professional",
    text: "The dry needling treatment for my shoulder was a game-changer. Three sessions and the pain I'd had for two years was completely gone.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
  },
];

const insurers = ["Blue Cross", "Sun Life", "Manulife", "Great-West Life", "Desjardins", "Green Shield"];

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targets = entry.target.querySelectorAll(".fade-up");
            targets.forEach((t, i) => {
              setTimeout(() => t.classList.add("visible"), i * 80);
            });
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Home() {
  const servicesRef = useFadeUp();
  const whyRef = useFadeUp();
  const teamRef = useFadeUp();
  const testimonialsRef = useFadeUp();

  return (
    <PageLayout
      title="Move Without Pain Again"
      description="Nova Motion Physiotherapy offers evidence-based treatment for back pain, sports injuries, and more. Book your appointment today."
    >
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F766E]/90 via-[#0F766E]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/40 via-transparent to-transparent" />

        <div className="container relative z-10 pt-24 pb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#99F6E4] animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Now Accepting New Patients</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              Move Without<br />
              <span className="text-[#99F6E4]">Pain Again</span>
            </h1>
            <p className="text-white/85 text-lg sm:text-xl mb-8 leading-relaxed max-w-xl">
              Expert physiotherapy care tailored to your body. We combine evidence-based treatment with genuine compassion to help you recover, move, and thrive.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#0F766E] hover:bg-[#99F6E4] font-bold px-7 py-3.5 rounded-full text-base transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white/70 text-white hover:bg-white/15 font-semibold px-7 py-3.5 rounded-full text-base transition-all duration-300"
              >
                Our Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#FAFAFA" />
          </svg>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 bg-[#FAFAFA]" ref={servicesRef}>
        <div className="container">
          <div className="text-center mb-14">
            <p className="fade-up text-[#0F766E] font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="fade-up delay-100 text-4xl md:text-5xl font-extrabold text-[#1F2937] tracking-tight">
              Comprehensive Physiotherapy<br className="hidden md:block" /> Services
            </h2>
            <p className="fade-up delay-200 text-gray-500 mt-4 max-w-xl mx-auto text-lg">
              From acute injuries to chronic conditions, our full-spectrum services are designed to meet you where you are.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`fade-up delay-${Math.min((i + 1) * 100, 600)} group bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:border-[#0F766E]/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#0F766E]/10 group-hover:bg-[#0F766E] flex items-center justify-center mb-5 transition-colors duration-300">
                  <s.icon className="w-6 h-6 text-[#0F766E] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-[#1F2937] text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <Link href="/services" className="inline-flex items-center gap-1 text-[#0F766E] text-sm font-semibold hover:gap-2 transition-all">
                  Learn more <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex items-center gap-2 bg-[#0F766E] hover:bg-[#0d9488] text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img src={ABOUT_IMG} alt="Nova Motion Clinic" className="w-full h-full object-cover" />
              </div>
              {/* Floating stat */}
              <div className="absolute -bottom-6 -right-4 md:right-6 bg-[#0F766E] text-white rounded-2xl p-5 shadow-xl">
                <p className="text-3xl font-extrabold">10+</p>
                <p className="text-sm text-[#99F6E4] font-medium">Years of Excellence</p>
              </div>
              <div className="absolute -top-4 -left-4 md:left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[TEAM_IMG].map((src, i) => (
                      <img key={i} src={src} className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="Team" />
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1F2937]">500+ Patients</p>
                    <p className="text-xs text-gray-400">Recovered & Thriving</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-[#0F766E] font-semibold text-sm uppercase tracking-widest mb-3">About Nova Motion</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F2937] tracking-tight mb-6">
                Where Science Meets<br />
                <span className="text-[#0F766E]">Compassionate Care</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5 text-base">
                Founded in 2015, Nova Motion Physiotherapy was built on a simple belief: every person deserves to move freely and live without pain. Our clinic brings together a team of highly trained physiotherapists who are passionate about helping you reach your full potential.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-base">
                We combine the latest evidence-based techniques with a deeply personalized approach. Whether you're recovering from surgery, managing a chronic condition, or optimizing athletic performance, we design a program that fits your unique body and goals.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { num: "500+", label: "Patients Helped" },
                  { num: "98%", label: "Satisfaction Rate" },
                  { num: "10+", label: "Years Experience" },
                  { num: "3", label: "Expert Therapists" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-[#0F766E]/5 rounded-xl p-4">
                    <p className="text-2xl font-extrabold text-[#0F766E]">{stat.num}</p>
                    <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
              <Link href="/team" className="inline-flex items-center gap-2 bg-[#0F766E] hover:bg-[#0d9488] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                Meet Our Team <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 bg-[#0F766E] relative overflow-hidden" ref={whyRef}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#99F6E4] blur-3xl" />
        </div>
        <div className="container relative z-10">
          <div className="text-center mb-14">
            <p className="fade-up text-[#99F6E4] font-semibold text-sm uppercase tracking-widest mb-3">Why Nova Motion</p>
            <h2 className="fade-up delay-100 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              The Nova Motion Difference
            </h2>
            <p className="fade-up delay-200 text-white/70 mt-4 max-w-xl mx-auto text-lg">
              We go beyond treatment — we build a partnership with you for lasting health.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <div
                key={item.title}
                className={`fade-up delay-${Math.min((i + 1) * 100, 600)} bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300`}
              >
                <div className="w-12 h-12 rounded-full bg-[#99F6E4] flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-[#0F766E] font-extrabold text-xl">{i + 1}</span>
                </div>
                <h3 className="font-bold text-white text-base mb-2">{item.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-16">
            <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="#FAFAFA" />
          </svg>
        </div>
      </section>

      {/* ── TEAM PREVIEW ── */}
      <section className="py-20 bg-[#FAFAFA]" ref={teamRef}>
        <div className="container">
          <div className="text-center mb-14">
            <p className="fade-up text-[#0F766E] font-semibold text-sm uppercase tracking-widest mb-3">Our Specialists</p>
            <h2 className="fade-up delay-100 text-4xl md:text-5xl font-extrabold text-[#1F2937] tracking-tight">
              Meet Your Care Team
            </h2>
            <p className="fade-up delay-200 text-gray-500 mt-4 max-w-xl mx-auto text-lg">
              Experienced, credentialed, and genuinely passionate about your recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div
                key={member.name}
                className={`fade-up delay-${(i + 1) * 100} group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F766E]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="inline-block bg-[#0F766E]/10 text-[#0F766E] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {member.credentials}
                  </div>
                  <h3 className="font-bold text-[#1F2937] text-xl mb-1">{member.name}</h3>
                  <p className="text-[#0F766E] font-medium text-sm mb-1">{member.title}</p>
                  <p className="text-gray-400 text-sm">{member.specialty}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/team" className="inline-flex items-center gap-2 border-2 border-[#0F766E] text-[#0F766E] hover:bg-[#0F766E] hover:text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300">
              View Full Profiles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONDITIONS ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-[#0F766E] font-semibold text-sm uppercase tracking-widest mb-3">Conditions We Treat</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F2937] tracking-tight mb-6">
                We Treat a Wide Range<br />
                <span className="text-[#0F766E]">of Conditions</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-base">
                From everyday aches to complex post-surgical recovery, our team has the expertise to address your specific condition with targeted, effective treatment.
              </p>
              <div className="flex flex-wrap gap-2.5 mb-8">
                {conditions.map((c) => (
                  <Link
                    key={c}
                    href="/conditions"
                    className="bg-[#0F766E]/8 hover:bg-[#0F766E] text-[#0F766E] hover:text-white text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 border border-[#0F766E]/20"
                  >
                    {c}
                  </Link>
                ))}
              </div>
              <Link href="/conditions" className="inline-flex items-center gap-2 text-[#0F766E] font-semibold hover:gap-3 transition-all">
                View all conditions <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img src={REHAB_IMG} alt="Rehabilitation Exercise" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F766E]/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-[#FAFAFA]" ref={testimonialsRef}>
        <div className="container">
          <div className="text-center mb-14">
            <p className="fade-up text-[#0F766E] font-semibold text-sm uppercase tracking-widest mb-3">Patient Stories</p>
            <h2 className="fade-up delay-100 text-4xl md:text-5xl font-extrabold text-[#1F2937] tracking-tight">
              Real Results, Real People
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`fade-up delay-${(i + 1) * 100} bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-[#1F2937] text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSURANCE ── */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container">
          <div className="text-center mb-10">
            <p className="text-[#0F766E] font-semibold text-sm uppercase tracking-widest mb-2">Insurance & Direct Billing</p>
            <h2 className="text-2xl font-bold text-[#1F2937]">We Direct Bill Most Major Insurers</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {insurers.map((ins) => (
              <div
                key={ins}
                className="bg-gray-50 border border-gray-200 rounded-xl px-6 py-3 text-gray-600 font-semibold text-sm hover:border-[#0F766E]/30 hover:bg-[#0F766E]/5 transition-all duration-200"
              >
                {ins}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-6">
            Don't see your provider? <Link href="/contact" className="text-[#0F766E] font-medium hover:underline">Contact us</Link> — we work with most extended health plans.
          </p>
        </div>
      </section>

      {/* ── BOOKING CTA ── */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${CTA_BG})` }}
        />
        <div className="absolute inset-0 bg-[#0F766E]/80" />
        <div className="container relative z-10 text-center">
          <p className="text-[#99F6E4] font-semibold text-sm uppercase tracking-widest mb-4">Take the First Step</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5">
            Ready to Move Without Pain?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Book your initial assessment today and let's build a personalized plan to get you back to doing what you love.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#0F766E] hover:bg-[#99F6E4] font-bold px-8 py-4 rounded-full text-base transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </Link>
            <a
              href="tel:+16045550123"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white/70 text-white hover:bg-white/15 font-semibold px-8 py-4 rounded-full text-base transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              (604) 555-0123
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
