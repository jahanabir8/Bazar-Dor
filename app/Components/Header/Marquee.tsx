import React from "react";
import { cacheLife } from "next/cache";
import { ProductType } from "../../../app/Type";
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


// import React from "react";
// import { cacheLife } from "next/cache";
// import MarqueeText from "react-marquee-text";
// import { Product } from "../../../app/";

// const API_URL = "https://openapi.programming-hero.com/api/bazardor/products";

// // 1. Get the data
// const getProducts = async (): Promise<Product[]> => {
//   "use cache";
//   cacheLife("hours");

//   const res = await fetch(API_URL);
//   if (!res.ok) return [];

//   const data = await res.json();
//   return data.data ?? data;
// };

// // 2. One item in the marquee
// const MarqueeItem = ({ product }: { product: Product }) => {
//   const { image, nameBn, today, unit, change } = product;

//   return (
//     <div className="flex shrink-0 items-center gap-1.5 whitespace-nowrap border-r border-gray-200 px-3 py-2 text-xs sm:gap-2 sm:px-6 sm:text-sm">
//       <span className="text-base sm:text-lg">{image}</span>
//       <span className="font-medium">{nameBn}</span>
//       <span className="text-gray-700">
//         {today} টাকা/{unit}
//       </span>

//       {change.dir === "up" && (
//         <span className="text-red-600">▲ {change.pct}%</span>
//       )}
//       {change.dir === "down" && (
//         <span className="text-green-600">▼ {Math.abs(change.pct)}%</span>
//       )}
//     </div>
//   );
// };

// // 3. The marquee
// const Marquee = async () => {
//   const products = await getProducts();

//   if (products.length === 0) return null;

//   return (
//     <div className="w-full overflow-hidden border-y border-gray-200 bg-white">
//       <MarqueeText direction="right" duration={25} pauseOnHover={true}>
//         {products.map((product) => (
//           <MarqueeItem key={product.id} product={product} />
//         ))}
//       </MarqueeText>
//     </div>
//   );
// };

// export default Marquee;