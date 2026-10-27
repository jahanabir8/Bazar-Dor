import ProductType from "@/app/Type/ProductType";
import React from "react";
import ProductCard from "./ProductCard";

interface ProductsProps {
  products: ProductType[];
}

const AllProducts = ({ products }: ProductsProps) => {
  return (
    <div className="price-increased p-3 mb-10">
      <h2 className="text-[20px] font-bold mb-2"> সব পণ্য</h2>
      <p className="mb-3 text-[#1d271f]">
        মোট {products.length}টি পণ্য দেখানো হচ্ছে
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default AllProducts;
