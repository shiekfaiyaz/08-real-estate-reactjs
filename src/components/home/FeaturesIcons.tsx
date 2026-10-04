import { ShieldCheck, Search, Lock, Headset } from "lucide-react";

export default function FeatureSection() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Trusted Listings",
      subtitle: "100% verified properties",
    },
    {
      icon: Search,
      title: "Easy Search",
      subtitle: "Advanced custom filters",
    },
    {
      icon: Lock,
      title: "Secure Deals",
      subtitle: "Safe and legal process",
    },
    {
      icon: Headset,
      title: "Expert Support",
      subtitle: "24/7 dedicated guidance",
    },
  ];

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm border border-emerald-50/60 hover:shadow-md transition-shadow"
              >
                {/* Icon Container Green */}
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {feature.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}