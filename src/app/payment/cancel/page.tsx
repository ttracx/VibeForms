"use client";

import Link from "next/link";

export default function PaymentCancelPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-6xl mb-6">😕</div>
        <h1 className="text-3xl font-bold mb-4">Payment Cancelled</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          No worries! Your payment was cancelled and you haven&apos;t been charged.
          Feel free to try again whenever you&apos;re ready.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/pricing"
            className="py-3 px-8 bg-violet-600 hover:bg-violet-700 rounded-lg font-semibold text-white transition"
          >
            Back to Pricing
          </Link>
          <Link
            href="/dashboard"
            className="py-3 px-8 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-semibold transition"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
