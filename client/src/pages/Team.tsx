import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Award, GraduationCap, Star, Calendar, CheckCircle } from "lucide-react";

const TEAM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407703240/EpUJ8dvArWkCkVnJwS3RiA/team-treatment_1a7906e3.jpg";

const team = [
  {
    name: "Dr. Sarah Chen",
    title: "Lead Physiotherapist & Clinic Director",
    credentials: "DPT, FCAMPT, BScKin",
    specialty: "Sports & Orthopedic Rehabilitation",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=700&fit=crop&crop=face",
    bio: "Dr. Sarah Chen brings over 12 years of clinical experience to Nova Motion Physiotherapy, where she serves as both Lead Physiotherapist and Clinic Director. She completed her Doctor of Physiotherapy at the University of British Columbia and subsequently earned her Fellowship of the Canadian Academy of Manipulative Physiotherapy (FCAMPT) — one of the most rigorous post-graduate credentials in the field.",
    bio2: "Sarah's practice philosophy centers on the belief that every patient deserves a thorough assessment and a treatment plan built around their unique body, lifestyle, and goals. She has a particular passion for complex orthopedic cases and helping athletes return to sport after significant injuries.",
    education: [
      "Doctor of Physiotherapy (DPT) — University of British Columbia",
      "Bachelor of Science in Kinesiology — Simon Fraser University",
      "Fellowship, Canadian Academy of Manipulative Physiotherapy (FCAMPT)",
    ],
    specialties: ["ACL Rehabilitation", "Shoulder Instability", "Manual Therapy", "Running Biomechanics", "Chronic Pain Management"],
    languages: ["English", "Mandarin"],
    funFact: "Sarah is a recreational triathlete who has completed two Ironman events.",
  },
  {
    name: "Dr. Michael Patel",
    title: "Senior Physiotherapist",
    credentials: "DPT, CGIMS, OCS",
    specialty: "Neurological & Complex Rehabilitation",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=700&fit=crop&crop=face",
    bio: "Dr. Michael Patel is a Senior Physiotherapist at Nova Motion with a specialized focus on neurological rehabilitation and complex musculoskeletal conditions. He earned his Doctor of Physiotherapy from McGill University and has since completed advanced certifications in Gunn Intramuscular Stimulation (CGIMS) and Orthopedic Clinical Specialization (OCS).",
    bio2: "Michael's approach combines meticulous clinical reasoning with a warm, patient-centered communication style. He has extensive experience working with patients recovering from strokes, traumatic brain injuries, spinal cord conditions, and complex post-surgical cases. His dry needling expertise has helped hundreds of patients find relief from chronic pain conditions.",
    education: [
      "Doctor of Physiotherapy (DPT) — McGill University",
      "Certified in Gunn Intramuscular Stimulation (CGIMS)",
      "Orthopedic Clinical Specialist (OCS) — American Board of Physical Therapy Specialties",
    ],
    specialties: ["Neurological Rehabilitation", "Dry Needling / IMS", "Spinal Cord Injuries", "Post-Stroke Recovery", "Chronic Pain"],
    languages: ["English", "Hindi", "Gujarati"],
    funFact: "Michael volunteers as a physiotherapy consultant for a local adaptive sports program.",
  },
  {
    name: "Dr. Emily Rodriguez",
    title: "Physiotherapist",
    credentials: "DPT, PRPC, Pelvic Health Cert.",
    specialty: "Pelvic Health & Women's Health",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&h=700&fit=crop&crop=face",
    bio: "Dr. Emily Rodriguez is a passionate advocate for pelvic health physiotherapy — a field that addresses conditions that profoundly impact quality of life but are often undertreated. She completed her Doctor of Physiotherapy at Dalhousie University and holds a Pelvic Rehabilitation Practitioner Certification (PRPC) from the Herman & Wallace Pelvic Rehabilitation Institute.",
    bio2: "Emily creates a safe, respectful, and empowering environment for her patients. She specializes in treating pelvic floor dysfunction, pre- and post-natal rehabilitation, incontinence, pelvic pain, and endometriosis-related conditions. She also has strong expertise in general orthopedic physiotherapy, particularly hip and lower extremity conditions.",
    education: [
      "Doctor of Physiotherapy (DPT) — Dalhousie University",
      "Pelvic Rehabilitation Practitioner Certification (PRPC) — Herman & Wallace Institute",
      "Pre & Postnatal Fitness Specialist Certification",
    ],
    specialties: ["Pelvic Floor Rehabilitation", "Pre & Postnatal Care", "Incontinence Treatment", "Hip & Knee Rehabilitation", "Women's Health"],
    languages: ["English", "Spanish"],
    funFact: "Emily is a certified yoga instructor and integrates mindfulness principles into her treatment approach.",
  },
];

