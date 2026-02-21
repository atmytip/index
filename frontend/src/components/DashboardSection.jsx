import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingUp, Clock, Shield } from "lucide-react";

const DASHBOARD_IMG = "https://customer-assets.emergentagent.com/job_9d6135f3-23bd-42ee-9e58-4a9a429b1833/artifacts/qj6750nx_web%20and%20mobile%20app%20ui.png";

const benefits = [
  {
    icon: TrendingUp,
    title: "Real-time Analytics",
    desc: "See your business performance as it happens",
  },
  {
    icon: Clock,
    title: "Save 20+ Hours Weekly",
    desc: "Automate repetitive tasks and reports",
  },
  {
    icon: Zap,
    title: "Instant Decisions",
    desc: "All your data in one executive dashboard",
  },
  {
    icon: Shield,
    title: "Bank-grade Security",
    desc: "Your data is encrypted and protected 24/7",
  },
];

export default function DashboardSection() {
  const scrollToDemo = () => {
    document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      data-testid="dashboard-section"
      className="py-20 md:py-32 bg-slate-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-orange-100 text-orange-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            Executive Dashboard
          </span>
          <h2
            data-testid="dashboard-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Make Smarter Decisions, Faster
          </h2>
          <p className="text-lg text-slate-600">
            Your entire business at a glance. Track sales, monitor inventory,
            manage HR — all from one powerful dashboard designed for executives.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="relative mb-16">
          <div
            data-testid="dashboard-preview"
            className="browser-frame mx-auto max-w-5xl"
          >
            <div className="browser-dots">
              <div className="browser-dot bg-red-400" />
              <div className="browser-dot bg-yellow-400" />
              <div className="browser-dot bg-green-400" />
            </div>
            <img
              src={DASHBOARD_IMG}
              alt="atmytyp Executive Dashboard"
              className="w-full rounded-b-lg"
            />
          </div>

          {/* Floating feature callouts */}
          <div className="absolute top-1/4 -left-4 md:left-8 bg-white rounded-xl shadow-xl p-4 max-w-[200px] hidden lg:block animate-fade-in-up">
            <div className="flex items-center gap-2 text-emerald-600 mb-1">
              <TrendingUp className="w-4 h-4" />
              <span className="font-semibold text-sm">Sales Up</span>
            </div>
            <div className="text-2xl font-bold text-slate-900 font-mono">+23%</div>
            <div className="text-xs text-slate-500">vs last quarter</div>
          </div>

          <div className="absolute bottom-1/4 -right-4 md:right-8 bg-white rounded-xl shadow-xl p-4 max-w-[200px] hidden lg:block animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-2 text-blue-600 mb-1">
              <Clock className="w-4 h-4" />
              <span className="font-semibold text-sm">Time Saved</span>
            </div>
            <div className="text-2xl font-bold text-slate-900 font-mono">25 hrs</div>
            <div className="text-xs text-slate-500">per week on average</div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, idx) => (
            <div
              key={benefit.title}
              data-testid={`benefit-${benefit.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-center p-6"
            >
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">{benefit.title}</h4>
              <p className="text-sm text-slate-600">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={scrollToDemo}
            data-testid="dashboard-cta-btn"
            className="bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-orange-500/25 rounded-full px-8 py-6 font-bold text-lg transition-all duration-300"
          >
            See It In Action
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
