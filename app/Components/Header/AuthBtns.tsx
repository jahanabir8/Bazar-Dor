import Link from "next/link";
import React from "react";

const AuthBtns = () => {
  return (
    <div className="flex gap-4 items-center">
      <Link href="/sign-in" className="px-5 py-2">সাইন ইন </Link>
      <Link href="/sign-up" className="px-5 py-2 bg-[#05893E] text-white rounded">সাইন আপ </Link>
    </div>
  );
};

export default AuthBtns;
