import Link from "next/link";
import React from "react";
import DateBadge from "./Date";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="mx-auto mt-4 max-w-7xl px-3 sm:px-4 mb-10">
      <div className="flex flex-col items-start gap-6 rounded-2xl border border-gray-200 bg-green-50/40 p-5 sm:p-8 md:flex-row md:items-center md:justify-between md:px-10">
        {/* left: text */}
        <div className="max-w-xl">
          <DateBadge />

          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <Link
            href="#products"
            className="mt-6 inline-block rounded-lg bg-[#05893E] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-green-800 sm:text-base"
          >
            সব পণ্য দেখুন
          </Link>
        </div>

        {/* right: banner */}
        <div className="">
          <Image width={400} height={400} alt="banner" src="/bazar-hero.png" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
