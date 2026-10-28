import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-green-50 px-4 text-center">
      <p className="text-6xl font-bold text-[#05893E]">৪০৪</p>
      <h1 className="mt-4 text-2xl font-bold">কোনো পণ্য পাওয়া যায়নি</h1>
      <p className="mt-2 max-w-sm text-sm text-gray-600">
        এই ক্যাটাগরিতে কোনো পণ্য নেই, অথবা লিংকটি সঠিক নয়।
      </p>

      <Link
        href="/"
        className="mt-6 rounded-lg bg-[#05893E] px-5 py-2.5 font-semibold text-white"
      >
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
};

export default NotFound;
