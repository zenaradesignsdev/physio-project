import { useState } from "react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Clock, Tag, ArrowRight, Calendar, BookOpen } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "5 Evidence-Based Strategies to Manage Chronic Back Pain Without Surgery",
    excerpt:
      "Chronic back pain affects millions of people worldwide, yet surgery is rarely the first or best answer. In this comprehensive guide, we explore five physiotherapy-backed strategies that have helped our patients achieve lasting relief.",
    category: "Back Pain",
    readTime: "8 min read",
    date: "February 28, 2026",
    author: "Dr. Sarah Chen",
    authorImg: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    tags: ["Back Pain", "Exercise", "Pain Management"],
    featured: true,
  },
  {
    id: 2,
    title: "ACL Recovery: What to Expect at Each Phase of Your Rehabilitation",
    excerpt:
      "An ACL injury is one of the most feared diagnoses in sport. But with the right rehabilitation program, the vast majority of athletes return to full activity. Here's a detailed breakdown of what each phase of recovery looks like.",
    category: "Sports Rehab",
    readTime: "12 min read",
    date: "February 15, 2026",
    author: "Dr. Sarah Chen",
    authorImg: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
    tags: ["ACL", "Sports", "Knee"],
    featured: false,
  },
  {
    id: 3,
    title: "Dry Needling vs. Acupuncture: Understanding the Key Differences",
    excerpt:
      "Patients often confuse dry needling with acupuncture. While both use thin needles, the philosophy, training, and clinical application are quite different. Dr. Patel explains the science behind dry needling and who benefits most.",
    category: "Treatment",
    readTime: "6 min read",
    date: "January 30, 2026",
    author: "Dr. Michael Patel",
    authorImg: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&crop=face",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    tags: ["Dry Needling", "Pain Relief", "Treatment"],
    featured: false,
  },
  {
    id: 4,
    title: "Pelvic Floor Health: Why Every Woman Should Know About Physiotherapy",
    excerpt:
      "Pelvic floor dysfunction affects 1 in 3 women, yet most never seek treatment because they don't know help is available. Dr. Rodriguez discusses the conditions pelvic health physiotherapy treats and what to expect from your first appointment.",
    category: "Women's Health",
    readTime: "10 min read",
    date: "January 12, 2026",
    author: "Dr. Emily Rodriguez",
    authorImg: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=80&h=80&fit=crop&crop=face",
    img: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&h=400&fit=crop",
    tags: ["Pelvic Health", "Women's Health", "Prevention"],
    featured: false,
  },
  {
    id: 5,
    title: "The Science of Shockwave Therapy: How Acoustic Waves Heal Tendons",
    excerpt:
      "Shockwave therapy has transformed the treatment of chronic tendinopathies. We break down the cellular mechanisms behind this technology and review the clinical evidence for conditions like plantar fasciitis and Achilles tendinopathy.",
    category: "Treatment",
    readTime: "7 min read",
    date: "December 20, 2025",
    author: "Dr. Michael Patel",
    authorImg: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&crop=face",
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    tags: ["Shockwave", "Tendons", "Technology"],
    featured: false,
  },
  {
    id: 6,
    title: "Ergonomics at Work: 7 Simple Changes to Prevent Neck and Back Pain",
    excerpt:
      "With remote work becoming the norm, musculoskeletal complaints from poor workstation setup have surged. Our team shares seven practical ergonomic adjustments that can dramatically reduce your risk of developing chronic pain.",
    category: "Prevention",
    readTime: "5 min read",
    date: "December 5, 2025",
    author: "Dr. Sarah Chen",
    authorImg: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face",
    img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=400&fit=crop",
    tags: ["Ergonomics", "Prevention", "Neck Pain"],
    featured: false,
  },
];

const allCategories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  const featured = posts.find((p) => p.featured);
  const regular = filtered.filter((p) => !p.featured || activeCategory !== "All");

  return (
    <PageLayout
      title="Blog & Resources"
      description="Physiotherapy insights, recovery guides, and health tips from the Nova Motion team. Evidence-based articles to support your health journey."
    >
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0F766E] to-[#0d9488] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-white blur-3xl" />
        </div>
        <div className="container relative z-10 text-center">
          <p className="text-[#99F6E4] font-semibold text-sm uppercase tracking-widest mb-3">Knowledge Hub</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-5">
            Blog & Resources
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            Evidence-based articles, recovery guides, and health insights from our clinical team.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
            <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="#FAFAFA" />
          </svg>
        </div>
      </section>

      <section className="py-16 bg-[#FAFAFA]">
        <div className="container">
          {/* Featured Post */}
          {activeCategory === "All" && featured && (
            <div className="mb-12 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative overflow-hidden h-64 lg:h-auto">
                  <img
                    src={featured.img}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#0F766E] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      Featured Article
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-[#0F766E]/10 text-[#0F766E] text-xs font-semibold px-3 py-1 rounded-full">{featured.category}</span>
                    <span className="text-gray-400 text-xs flex items-center gap-1"><Clock className="w-3 h-3" />{featured.readTime}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1F2937] tracking-tight mb-4 leading-tight">{featured.title}</h2>
                  <p className="text-gray-500 leading-relaxed mb-6 text-sm">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src={featured.authorImg} alt={featured.author} className="w-8 h-8 rounded-full object-cover" />
                      <div>
                        <p className="text-xs font-semibold text-[#1F2937]">{featured.author}</p>
                        <p className="text-xs text-gray-400">{featured.date}</p>
                      </div>
                    </div>
                    <button className="inline-flex items-center gap-1.5 text-[#0F766E] font-semibold text-sm hover:gap-2.5 transition-all">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#0F766E] text-white shadow-md"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-[#0F766E] hover:text-[#0F766E]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regular.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/95 backdrop-blur-sm text-[#0F766E] text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-bold text-[#1F2937] text-base leading-snug mb-3 group-hover:text-[#0F766E] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="flex items-center gap-1 bg-gray-100 text-gray-500 text-xs px-2.5 py-1 rounded-full">
                        <Tag className="w-2.5 h-2.5" />{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <img src={post.authorImg} alt={post.author} className="w-7 h-7 rounded-full object-cover" />
                      <span className="text-xs font-medium text-gray-600">{post.author}</span>
                    </div>
                    <button className="inline-flex items-center gap-1 text-[#0F766E] font-semibold text-xs hover:gap-2 transition-all">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 bg-gradient-to-br from-[#0F766E] to-[#0d9488] rounded-3xl p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white blur-3xl" />
            </div>
            <div className="relative z-10">
              <BookOpen className="w-10 h-10 text-[#99F6E4] mx-auto mb-4" />
              <h3 className="text-2xl font-extrabold text-white mb-3">Get Health Tips in Your Inbox</h3>
              <p className="text-white/75 mb-6 max-w-md mx-auto text-sm">
                Subscribe to our monthly newsletter for evidence-based health tips, exercise guides, and clinic updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-full text-sm bg-white/15 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-white/60 backdrop-blur-sm"
                />
                <button className="bg-white text-[#0F766E] hover:bg-[#99F6E4] font-bold px-6 py-3 rounded-full text-sm transition-all duration-300 shrink-0">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
