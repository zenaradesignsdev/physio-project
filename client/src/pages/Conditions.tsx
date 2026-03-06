import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { AlertCircle, CheckCircle, ArrowRight, Calendar } from "lucide-react";

const conditions = [
  {
    id: "back-pain",
    name: "Back Pain",
    category: "Spine",
    description:
      "Back pain is one of the most common reasons people seek physiotherapy. It can range from a dull, constant ache to a sudden, sharp sensation that makes movement difficult. The causes are varied — muscle strain, disc herniation, degenerative disc disease, facet joint dysfunction, or postural imbalances.",
    symptoms: ["Localized aching or stiffness", "Sharp pain with movement", "Pain radiating into the buttocks or legs", "Muscle spasms", "Difficulty standing upright"],
    whenToSeek: "Seek treatment if your back pain has lasted more than 2 weeks, is worsening, or is accompanied by leg pain, numbness, or weakness.",
    treatment: "Manual therapy, targeted exercise therapy, postural correction, and dry needling are highly effective for most back pain presentations.",
  },
  {
    id: "neck-pain",
    name: "Neck Pain",
    category: "Spine",
    description:
      "Neck pain affects a significant portion of the population and is increasingly linked to prolonged screen use and sedentary work habits. It can originate from muscles, joints, discs, or nerves in the cervical spine. Left untreated, neck pain often progresses to headaches, shoulder dysfunction, and arm symptoms.",
    symptoms: ["Stiffness and reduced range of motion", "Headaches originating at the base of the skull", "Pain radiating into the shoulder or arm", "Tingling or numbness in the hands", "Muscle tenderness"],
    whenToSeek: "Seek treatment if neck pain persists beyond one week, is associated with headaches, or if you experience arm tingling or weakness.",
    treatment: "Manual therapy, dry needling, postural retraining, and cervical stabilization exercises provide excellent outcomes for most neck conditions.",
  },
  {
    id: "acl-injuries",
    name: "ACL Injuries",
    category: "Knee",
    description:
      "Anterior Cruciate Ligament (ACL) injuries are among the most significant sports injuries, often requiring surgical reconstruction followed by extensive rehabilitation. The ACL is critical for knee stability, particularly during pivoting, cutting, and jumping movements. Proper rehabilitation is essential for safe return to sport.",
    symptoms: ["Loud 'pop' at time of injury", "Immediate swelling", "Knee instability or 'giving way'", "Loss of full range of motion", "Pain and tenderness along the joint line"],
    whenToSeek: "Seek immediate assessment after any knee injury involving a pop, significant swelling, or instability. Early intervention improves outcomes significantly.",
    treatment: "Whether surgical or conservative, ACL rehabilitation involves progressive strengthening, neuromuscular training, and sport-specific retraining over 9–12 months.",
  },
  {
    id: "sciatica",
    name: "Sciatica",
    category: "Spine & Nerve",
    description:
      "Sciatica refers to pain that radiates along the sciatic nerve — from the lower back through the hip and down the leg. It typically occurs when the sciatic nerve is compressed by a herniated disc, bone spur, or narrowing of the spine. The pain can be debilitating, but most cases resolve with appropriate physiotherapy.",
    symptoms: ["Sharp, burning pain from lower back to leg", "Numbness or tingling in the leg or foot", "Muscle weakness in the affected leg", "Pain worsening with prolonged sitting", "Difficulty with certain movements"],
    whenToSeek: "Seek treatment promptly if you experience leg pain, numbness, or weakness. Seek emergency care if you lose bladder or bowel control.",
    treatment: "Neural mobilization, manual therapy, targeted core strengthening, and postural correction effectively address most sciatic presentations.",
  },
  {
    id: "rotator-cuff",
    name: "Rotator Cuff Tears",
    category: "Shoulder",
    description:
      "The rotator cuff is a group of four muscles that stabilize the shoulder joint. Tears can be acute (from a fall or sudden force) or degenerative (from repetitive overhead activity or aging). Both partial and full-thickness tears can cause significant pain and functional limitation.",
    symptoms: ["Deep ache in the shoulder", "Pain with overhead activities", "Weakness when lifting or rotating the arm", "Night pain, especially lying on the affected side", "Clicking or catching sensation"],
    whenToSeek: "Seek assessment if shoulder pain has persisted for more than 2 weeks, is limiting daily activities, or occurred following a traumatic event.",
    treatment: "Physiotherapy can successfully treat many rotator cuff tears without surgery. Treatment includes manual therapy, rotator cuff strengthening, and scapular stabilization.",
  },
  {
    id: "tennis-elbow",
    name: "Tennis Elbow",
    category: "Elbow",
    description:
      "Lateral epicondylitis (tennis elbow) is a painful condition caused by overuse of the forearm muscles and tendons that attach to the lateral epicondyle of the elbow. Despite its name, it affects many people who have never played tennis — it's common in office workers, tradespeople, and anyone performing repetitive gripping or wrist extension activities.",
    symptoms: ["Pain and tenderness on the outer elbow", "Weak grip strength", "Pain with gripping, twisting, or lifting", "Stiffness in the morning", "Pain radiating into the forearm"],
    whenToSeek: "Seek treatment if elbow pain has persisted for more than 4 weeks or is interfering with work or daily activities.",
    treatment: "Shockwave therapy, dry needling, eccentric strengthening, and activity modification are highly effective for tennis elbow.",
  },
  {
    id: "plantar-fasciitis",
    name: "Plantar Fasciitis",
    category: "Foot & Ankle",
    description:
      "Plantar fasciitis is the most common cause of heel pain, affecting the thick band of tissue (plantar fascia) that runs along the bottom of the foot. It typically causes stabbing pain with the first steps in the morning or after prolonged rest. It's common in runners, people who stand for long periods, and those with flat feet or high arches.",
    symptoms: ["Sharp heel pain with first morning steps", "Pain that decreases after walking but returns after rest", "Tenderness along the bottom of the foot", "Stiffness in the foot", "Pain after prolonged standing"],
    whenToSeek: "Seek treatment if heel pain has persisted for more than 4 weeks, as early intervention prevents chronic changes in the fascia.",
    treatment: "Shockwave therapy, manual therapy, calf and plantar fascia stretching, and foot strengthening exercises provide excellent results.",
  },
  {
    id: "hip-impingement",
    name: "Hip Impingement",
    category: "Hip",
    description:
      "Femoroacetabular impingement (FAI) occurs when the bones of the hip joint are abnormally shaped, causing them to rub against each other during movement. This friction damages the cartilage and labrum, leading to pain and reduced hip mobility. It's common in young active adults and athletes.",
    symptoms: ["Groin pain with hip flexion", "Pain during or after prolonged sitting", "Reduced hip range of motion", "Clicking or locking sensation", "Pain with athletic activities"],
    whenToSeek: "Seek assessment if you have persistent groin or hip pain, especially if it limits your activity or is worsening over time.",
    treatment: "Hip mobility work, targeted strengthening, movement pattern correction, and activity modification can significantly reduce symptoms and delay or prevent surgical intervention.",
  },
];

