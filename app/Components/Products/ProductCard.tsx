import ProductType from "@/app/Type/ProductType";
import Link from "next/link";
import React from "react";

interface PriceIncreaseProps {
  product: ProductType;
}

const ProductCard = ({ product }: PriceIncreaseProps) => {
  return (
    <div className="space-y-4">
      <Link href = {`/product/${product.id}`}
        key={product.id}
        className="rounded-[22px] border border-[#DCE6DD] bg-[#FAFCFA] p-5 shadow-sm transition-shadow hover:shadow-md block"
      >
        {/* Product information */}
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#F0F5F1] text-4xl">
            {product.image}
          </div>

          <div className="min-w-0">
            <h3 className="text-xl font-bold leading-tight text-[#253129]">
              {product.nameBn}
            </h3>

            <p className="mt-1 text-sm text-[#4B554E]">
              প্রতি {product.unit === "kg" ? "কেজি" : product.unit}
            </p>
          </div>
        </div>

        {/* Price and price change */}
        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <p className="text-sm text-[#4B554E]">আজকের দাম</p>

            <p className="mt-1 text-2xl font-bold leading-tight text-[#253129]">
              {product.today} টাকা
            </p>
          </div>

          <div
            className={`mb-0.5 flex shrink-0 items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold ${
              product.change.dir === "up"
                ? "bg-[#F0F5F1] text-[#DC3939]"
                : product.change.dir === "down"
                  ? "bg-[#F0F5F1] text-[#16834A]"
                  : "bg-[#F0F5F1] text-[#66736A]"
            }`}
          >
            <span aria-hidden="true">
              {product.change.dir === "up"
                ? "▲"
                : product.change.dir === "down"
                  ? "▼"
                  : "●"}
            </span>

            <span>
              {product.change.pct.toLocaleString("bn-BD", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
              %
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
