import { Wallet, Calendar, FileText, Bell, Smartphone, UserCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Wallet,
    title: "Pay Slips",
    desc: "Employees access their salary details anytime, anywhere",
    color: "from-emerald-500 to-teal-500",
    shadowColor: "shadow-emerald-500/20",
  },
  {
    icon: Calendar,
    title: "Leave Balance",
    desc: "Apply for leaves and track balances with one click",
    color: "from-blue-500 to-cyan-500",
    shadowColor: "shadow-blue-500/20",
  },
  {
    icon: FileText,
    title: "Tax Documents",
    desc: "Download Form 16 and investment proofs instantly",
    color: "from-violet-500 to-purple-500",
    shadowColor: "shadow-violet-500/20",
  },
  {
    icon: Bell,
    title: "Announcements",
    desc: "Stay updated with company news and updates",
    color: "from-orange-500 to-amber-500",
    shadowColor: "shadow-orange-500/20",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    desc: "Access everything from anywhere on any device",
    color: "from-pink-500 to-rose-500",
    shadowColor: "shadow-pink-500/20",
  },
  {
    icon: UserCheck,
    title: "Self Service",
    desc: "Update personal info without waiting for HR",
    color: "from-indigo-500 to-blue-500",
    shadowColor: "shadow-indigo-500/20",
  },
];

const stats = [
  { value: "85%", label: "Less HR Queries" },
  { value: "24/7", label: "Access" },
  { value: "100%", label: "Paperless" },
];

export default function EmployeePortalSection() {
  const scrollToDemo = () => {
    document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="employee-portal"
      data-testid="employee-portal-section"
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-orange-100/50 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-gradient-to-br from-violet-100/50 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-orange-100 text-orange-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            Employee Portal
          </span>
          <h2
            data-testid="employee-portal-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Empower Every Employee in Your Organization
          </h2>
          <p className="text-lg text-slate-600">
            atmytyp isn't just for managers. Our employee self-service portal
            gives everyone the tools they need — reducing HR workload and increasing satisfaction.
          </p>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent font-mono">
                {stat.value}
              </div>
              <div className="text-slate-600 font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              data-testid={`portal-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
              className={`group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-lg ${feature.shadowColor} hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden`}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Decorative circle */}
              <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-10 rounded-full group-hover:opacity-20 transition-opacity duration-500`} />

              {/* Content */}
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg ${feature.shadowColor} group-hover:bg-white/20 group-hover:shadow-none transition-all duration-500`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-white transition-colors duration-500">
                  {feature.title}
                </h4>
                <p className="text-slate-600 group-hover:text-white/80 transition-colors duration-500">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={scrollToDemo}
            data-testid="employee-portal-cta"
            className="bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-orange-500/25 rounded-full px-8 py-6 font-bold text-lg transition-all duration-300"
          >
            See Employee Portal in Action
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
