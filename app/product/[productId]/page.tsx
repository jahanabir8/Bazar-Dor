import { notFound } from "next/navigation";
import React from "react";

const bn = (n: number) => n.toLocaleString("bn-BD");

// 62 -> ৬২, 67.5 -> ৬৭.৫০
const bnPrice = (n: number) =>
  Number.isInteger(n)
    ? bn(n)
    : n.toLocaleString("bn-BD", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

const ProductPage = async ({ params }) => {
  const { productId } = await params;
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${productId}`,
  );

  if (!res.ok) notFound();

  const json = await res.json();
  const product = json.data ?? json;

  if (!product?.markets) notFound();

  const {
    nameBn,
    image,
    unit,
    categoryNameBn,
    today,
    yesterday,
    change,
    markets,
  } = product;

  // add average to each market, then sort cheapest first
  const rows = markets
    .map((m) => ({ ...m, avg: (m.min + m.max) / 2 }))
    .sort((a, b) => a.avg - b.avg);

  const lowest = Math.min(...markets.map((m) => m.min));
  const highest = Math.max(...markets.map((m) => m.max));
  const diff = Math.abs(today - yesterday);

  const changeText: Record<string, string> = {
    up: "বেড়েছে",
    down: "কমেছে",
    flat: "অপরিবর্তিত",
  };

  const changeColor: Record<string, string> = {
    up: "text-red-600",
    down: "text-green-600",
    flat: "text-gray-600",
  };

  const arrows: Record<string, string> = { up: "▲", down: "▼", flat: "—" };

  return (
    <div className="min-h-screen bg-green-50 px-4 py-6">
      <div className="mx-auto max-w-7xl space-y-5">
        {/* top card */}
        <div className="flex flex-col gap-4 rounded-2xl border bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-4xl">
              {image}
            </span>
            <div>
              <h1 className="text-2xl font-bold sm:text-3xl">{nameBn}</h1>
              <p className="text-sm text-gray-500">
                প্রতি {unit} · {categoryNameBn}
              </p>
              <p className="mt-1 text-sm">
                গতকালের তুলনায় আজ দাম{" "}
                <span className="font-bold">{changeText[change.dir]}</span>
                {change.dir !== "flat" && <> · {bn(diff)} টাকা</>}
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-gray-100 px-6 py-3 text-center">
            <p className="text-xs text-gray-500">আজকের দাম</p>
            <p className="text-3xl font-bold">{bn(today)}</p>
            <p className="text-xs text-gray-500">টাকা / {unit}</p>
            <p className={`mt-1 text-xs font-medium ${changeColor[change.dir]}`}>
              {arrows[change.dir]} {bn(Math.abs(change.pct))}%
            </p>
          </div>
        </div>

        {/* summary */}
        <div className="rounded-2xl border bg-white p-5">
          <h2 className="font-bold">দামের সারসংক্ষেপ</h2>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border p-4">
              <p className="text-xs text-gray-500">সর্বনিম্ন দাম</p>
              <p className="mt-1 text-xl font-bold text-green-600">
                {bn(lowest)} <span className="text-sm font-normal">টাকা</span>
              </p>
              <p className="text-xs text-gray-500">সবচেয়ে কম দামের বাজার</p>
            </div>

            <div className="rounded-xl border p-4">
              <p className="text-xs text-gray-500">সর্বাধিক দাম</p>
              <p className="mt-1 text-xl font-bold text-red-600">
                {bn(highest)} <span className="text-sm font-normal">টাকা</span>
              </p>
              <p className="text-xs text-gray-500">সবচেয়ে বেশি দামের বাজার</p>
            </div>

            <div className="rounded-xl border p-4">
              <p className="text-xs text-gray-500">গড় দাম</p>
              <p className="mt-1 text-xl font-bold text-green-600">
                {bn(today)} <span className="text-sm font-normal">টাকা</span>
              </p>
              <p className="text-xs text-gray-500">প্রতি {unit} এর হিসাবে</p>
            </div>
          </div>

          {/* market table */}
          <h2 className="mt-6 font-bold">বাজারভিত্তিক আজকের দাম</h2>

          <div className="mt-3 overflow-x-auto rounded-xl border">
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr className="text-left text-gray-500">
                  <th className="p-3 font-normal">বাজার</th>
                  <th className="p-3 font-normal">বিভাগ</th>
                  <th className="p-3 text-right font-normal">সর্বনিম্ন</th>
                  <th className="p-3 text-right font-normal">সর্বাধিক</th>
                  <th className="p-3 text-right font-normal">গড়</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((m, index: number) => (
                  <tr
                    key={index}
                    className={index % 2 === 1 ? "bg-green-50" : "bg-white"}
                  >
                    <td className="p-3">{m.market}</td>
                    <td className="p-3">{m.division}</td>
                    <td className="p-3 text-right">{bn(m.min)} টাকা</td>
                    <td className="p-3 text-right">{bn(m.max)} টাকা</td>
                    <td className="p-3 text-right font-bold">
                      {bnPrice(m.avg)} টাকা
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
