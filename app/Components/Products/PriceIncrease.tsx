import ProductType from "@/app/Type/ProductType";
import React from "react";
import ProductCard from "./ProductCard";

interface PriceIncreaseProps {
  products: ProductType[];
}

const PriceIncrease = async ({ products }: PriceIncreaseProps) => {
  // console.log(products);
  const filteredProducts = products
    .filter((p) => p.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);
  return (
    <div className="price-increased p-3 mb-10">
        <h2 className="text-[20px] font-bold mb-3"> <span className="text-red-500">▲</span> আজ দাম বেড়েছে</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default PriceIncrease;
