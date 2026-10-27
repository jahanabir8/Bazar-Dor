import ProductType from "@/app/Type/ProductType";
import React from "react";
import ProductCard from "./ProductCard";

interface PriceIncreaseProps {
  products: ProductType[];
}

const PriceDecrease = ({ products }: PriceIncreaseProps) => {
  const filteredProducts = products
    .filter((p) => p.change.dir === "down")
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0, 6);
  return (
    <div className="price-decreased p-3">
      <h2 className="text-[20px] font-bold mb-3">
        {" "}
        <span className="text-green-500">▼</span> আজ দাম কমেছে
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default PriceDecrease;
