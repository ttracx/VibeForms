"use client";

import Link from "next/link";

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Welcome to VibeForms Pro! Your subscription is now active.
          You have access to unlimited forms, submissions, and all Pro features.
        </p>
        <Link
          href="/dashboard"
          className="inline-block py-3 px-8 bg-violet-600 hover:bg-violet-700 rounded-lg font-semibold text-white transition"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
