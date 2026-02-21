import {
  ShoppingCart,
  Users,
  Calculator,
  Package,
  FileText,
  ClipboardList,
  Truck,
  Clock,
  BarChart3,
  Receipt,
  Wallet,
  Building2,
} from "lucide-react";

const MASCOT_FINANCE = "https://customer-assets.emergentagent.com/job_9d6135f3-23bd-42ee-9e58-4a9a429b1833/artifacts/5cure82k_Mascot_3.png";
const MASCOT_OPS = "https://customer-assets.emergentagent.com/job_9d6135f3-23bd-42ee-9e58-4a9a429b1833/artifacts/fag4z2hz_Mascot_8.png";

const features = [
  {
    category: "Operations",
    color: "bg-blue-500",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600",
    items: [
      { icon: ShoppingCart, title: "Sales Management", desc: "Track leads, deals, and conversions" },
      { icon: ClipboardList, title: "Service & Tasks", desc: "Assign, track, and complete tasks" },
      { icon: Package, title: "Inventory", desc: "Real-time stock management" },
      { icon: Truck, title: "Supplier Management", desc: "Vendor relationships simplified" },
    ],
  },
  {
    category: "Finance",
    color: "bg-emerald-500",
    lightColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    items: [
      { icon: Calculator, title: "Full Accounting", desc: "Ledgers, journals, balance sheets" },
      { icon: FileText, title: "Invoicing & Quotes", desc: "Professional invoices in seconds" },
      { icon: Receipt, title: "Income & Expense", desc: "Every rupee tracked automatically" },
      { icon: Wallet, title: "Payment Tracking", desc: "Never miss a payment" },
    ],
  },
  {
    category: "HR",
    color: "bg-violet-500",
    lightColor: "bg-violet-50",
    textColor: "text-violet-600",
    items: [
      { icon: Users, title: "HR Management", desc: "Complete employee lifecycle" },
      { icon: Clock, title: "Attendance", desc: "Time tracking made simple" },
      { icon: Building2, title: "Departments", desc: "Organize your workforce" },
    ],
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      data-testid="features-section"
      className="py-20 md:py-32 bg-white relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
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
            powerful dashboard. No more switching between apps.
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-12">
          {features.map((group, groupIdx) => (
            <div key={group.category} className="relative">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-3 h-3 rounded-full ${group.color}`} />
                <h3
                  data-testid={`feature-category-${group.category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-xl font-bold text-slate-800"
                >
                  {group.category}
                </h3>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {group.items.map((feature, idx) => (
                  <div
                    key={feature.title}
                    data-testid={`feature-card-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="group bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl p-6 md:p-8 relative overflow-hidden"
                  >
                    {/* Icon */}
                    <div
                      className={`feature-icon ${group.lightColor} ${group.textColor} mb-4`}
                    >
                      <feature.icon className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-slate-600 text-sm">{feature.desc}</p>

                    {/* Hover accent */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 ${group.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                    />
                  </div>
                ))}

                {/* Mascot for Finance category */}
                {group.category === "Finance" && (
                  <div className="hidden lg:flex items-end justify-center">
                    <img
                      src={MASCOT_FINANCE}
                      alt="Finance Mascot"
                      data-testid="mascot-finance"
                      className="w-40 h-auto drop-shadow-lg float-element"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Operations Mascot */}
        <div className="absolute top-32 -right-16 w-48 hidden xl:block">
          <img
            src={MASCOT_OPS}
            alt="Operations Mascot"
            data-testid="mascot-operations"
            className="w-full h-auto opacity-80 float-element-delayed"
          />
        </div>
      </div>
    </section>
  );
}
