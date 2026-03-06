import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Move, Dumbbell, Activity, Zap, Brain, Waves, CheckCircle, ArrowRight, Calendar } from "lucide-react";

const services = [
  {
    id: "manual-therapy",
    icon: Move,
    title: "Manual Therapy",
    tagline: "Hands-on healing for lasting relief",
    description:
      "Manual therapy is a specialized form of physiotherapy delivered exclusively by trained hands. Our therapists use precise joint mobilizations, manipulations, and soft tissue techniques to restore normal movement, reduce pain, and improve function. This approach addresses the root cause of dysfunction rather than just masking symptoms.",
    benefits: [
      "Immediate reduction in joint stiffness and pain",
      "Improved range of motion and flexibility",
      "Faster recovery from acute and chronic injuries",
      "Reduced reliance on pain medications",
      "Enhanced neuromuscular control",
    ],
    whoHelps: "Ideal for patients with neck and back pain, joint stiffness, headaches, post-surgical restrictions, and musculoskeletal injuries.",
    recoveryGoal: "Most patients experience significant improvement within 4–8 sessions, with full functional restoration in 8–12 weeks depending on severity.",
    color: "from-teal-50 to-emerald-50",
  },
  {
    id: "sports-rehab",
    icon: Dumbbell,
    title: "Sports Rehabilitation",
    tagline: "Return to sport stronger than before",
    description:
      "Our sports rehabilitation program is built for athletes of all levels — from weekend warriors to competitive professionals. We combine biomechanical analysis, sport-specific training, and injury prevention strategies to not only heal your current injury but make you more resilient against future ones.",
    benefits: [
      "Sport-specific functional movement retraining",
      "Strength and power restoration",
      "Return-to-sport testing and clearance protocols",
      "Injury prevention programming",
      "Performance optimization beyond baseline",
    ],
    whoHelps: "Athletes recovering from ACL tears, rotator cuff injuries, ankle sprains, stress fractures, and overuse syndromes.",
    recoveryGoal: "Return-to-sport timelines vary by injury. ACL recovery typically takes 9–12 months; most soft tissue injuries resolve in 6–12 weeks.",
    color: "from-blue-50 to-teal-50",
  },
  {
    id: "post-surgical",
    icon: Activity,
    title: "Post-Surgical Recovery",
    tagline: "Structured rehabilitation for surgical success",
    description:
      "Surgery is only half the journey — proper rehabilitation determines your final outcome. Our post-surgical programs follow evidence-based protocols developed in collaboration with leading orthopedic surgeons. We guide you through every phase of healing, from early protection to full functional restoration.",
    benefits: [
      "Phase-based rehabilitation aligned with surgical protocols",
      "Scar tissue management and mobility restoration",
      "Strength rebuilding with progressive loading",
      "Swelling and pain management strategies",
      "Clear milestones and progress tracking",
    ],
    whoHelps: "Patients recovering from knee replacements, hip replacements, ACL reconstruction, rotator cuff repair, spinal surgery, and more.",
    recoveryGoal: "Post-surgical timelines are individualized. Joint replacements typically require 3–6 months of structured rehab for full recovery.",
    color: "from-emerald-50 to-teal-50",
  },
  {
    id: "dry-needling",
    icon: Zap,
    title: "Dry Needling",
    tagline: "Precision relief for stubborn muscle pain",
    description:
      "Dry needling is a highly effective technique for treating myofascial pain and trigger points. Using ultra-fine needles inserted directly into tight muscle bands, our therapists stimulate a local twitch response that releases muscle tension, improves blood flow, and resets abnormal nerve signaling — often providing relief where other treatments have failed.",
    benefits: [
      "Rapid release of stubborn trigger points",
      "Reduced muscle tension and spasm",
      "Improved local circulation and tissue healing",
      "Decreased referred pain patterns",
      "Enhanced response to subsequent exercise therapy",
    ],
    whoHelps: "Patients with chronic muscle pain, tension headaches, fibromyalgia, plantar fasciitis, and athletes with overuse injuries.",
    recoveryGoal: "Many patients notice significant improvement after just 1–3 sessions. Optimal results are achieved when combined with exercise therapy over 4–6 weeks.",
    color: "from-sky-50 to-teal-50",
  },
  {
    id: "exercise-therapy",
    icon: Brain,
    title: "Exercise Therapy",
    tagline: "Movement as medicine",
    description:
      "Exercise therapy is the cornerstone of lasting recovery. Our therapists design individualized therapeutic exercise programs that address your specific impairments, movement patterns, and functional goals. Every exercise has a purpose — building strength, improving stability, restoring coordination, or enhancing endurance.",
    benefits: [
      "Targeted strengthening of weakened muscle groups",
      "Improved neuromuscular coordination and balance",
      "Progressive loading for tissue adaptation",
      "Home exercise programs for between-session progress",
      "Long-term injury prevention strategies",
    ],
    whoHelps: "Suitable for virtually all patients — from those managing chronic pain to athletes seeking performance gains.",
    recoveryGoal: "Exercise therapy is ongoing and evolves with your progress. Most patients achieve their primary goals within 8–16 weeks.",
    color: "from-teal-50 to-cyan-50",
  },
  {
    id: "shockwave",
    icon: Waves,
    title: "Shockwave Therapy",
    tagline: "Advanced technology for chronic conditions",
    description:
      "Extracorporeal Shockwave Therapy (ESWT) delivers high-energy acoustic waves to injured tissues, stimulating the body's natural healing mechanisms. It breaks down calcifications, promotes new blood vessel formation, and triggers cellular repair processes — making it particularly effective for chronic conditions that haven't responded to conventional treatment.",
    benefits: [
      "Stimulates collagen production and tissue repair",
      "Breaks down calcific deposits",
      "Promotes neovascularization for better healing",
      "Non-invasive alternative to surgery",
      "Effective for chronic conditions resistant to other treatments",
    ],
    whoHelps: "Patients with plantar fasciitis, Achilles tendinopathy, calcific shoulder tendinitis, patellar tendinopathy, and tennis/golfer's elbow.",
    recoveryGoal: "A typical course involves 3–6 sessions spaced one week apart. Most patients experience 70–80% pain reduction within 12 weeks.",
    color: "from-teal-50 to-green-50",
  },
];

