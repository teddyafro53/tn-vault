import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { Check, Shield, ArrowLeft } from "lucide-react";

export default function Pricing() {
  const [, navigate] = useLocation();

  const plans = [
    {
      name: "Free",
      price: "0",
      period: "",
      description: "Try TN Vault with basic features",
      features: [
        "5 image uploads",
        "50 MB storage",
        "Access from any device",
        "Basic encryption",
      ],
      cta: "Get Started",
      highlight: false,
      onClick: () => navigate("/signup"),
    },
    {
      name: "Monthly",
      price: "3.99",
      period: "/month",
      description: "Full access for individuals",
      features: [
        "Unlimited uploads",
        "5 GB storage",
        "Access from any device",
        "Priority support",
        "Military-grade encryption",
      ],
      cta: "Start Monthly",
      highlight: true,
      onClick: () => navigate("/signup?plan=monthly"),
    },
    {
      name: "Yearly",
      price: "29.99",
      period: "/year",
      description: "Best value - save 37%",
      features: [
        "Unlimited uploads",
        "10 GB storage",
        "Access from any device",
        "Priority support",
        "Military-grade encryption",
        "Early access to new features",
      ],
      cta: "Start Yearly",
      highlight: false,
      onClick: () => navigate("/signup?plan=yearly"),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950">
      {/* Navigation */}
      <nav className="border-b border-slate-700/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              TN Vault
            </span>
          </button>
        </div>
      </nav>

      {/* Pricing Header */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Simple, Transparent{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Pricing
          </span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Choose the plan that works for you. Upgrade or downgrade anytime.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <Card
              key={idx}
              className={`relative p-8 rounded-lg border ${
                plan.highlight
                  ? "bg-gradient-to-br from-blue-900/40 to-purple-900/40 border-blue-500/50 shadow-lg shadow-blue-500/10"
                  : "bg-slate-900/50 border-slate-700/50"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-white">CHF {plan.price}</span>
                  <span className="text-slate-400">{plan.period}</span>
                </div>
                <p className="text-slate-400 text-sm mt-2">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-3 text-slate-300">
                    <Check className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={plan.onClick}
                className={`w-full py-3 ${
                  plan.highlight
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-600"
                }`}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-slate-700/50 rounded-lg p-8 text-center">
          <Shield className="h-12 w-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Your data is safe with us</h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            All files are encrypted and stored securely. Only you can access your data. Cancel anytime, no questions asked.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-slate-500">
          <p>&copy; 2026 TN Vault. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
