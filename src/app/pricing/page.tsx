"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PricingPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!session) {
      router.push("/auth/signin");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/stripe/checkout", { method: "POST" });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Failed to create checkout session");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <div className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">VibeForms Pricing</h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Build beautiful forms. Start free, go Pro when you need more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-2">Free</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "Up to 5 forms",
                "100 submissions/month",
                "Basic form builder",
                "Email notifications",
                "Basic analytics",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <span className="text-green-500">✓</span> {feature}
                </li>
              ))}
            </ul>
            <button
              className="w-full py-3 px-6 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              onClick={() => router.push("/auth/signin")}
            >
              Get Started
            </button>
          </div>

          {/* Pro Tier */}
          <div className="bg-gradient-to-b from-violet-50 to-white dark:from-violet-950 dark:to-gray-900 border border-violet-300 dark:border-violet-500/50 rounded-2xl p-8 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              MOST POPULAR
            </div>
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">$19</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "Unlimited forms",
                "Unlimited submissions",
                "File uploads (up to 10MB)",
                "Conditional logic",
                "Email notifications",
                "Webhooks",
                "Embeddable widgets",
                "Priority support",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <span className="text-violet-500">✓</span> {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={handleSubscribe}
              disabled={loading}
              className="w-full py-3 px-6 rounded-lg bg-violet-600 hover:bg-violet-700 text-white font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Redirecting..." : "Subscribe to Pro"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