export default function Services() {
  return (
    <PageLayout
      title="Our Services"
      description="Comprehensive physiotherapy services including manual therapy, sports rehabilitation, dry needling, and more. Evidence-based treatment for lasting results."
    >
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0F766E] to-[#0d9488] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#99F6E4] blur-3xl" />
        </div>
        <div className="container relative z-10 text-center">
          <p className="text-[#99F6E4] font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-5">
            Our Services
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto mb-8">
            Six specialized treatment streams, each designed to address specific conditions with precision and care.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#0F766E] hover:bg-[#99F6E4] font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
          >
            <Calendar className="w-5 h-5" />
            Book Your Assessment
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
            <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="#FAFAFA" />
          </svg>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-10 bg-[#FAFAFA]">
        <div className="container">
          <div className="space-y-8">
            {services.map((service, i) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-5 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  {/* Icon Panel */}
                  <div className={`lg:col-span-1 bg-gradient-to-br ${service.color} flex flex-col items-center justify-center p-10 gap-4`}>
                    <div className="w-16 h-16 rounded-2xl bg-[#0F766E] flex items-center justify-center shadow-lg">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-[#1F2937] text-lg">{service.title}</p>
                      <p className="text-[#0F766E] text-xs font-medium mt-1 italic">{service.tagline}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-4 p-8 md:p-10">
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Benefits */}
                      <div className="md:col-span-1">
                        <h4 className="font-bold text-[#1F2937] text-sm uppercase tracking-wide mb-3">Key Benefits</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((b) => (
                            <li key={b} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-[#0F766E] mt-0.5 shrink-0" />
                              <span className="text-gray-600 text-sm">{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Who It Helps + Recovery */}
                      <div className="md:col-span-2 space-y-4">
                        <div className="bg-[#0F766E]/5 rounded-xl p-4">
                          <h4 className="font-bold text-[#1F2937] text-sm uppercase tracking-wide mb-2">Who It Helps</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{service.whoHelps}</p>
                        </div>
                        <div className="bg-[#99F6E4]/20 rounded-xl p-4">
                          <h4 className="font-bold text-[#1F2937] text-sm uppercase tracking-wide mb-2">Recovery Goals</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{service.recoveryGoal}</p>
                        </div>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 bg-[#0F766E] hover:bg-[#0d9488] text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                          Book This Service <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0F766E]">
        <div className="container text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">Not Sure Which Service Is Right for You?</h2>
          <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto">
            Book a free 15-minute phone consultation and our team will guide you to the most appropriate treatment.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#0F766E] hover:bg-[#99F6E4] font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
          >
            <Calendar className="w-5 h-5" />
            Book Free Consultation
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