const _categories = Array.from(new Set(conditions.map((c) => c.category)));

export default function Conditions() {
  return (
    <PageLayout
      title="Conditions We Treat"
      description="Nova Motion Physiotherapy treats back pain, ACL injuries, sciatica, rotator cuff tears, and many more conditions. Learn about your condition and when to seek treatment."
    >
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0F766E] to-[#0d9488] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-white blur-3xl" />
        </div>
        <div className="container relative z-10 text-center">
          <p className="text-[#99F6E4] font-semibold text-sm uppercase tracking-widest mb-3">Educational Resources</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-5">
            Conditions We Treat
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto mb-8">
            Understanding your condition is the first step toward recovery. Learn about common conditions and how physiotherapy can help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#0F766E] hover:bg-[#99F6E4] font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
          >
            <Calendar className="w-5 h-5" />
            Book an Assessment
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
            <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="#FAFAFA" />
          </svg>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="py-8 bg-[#FAFAFA] border-b border-gray-100 sticky top-[64px] z-30">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center">
            {conditions.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="bg-white border border-gray-200 hover:border-[#0F766E] hover:bg-[#0F766E]/5 text-gray-600 hover:text-[#0F766E] text-sm font-medium px-4 py-2 rounded-full transition-all duration-200"
              >
                {c.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-12 bg-[#FAFAFA]">
        <div className="container">
          <div className="space-y-8">
            {conditions.map((condition) => (
              <div
                key={condition.id}
                id={condition.id}
                className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10 scroll-mt-32"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <span className="inline-block bg-[#0F766E]/10 text-[#0F766E] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {condition.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1F2937] tracking-tight">{condition.name}</h2>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#0F766E] hover:bg-[#0d9488] text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 shrink-0"
                  >
                    Book Treatment <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">{condition.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {/* Symptoms */}
                  <div className="bg-gray-50 rounded-2xl p-5">
                    <h4 className="font-bold text-[#1F2937] text-sm uppercase tracking-wide mb-3">Common Symptoms</h4>
                    <ul className="space-y-2">
                      {condition.symptoms.map((s) => (
                        <li key={s} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#0F766E] mt-0.5 shrink-0" />
                          <span className="text-gray-600 text-sm">{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* When to Seek */}
                  <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertCircle className="w-4 h-4 text-amber-600" />
                      <h4 className="font-bold text-[#1F2937] text-sm uppercase tracking-wide">When to Seek Treatment</h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{condition.whenToSeek}</p>
                  </div>

                  {/* Treatment */}
                  <div className="bg-[#0F766E]/5 rounded-2xl p-5 border border-[#0F766E]/10">
                    <h4 className="font-bold text-[#1F2937] text-sm uppercase tracking-wide mb-3">Our Approach</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{condition.treatment}</p>
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
          <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">Don't See Your Condition Listed?</h2>
          <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto">
            We treat a wide range of musculoskeletal and neurological conditions. Contact us to discuss how we can help with your specific situation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#0F766E] hover:bg-[#99F6E4] font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
          >
            <Calendar className="w-5 h-5" />
            Contact Our Team
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
