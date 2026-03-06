import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Phone, Mail, MapPin, Clock, CheckCircle, Send, Calendar } from "lucide-react";
import { toast } from "sonner";

const services = [
  "Manual Therapy",
  "Sports Rehabilitation",
  "Post-Surgical Recovery",
  "Dry Needling",
  "Exercise Therapy",
  "Shockwave Therapy",
  "Not Sure — Need Assessment",
];

const hours = [
  { day: "Monday", time: "7:00 AM – 7:00 PM" },
  { day: "Tuesday", time: "7:00 AM – 7:00 PM" },
  { day: "Wednesday", time: "7:00 AM – 7:00 PM" },
  { day: "Thursday", time: "7:00 AM – 7:00 PM" },
  { day: "Friday", time: "7:00 AM – 6:00 PM" },
  { day: "Saturday", time: "8:00 AM – 4:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
    insurance: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Valid email is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.service) newErrors.service = "Please select a service";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    toast.success("Appointment request sent! We'll contact you within 24 hours.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <PageLayout
      title="Book Appointment"
      description="Book your physiotherapy appointment at Nova Motion. Contact us by phone, email, or fill out our online booking form. Located in Vancouver, BC."
    >
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0F766E] to-[#0d9488] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-white blur-3xl" />
        </div>
        <div className="container relative z-10 text-center">
          <p className="text-[#99F6E4] font-semibold text-sm uppercase tracking-widest mb-3">Get Started</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-5">
            Book an Appointment
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            Take the first step toward moving without pain. Fill out the form below and our team will confirm your appointment within 24 hours.
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-bold text-[#1F2937] text-lg mb-5">Contact Information</h3>
                <div className="space-y-4">
                  <a href="tel:+16045550123" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-[#0F766E]/10 group-hover:bg-[#0F766E] flex items-center justify-center transition-colors">
                      <Phone className="w-4 h-4 text-[#0F766E] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">Phone</p>
                      <p className="text-[#1F2937] font-semibold text-sm">(604) 555-0123</p>
                    </div>
                  </a>
                  <a href="mailto:hello@novamotion.ca" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-[#0F766E]/10 group-hover:bg-[#0F766E] flex items-center justify-center transition-colors">
                      <Mail className="w-4 h-4 text-[#0F766E] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">Email</p>
                      <p className="text-[#1F2937] font-semibold text-sm">hello@novamotion.ca</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0F766E]/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-[#0F766E]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">Address</p>
                      <p className="text-[#1F2937] font-semibold text-sm">123 Wellness Avenue, Suite 200</p>
                      <p className="text-gray-500 text-xs">Vancouver, BC V6B 1A1</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-5">
                  <Clock className="w-4 h-4 text-[#0F766E]" />
                  <h3 className="font-bold text-[#1F2937] text-lg">Hours of Operation</h3>
                </div>
                <div className="space-y-2.5">
                  {hours.map(({ day, time }) => (
                    <div
                      key={day}
                      className={`flex justify-between items-center py-1.5 px-3 rounded-lg ${
                        day === today ? "bg-[#0F766E]/10 border border-[#0F766E]/20" : ""
                      }`}
                    >
                      <span className={`text-sm font-medium ${day === today ? "text-[#0F766E]" : "text-gray-600"}`}>
                        {day} {day === today && <span className="text-xs">(Today)</span>}
                      </span>
                      <span className={`text-sm ${time === "Closed" ? "text-red-400" : day === today ? "text-[#0F766E] font-semibold" : "text-gray-500"}`}>
                        {time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-[#0F766E]/10 to-[#99F6E4]/20 flex flex-col items-center justify-center gap-3 relative">
                  <div className="w-12 h-12 rounded-full bg-[#0F766E] flex items-center justify-center shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-[#1F2937] text-sm">Nova Motion Physiotherapy</p>
                    <p className="text-gray-400 text-xs">123 Wellness Avenue, Vancouver</p>
                  </div>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-end justify-center pb-4"
                  >
                    <span className="bg-[#0F766E] text-white text-xs font-semibold px-4 py-1.5 rounded-full hover:bg-[#0d9488] transition-colors">
                      Open in Google Maps
                    </span>
                  </a>
                </div>
              </div>

              {/* Direct Billing */}
              <div className="bg-[#0F766E]/5 border border-[#0F766E]/15 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-[#0F766E]" />
                  <p className="font-semibold text-[#1F2937] text-sm">Direct Billing Available</p>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">
                  We direct bill Blue Cross, Sun Life, Manulife, Great-West Life, Desjardins, and Green Shield. Please bring your insurance card to your first appointment.
                </p>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-[#0F766E]/10 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle className="w-10 h-10 text-[#0F766E]" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-[#1F2937] mb-3">Request Received!</h3>
                    <p className="text-gray-500 mb-6 max-w-sm mx-auto">
                      Thank you, {form.firstName}! Our team will review your request and contact you within 24 hours to confirm your appointment.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", email: "", phone: "", service: "", preferredDate: "", preferredTime: "", message: "", insurance: "" }); }}
                      className="bg-[#0F766E] hover:bg-[#0d9488] text-white font-semibold px-7 py-3 rounded-full transition-all duration-300"
                    >
                      Book Another Appointment
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 rounded-xl bg-[#0F766E] flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h2 className="text-xl font-extrabold text-[#1F2937]">Request an Appointment</h2>
                        <p className="text-gray-400 text-sm">We'll confirm within 24 hours</p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                      {/* Name Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">
                            First Name <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={form.firstName}
                            onChange={handleChange}
                            placeholder="Jane"
                            className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#0F766E]/30 ${
                              errors.firstName ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50 focus:border-[#0F766E]"
                            }`}
                          />
                          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">
                            Last Name <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={form.lastName}
                            onChange={handleChange}
                            placeholder="Smith"
                            className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#0F766E]/30 ${
                              errors.lastName ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50 focus:border-[#0F766E]"
                            }`}
                          />
                          {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                        </div>
                      </div>

                      {/* Email & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">
                            Email Address <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="jane@example.com"
                            className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#0F766E]/30 ${
                              errors.email ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50 focus:border-[#0F766E]"
                            }`}
                          />
                          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">
                            Phone Number <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="(604) 555-0000"
                            className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#0F766E]/30 ${
                              errors.phone ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50 focus:border-[#0F766E]"
                            }`}
                          />
                          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                        </div>
                      </div>

                      {/* Service */}
                      <div>
                        <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">
                          Service Requested <span className="text-red-400">*</span>
                        </label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#0F766E]/30 appearance-none ${
                            errors.service ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50 focus:border-[#0F766E]"
                          }`}
                        >
                          <option value="">Select a service...</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                        {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                      </div>

                      {/* Date & Time */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">Preferred Date</label>
                          <input
                            type="date"
                            name="preferredDate"
                            value={form.preferredDate}
                            onChange={handleChange}
                            min={new Date().toISOString().split("T")[0]}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F766E]/30 focus:border-[#0F766E] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">Preferred Time</label>
                          <select
                            name="preferredTime"
                            value={form.preferredTime}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F766E]/30 focus:border-[#0F766E] transition-colors appearance-none"
                          >
                            <option value="">Any time</option>
                            <option value="morning">Morning (7 AM – 12 PM)</option>
                            <option value="afternoon">Afternoon (12 PM – 5 PM)</option>
                            <option value="evening">Evening (5 PM – 7 PM)</option>
                          </select>
                        </div>
                      </div>

                      {/* Insurance */}
                      <div>
                        <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">Insurance Provider (Optional)</label>
                        <input
                          type="text"
                          name="insurance"
                          value={form.insurance}
                          onChange={handleChange}
                          placeholder="e.g., Blue Cross, Sun Life, Manulife..."
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F766E]/30 focus:border-[#0F766E] transition-colors"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">Tell Us About Your Condition (Optional)</label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Briefly describe your symptoms, how long you've had them, and any relevant history..."
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F766E]/30 focus:border-[#0F766E] transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 bg-[#0F766E] hover:bg-[#0d9488] text-white font-bold py-4 rounded-xl text-base transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                      >
                        <Send className="w-5 h-5" />
                        Submit Appointment Request
                      </button>

                      <p className="text-center text-gray-400 text-xs">
                        By submitting this form, you agree to our privacy policy. We'll never share your information with third parties.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
