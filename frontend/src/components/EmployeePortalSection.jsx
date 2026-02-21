import { Wallet, Calendar, FileText, Bell, Smartphone, UserCheck } from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Pay Slips",
    desc: "Employees access their salary details anytime",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: Calendar,
    title: "Leave Balance",
    desc: "Apply for leaves and track balances easily",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: FileText,
    title: "Tax Documents",
    desc: "Download Form 16 and investment proofs",
    color: "bg-violet-100 text-violet-600",
  },
  {
    icon: Bell,
    title: "Announcements",
    desc: "Stay updated with company news",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    desc: "Access everything from anywhere",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: UserCheck,
    title: "Self Service",
    desc: "Update personal info without HR",
    color: "bg-cyan-100 text-cyan-600",
  },
];

export default function EmployeePortalSection() {
  return (
    <section
      id="employee-portal"
      data-testid="employee-portal-section"
      className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block bg-orange-100 text-orange-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              Employee Portal
            </span>
            <h2
              data-testid="employee-portal-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6"
            >
              Empower Every Employee in Your Organization
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              atmytyp isn't just for managers. Our employee self-service portal
              gives everyone in your team the tools they need — reducing HR
              workload and increasing satisfaction.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                <div className="text-3xl font-extrabold text-orange-500 font-mono">85%</div>
                <div className="text-sm text-slate-600">Less HR Queries</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                <div className="text-3xl font-extrabold text-orange-500 font-mono">24/7</div>
                <div className="text-sm text-slate-600">Access</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                <div className="text-3xl font-extrabold text-orange-500 font-mono">100%</div>
                <div className="text-sm text-slate-600">Paperless</div>
              </div>
            </div>
          </div>

          {/* Right - Feature Cards */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                data-testid={`portal-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-2xl p-5 group"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div
                  className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                <p className="text-sm text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
