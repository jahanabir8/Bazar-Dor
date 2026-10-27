import React from "react";
import { cacheLife } from "next/cache";
import { ProductType } from "../../Type/NavType";
import MarqueeText from "react-marquee-text";

const unitBn: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};

const bn = (n: number) => n.toLocaleString("bn-BD");

const Marquee = async () => {
  "use cache";
  cacheLife("hours");

  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  if (!res.ok) return null;

  const products: ProductType[] = await res.json(); // use (await res.json()).data if wrapped

  return (
    <div className="overflow-hidden border-y border-gray-200 bg-white">
      <MarqueeText direction="right" duration={25} pauseOnHover={true}>
        <div className="marquee-track flex w-max">
          {[...products, ...products].map((p, i) => (
            <div
              key={`${p.id}-${i}`}
              className="flex items-center gap-2 px-6 py-2 text-sm whitespace-nowrap border-r border-gray-200"
            >
              <span>{p.image}</span>
              <span className="font-medium">{p.nameBn}</span>
              <span>
                {bn(p.today)} টাকা/{unitBn[p.unit] ?? p.unit}
              </span>
              {p.change.dir !== "flat" && (
                <span
                  className={
                    p.change.dir === "up" ? "text-red-600" : "text-green-600"
                  }
                >
                  {p.change.dir === "up" ? "▲" : "▼"}{" "}
                  {bn(Math.abs(p.change.pct))}%
                </span>
              )}
            </div>
          ))}
        </div>
      </MarqueeText>
    </div>
  );
};

export default Marquee;


