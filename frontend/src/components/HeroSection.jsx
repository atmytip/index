import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

const DASHBOARD_IMG = "https://customer-assets.emergentagent.com/job_employee-pricing-hub/artifacts/1m4wyn99_Gemini_Generated_Image_voaxiwvoaxiwvoax.png";
const MASCOT_HERO = "https://customer-assets.emergentagent.com/job_9d6135f3-23bd-42ee-9e58-4a9a429b1833/artifacts/eiqbom3k_Mascot_5.png";

const highlights = [
  "7 Days Free Trial",
  "No Credit Card Required",
  "Cancel Anytime",
];

export default function HeroSection() {
  const scrollToDemo = () => {
    document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen pt-20 md:pt-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FFF7ED 0%, #FFFFFF 100%)",
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div
              data-testid="hero-badge"
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-orange-200 rounded-full px-4 py-2 text-sm font-medium text-orange-700 shadow-sm"
            >
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              Trusted by 500+ businesses
            </div>

            {/* Headline */}
            <h1
              data-testid="hero-headline"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight"
            >
              The Operating System for{" "}
              <span className="gradient-text">Your Entire Business</span>
            </h1>

            {/* Subheadline */}
            <p
              data-testid="hero-subheadline"
              className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed"
            >
              One powerful ERP to manage your Sales, HR, Accounting, Inventory &
              more. Save 20+ hours weekly with automated workflows and real-time
              insights.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-slate-700"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToDemo}
                data-testid="hero-book-demo-btn"
                className="bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-orange-500/25 rounded-full px-8 py-6 font-bold text-lg transition-all duration-300 btn-ripple"
              >
                Book a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                data-testid="hero-watch-video-btn"
                className="bg-white text-slate-700 border-2 border-slate-200 hover:border-orange-200 hover:bg-orange-50 rounded-full px-8 py-6 font-bold text-lg transition-all duration-300"
              >
                <Play className="mr-2 w-5 h-5 fill-current" />
                Watch Video
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative lg:pl-8">
            {/* Mascot on the left */}
            <div className="absolute -left-16 md:-left-24 bottom-1/4 w-28 md:w-36 float-element z-10">
              <img
                src={MASCOT_HERO}
                alt="atmytyp Mascot"
                data-testid="hero-mascot"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>

            {/* Laptop and Mobile Dashboard */}
            <div
              data-testid="hero-dashboard-preview"
              className="relative animate-scale-in"
            >
              <img
                src={DASHBOARD_IMG}
                alt="atmytyp Dashboard on Laptop and Mobile"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-slate-400 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