export default function Team() {
  return (
    <PageLayout
      title="Our Team"
      description="Meet the expert physiotherapists at Nova Motion — Dr. Sarah Chen, Dr. Michael Patel, and Dr. Emily Rodriguez. Credentialed, compassionate, and dedicated to your recovery."
    >
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0F766E] to-[#0d9488] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-white blur-3xl" />
        </div>
        <div className="container relative z-10 text-center">
          <p className="text-[#99F6E4] font-semibold text-sm uppercase tracking-widest mb-3">The People Behind Your Recovery</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-5">
            Our Care Team
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            Highly trained, deeply compassionate, and committed to helping you move without pain.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
            <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="#FAFAFA" />
          </svg>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="container">
          <div className="space-y-12">
            {team.map((member, i) => (
              <div
                key={member.name}
                className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-3 ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                  {/* Photo */}
                  <div className={`relative overflow-hidden ${i % 2 === 1 ? "lg:col-start-3" : ""}`}>
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-72 lg:h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F766E]/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3">
                        <p className="font-bold text-[#1F2937] text-sm">{member.name}</p>
                        <p className="text-[#0F766E] text-xs font-medium">{member.credentials}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`lg:col-span-2 p-8 md:p-10 ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#1F2937] tracking-tight">{member.name}</h2>
                        <p className="text-[#0F766E] font-semibold mt-1">{member.title}</p>
                        <p className="text-gray-400 text-sm mt-0.5">{member.specialty}</p>
                      </div>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-[#0F766E] hover:bg-[#0d9488] text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 shrink-0"
                      >
                        <Calendar className="w-4 h-4" />
                        Book with {member.name.split(" ")[1]}
                      </Link>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-3 text-sm">{member.bio}</p>
                    <p className="text-gray-600 leading-relaxed mb-6 text-sm">{member.bio2}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Education */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <GraduationCap className="w-4 h-4 text-[#0F766E]" />
                          <h4 className="font-bold text-[#1F2937] text-sm uppercase tracking-wide">Education & Credentials</h4>
                        </div>
                        <ul className="space-y-1.5">
                          {member.education.map((e) => (
                            <li key={e} className="flex items-start gap-2">
                              <CheckCircle className="w-3.5 h-3.5 text-[#0F766E] mt-0.5 shrink-0" />
                              <span className="text-gray-600 text-xs leading-relaxed">{e}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Specialties */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Award className="w-4 h-4 text-[#0F766E]" />
                          <h4 className="font-bold text-[#1F2937] text-sm uppercase tracking-wide">Areas of Expertise</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((s) => (
                            <span key={s} className="bg-[#0F766E]/10 text-[#0F766E] text-xs font-medium px-3 py-1 rounded-full">
                              {s}
                            </span>
                          ))}
                        </div>
                        <div className="mt-4">
                          <p className="text-xs text-gray-400 font-medium mb-1">Languages</p>
                          <p className="text-xs text-gray-600">{member.languages.join(" · ")}</p>
                        </div>
                        <div className="mt-3 bg-[#99F6E4]/20 rounded-xl p-3">
                          <div className="flex items-center gap-1.5 mb-1">
                            <Star className="w-3.5 h-3.5 text-[#0F766E]" />
                            <p className="text-xs font-semibold text-[#1F2937]">Fun Fact</p>
                          </div>
                          <p className="text-xs text-gray-600">{member.funFact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team / CTA */}
      <section className="py-20 bg-[#0F766E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#99F6E4] font-semibold text-sm uppercase tracking-widest mb-3">Work With Our Team</p>
              <h2 className="text-4xl font-extrabold text-white tracking-tight mb-5">
                Ready to Start Your Recovery Journey?
              </h2>
              <p className="text-white/75 text-lg mb-8">
                Our team is ready to listen, assess, and build a personalized plan that gets you back to doing what you love.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#0F766E] hover:bg-[#99F6E4] font-bold px-7 py-3.5 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                >
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </Link>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
              <img src={TEAM_IMG} alt="Our Team" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#0F766E]/30" />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
