import { Wallet, Calendar, Receipt, Bell, Smartphone, MessageCircle, Check } from "lucide-react";

const MASCOT_EMPLOYEE = "https://customer-assets.emergentagent.com/job_employee-pricing-hub/artifacts/i9bpcr2i_Mascot_1.png";

const features = [
  {
    icon: Wallet,
    title: "Pay Slips",
    desc: "Access salary details anytime",
    bg: "bg-emerald-500",
    hoverBg: "hover:bg-emerald-500",
  },
  {
    icon: Calendar,
    title: "Leave Balance",
    desc: "Apply & track leaves easily",
    bg: "bg-blue-500",
    hoverBg: "hover:bg-blue-500",
  },
  {
    icon: Receipt,
    title: "Expense Manage",
    desc: "Track & submit expenses easily",
    bg: "bg-violet-500",
    hoverBg: "hover:bg-violet-500",
  },
  {
    icon: Bell,
    title: "Announcements",
    desc: "Stay updated with news",
    bg: "bg-orange-500",
    hoverBg: "hover:bg-orange-500",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    desc: "Access from anywhere",
    bg: "bg-pink-500",
    hoverBg: "hover:bg-pink-500",
  },
  {
    icon: MessageCircle,
    title: "Chat",
    desc: "Instant team communication",
    bg: "bg-indigo-500",
    hoverBg: "hover:bg-indigo-500",
  },
];

const benefits = [
  "Reduce HR queries by 85%",
  "24/7 employee access",
  "100% paperless operations",
  "Boost employee satisfaction",
];

export default function EmployeePortalSection() {
  return (
    <section
      id="employee-portal"
      data-testid="employee-portal-section"
      className="py-20 md:py-32 bg-slate-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block bg-orange-500/20 text-orange-400 rounded-full px-4 py-1.5 text-sm font-semibold mb-6 border border-orange-500/30">
              Employee Portal
            </span>
            <h2
              data-testid="employee-portal-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight"
            >
              Empower Every
              <span className="block text-orange-500">Employee</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Our self-service portal gives everyone in your team the tools they need — 
              reducing HR workload and increasing satisfaction across your organization.
            </p>

            {/* Benefits List */}
            <div className="flex items-start gap-6">
              <ul className="space-y-4 flex-1">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-orange-500" />
                    </div>
                    <span className="text-slate-300 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              {/* Mascot */}
              <div className="hidden md:block">
                <img
                  src={MASCOT_EMPLOYEE}
                  alt="Employee Portal Mascot"
                  data-testid="mascot-employee-portal"
                  className="w-40 h-auto drop-shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Right - Feature Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                data-testid={`portal-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                className={`group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 ${feature.hoverBg} hover:border-transparent transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-white mb-1 text-sm">
                  {feature.title}
                </h4>
                <p className="text-slate-300 text-xs leading-relaxed group-hover:text-white/80">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
