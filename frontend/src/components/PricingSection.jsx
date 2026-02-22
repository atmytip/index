import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight, Building2 } from "lucide-react";

const plans = [
  {
    name: "Basic",
    description: "Perfect for small teams getting started",
    monthlyPrice: 999,
    yearlyPrice: 5999,
    features: [
      { text: "Up to 25 Employees", included: true },
      { text: "Sales & CRM", included: true },
      { text: "Inventory Management", included: true },
      { text: "Basic Reports", included: true },
      { text: "Email Support", included: true },
      { text: "HR Module", included: false },
      { text: "Advanced Analytics", included: false },
      { text: "API Access", included: false },
    ],
    popular: false,
  },
  {
    name: "Standard",
    description: "Best for growing businesses",
    monthlyPrice: 1499,
    yearlyPrice: 8999,
    features: [
      { text: "Up to 75 Employees", included: true },
      { text: "Everything in Basic", included: true },
      { text: "Full HR Module", included: true },
      { text: "Advanced Analytics", included: true },
      { text: "Priority Support", included: true },
      { text: "Custom Reports", included: true },
      { text: "API Access", included: true },
      { text: "Dedicated Manager", included: false },
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom needs",
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      { text: "100+ Employees", included: true },
      { text: "Everything in Standard", included: true },
      { text: "Unlimited Users", included: true },
      { text: "Custom Integrations", included: true },
      { text: "Dedicated Account Manager", included: true },
      { text: "On-premise Option", included: true },
      { text: "Custom SLA", included: true },
      { text: "Training & Onboarding", included: true },
    ],
    popular: false,
  },
];

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(true);

  const scrollToDemo = () => {
    document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" });
  };

  const formatPrice = (price) => {
    if (!price) return null;
    return new Intl.NumberFormat("en-IN").format(price);
  };

  const calculateSavings = (monthly, yearly) => {
    if (!monthly || !yearly) return 0;
    const yearlyCost = monthly * 12;
    const savings = ((yearlyCost - yearly) / yearlyCost) * 100;
    return Math.round(savings);
  };

  return (
    <section
      id="pricing"
      data-testid="pricing-section"
      className="py-20 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-orange-100 text-orange-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            Simple Pricing
          </span>
          <h2
            data-testid="pricing-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Per Employee Pricing That Scales With You
          </h2>
          <p className="text-lg text-slate-600 mb-16">
            7 days free. No credit card required. Cancel anytime—but fair warning: you might actually start enjoying it 😊
          </p>

          {/* Toggle */}
          <div
            data-testid="pricing-toggle"
            className="inline-flex items-center bg-slate-100 rounded-full p-1"
          >
            <button
              onClick={() => setIsYearly(false)}
              data-testid="toggle-monthly"
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                !isYearly
                  ? "bg-orange-500 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              data-testid="toggle-yearly"
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                isYearly
                  ? "bg-orange-500 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Yearly
              <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                Save 50%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              data-testid={`pricing-card-${plan.name.toLowerCase()}`}
              className={`relative rounded-2xl p-6 lg:p-8 transition-all duration-300 ${
                plan.popular
                  ? "bg-slate-900 text-white shadow-2xl scale-100 md:scale-105 border-2 border-orange-500"
                  : "bg-white border border-slate-200 shadow-lg hover:shadow-xl"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-orange-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    plan.popular ? "text-white" : "text-slate-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm ${
                    plan.popular ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                {plan.monthlyPrice ? (
                  <>
                    <div className="flex items-baseline gap-1">
                      <span
                        className={`text-4xl lg:text-5xl font-extrabold font-mono ${
                          plan.popular ? "text-white" : "text-slate-900"
                        }`}
                      >
                        ₹{formatPrice(isYearly ? plan.yearlyPrice : plan.monthlyPrice)}
                      </span>
                      <span
                        className={`text-sm ${
                          plan.popular ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        /{isYearly ? "year" : "month"}
                      </span>
                    </div>
                    {isYearly && (
                      <p
                        className={`text-sm mt-1 ${
                          plan.popular ? "text-green-400" : "text-green-600"
                        }`}
                      >
                        Save {calculateSavings(plan.monthlyPrice, plan.yearlyPrice)}% with annual billing
                      </p>
                    )}
                  </>
                ) : (
                  <div className="flex items-center gap-2">
                    <Building2
                      className={`w-8 h-8 ${
                        plan.popular ? "text-orange-400" : "text-orange-500"
                      }`}
                    />
                    <span
                      className={`text-2xl font-bold ${
                        plan.popular ? "text-white" : "text-slate-900"
                      }`}
                    >
                      Contact Us
                    </span>
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li
                    key={fIdx}
                    className={`flex items-center gap-3 text-sm ${
                      feature.included
                        ? plan.popular
                          ? "text-slate-200"
                          : "text-slate-700"
                        : plan.popular
                        ? "text-slate-500"
                        : "text-slate-400"
                    }`}
                  >
                    {feature.included ? (
                      <Check
                        className={`w-5 h-5 flex-shrink-0 ${
                          plan.popular ? "text-green-400" : "text-green-500"
                        }`}
                      />
                    ) : (
                      <X className="w-5 h-5 flex-shrink-0 opacity-50" />
                    )}
                    {feature.text}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                onClick={scrollToDemo}
                data-testid={`pricing-cta-${plan.name.toLowerCase()}`}
                className={`w-full rounded-full py-6 font-bold text-lg transition-all duration-300 ${
                  plan.popular
                    ? "bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-orange-500/25"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                {plan.monthlyPrice ? "Start Free Trial" : "Contact Sales"}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-slate-500 text-sm mt-8">
          All prices are per employee. GST not included. 7-day free trial on Basic & Standard plans.
        </p>
      </div>
    </section>
  );
}
