import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Home, Calendar } from "lucide-react";

export default function NotFound() {
  return (
    <PageLayout title="Page Not Found">
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] pt-20">
        <div className="text-center px-4">
          <div className="text-[120px] md:text-[180px] font-extrabold text-[#0F766E]/10 leading-none select-none mb-4">
            404
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1F2937] mb-4 -mt-8">Page Not Found</h1>
          <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#0F766E] hover:bg-[#0d9488] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-[#0F766E] text-[#0F766E] hover:bg-[#0F766E] hover:text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
