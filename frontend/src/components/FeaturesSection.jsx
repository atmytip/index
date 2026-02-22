import {
  ShoppingCart,
  Users,
  Calculator,
  Package,
  FileText,
  ClipboardList,
  Truck,
  Clock,
  Receipt,
  Wallet,
  Building2,
} from "lucide-react";

const MASCOT_FINANCE = "https://customer-assets.emergentagent.com/job_9d6135f3-23bd-42ee-9e58-4a9a429b1833/artifacts/5cure82k_Mascot_3.png";
const MASCOT_OPS = "https://customer-assets.emergentagent.com/job_9d6135f3-23bd-42ee-9e58-4a9a429b1833/artifacts/fag4z2hz_Mascot_8.png";

const operationsFeatures = [
  { icon: ShoppingCart, title: "Sales Management", desc: "Track leads, deals, and conversions in real-time", color: "from-blue-500 to-blue-600" },
  { icon: ClipboardList, title: "Service & Tasks", desc: "Assign, track, and complete tasks efficiently", color: "from-blue-400 to-blue-500" },
  { icon: Package, title: "Inventory", desc: "Real-time stock management & alerts", color: "from-cyan-500 to-blue-500" },
  { icon: Truck, title: "Supplier Management", desc: "Vendor relationships simplified", color: "from-blue-600 to-indigo-600" },
];

const financeFeatures = [
  { icon: Calculator, title: "Full Accounting", desc: "Ledgers, journals, balance sheets - all automated", color: "from-emerald-500 to-emerald-600" },
  { icon: FileText, title: "Invoicing & Quotes", desc: "Professional invoices in seconds", color: "from-green-500 to-emerald-500" },
  { icon: Receipt, title: "Income & Expense", desc: "Every rupee tracked automatically", color: "from-teal-500 to-emerald-500" },
  { icon: Wallet, title: "Payment Tracking", desc: "Never miss a payment again", color: "from-emerald-600 to-green-600" },
];

const hrFeatures = [
  { icon: Users, title: "HR Management", desc: "Complete employee lifecycle management", color: "from-violet-500 to-violet-600" },
  { icon: Clock, title: "Attendance", desc: "Time tracking made simple & accurate", color: "from-purple-500 to-violet-500" },
  { icon: Building2, title: "Departments", desc: "Organize your workforce seamlessly", color: "from-violet-600 to-purple-600" },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      data-testid="features-section"
      className="py-20 md:py-32 bg-slate-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="inline-block bg-orange-100 text-orange-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            All-in-One Platform
          </span>
          <h2
            data-testid="features-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Everything You Need to Run Your Business
          </h2>
          <p className="text-lg text-slate-600">
            From sales to HR, accounting to inventory — manage it all from one
            powerful dashboard. No more switching between apps. It's okay to feel powerful.
          </p>
        </div>

        {/* Operations Mascot */}
        <div className="absolute top-52 right-8 w-52 hidden xl:block">
          <img
            src={MASCOT_OPS}
            alt="Operations Mascot"
            data-testid="mascot-operations"
            className="w-full h-auto opacity-90 float-element-delayed"
          />
        </div>

        {/* Operations Section */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 data-testid="feature-category-operations" className="text-2xl font-bold text-slate-900">
              Operations
            </h3>
            <p className="text-slate-500 text-sm">Streamline everything. Because your time is far too expensive</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {operationsFeatures.map((feature, idx) => (
              <div
                key={feature.title}
                data-testid={`feature-card-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="group relative bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 shadow-lg group-hover:bg-white/20 group-hover:shadow-none transition-all duration-500`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-white transition-colors duration-500">
                    {feature.title}
                  </h4>
                  <p className="text-slate-600 text-sm group-hover:text-white/80 transition-colors duration-500">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Finance Section */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 data-testid="feature-category-finance" className="text-2xl font-bold text-slate-900">
              Finance
            </h3>
            <p className="text-slate-500 text-sm">Complete financial control</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {financeFeatures.map((feature, idx) => (
              <div
                key={feature.title}
                data-testid={`feature-card-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="group relative bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 shadow-lg group-hover:bg-white/20 group-hover:shadow-none transition-all duration-500`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-white transition-colors duration-500">
                    {feature.title}
                  </h4>
                  <p className="text-slate-600 text-sm group-hover:text-white/80 transition-colors duration-500">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HR Section */}
        <div>
          <div className="text-center mb-8">
            <h3 data-testid="feature-category-hr" className="text-2xl font-bold text-slate-900">
              HR
            </h3>
            <p className="text-slate-500 text-sm">Empower your workforce</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {hrFeatures.map((feature, idx) => (
              <div
                key={feature.title}
                data-testid={`feature-card-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="group relative bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 shadow-lg group-hover:bg-white/20 group-hover:shadow-none transition-all duration-500`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-white transition-colors duration-500">
                    {feature.title}
                  </h4>
                  <p className="text-slate-600 text-sm group-hover:text-white/80 transition-colors duration-500">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Mascot for HR category */}
            <div className="hidden lg:flex flex-col items-center justify-center">
              <img
                src={MASCOT_FINANCE}
                alt="HR Mascot"
                data-testid="mascot-hr"
                className="w-52 h-auto drop-shadow-lg float-element"
              />
              <p className="-mt-2 text-lg font-bold text-slate-700">What else?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
