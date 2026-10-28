// import ProductType from '@/app/Type/ProductType';
// import React from 'react';

// const CategoryPage = async({params}) => {
//     const {categoryId} = await params
//     const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`)
//     const  data = await res.json()
//     console.log(data);
//     return (
//         <div>
//             <p>Category Page {data.nameBn}</p>
//             {
//                 data.map((product: ProductType)=>{
//                     return <p key={product.id}>Here{product.nameBn}</p>
//                 })
//             }
//         </div>
//     );
// };

// export default CategoryPage;

import SortSelect from "@/app/Components/SortSelect/SortSelect";
import ProductType from "@/app/Type/ProductType";
import React from "react";

const CategoryPage = async ({ params, searchParams }) => {
  const { categoryId } = await params;
  const { sort = "default" } = await searchParams;
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`,
  );
  const data = await res.json();

  // category info comes from the first product
  const { categoryNameBn, categoryIcon } = data[0];

  const products = [...data];
  if (sort === "price-asc") products.sort((a, b) => a.today - b.today);
  if (sort === "price-desc") products.sort((a, b) => b.today - a.today);
  if (sort === "rise") products.sort((a, b) => b.change.pct - a.change.pct);
  if (sort === "fall") products.sort((a, b) => a.change.pct - b.change.pct);

  return (
    <div className="min-h-screen bg-green-50 px-4 py-6">
      <div className="mx-auto max-w-7xl">
        {/* category header */}
        <div className="flex items-center gap-4 rounded-2xl border bg-white p-5">
          <span className="text-4xl">{categoryIcon}</span>
          <div>
            <h1 className="text-2xl font-bold">{categoryNameBn}</h1>
            <p className="text-sm text-gray-600">
              {data.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও
              পরিবর্তন
            </p>
          </div>
        </div>

        <div className="mt-4 flex justify-end rounded-2xl border bg-white p-4">
          <SortSelect current={sort} />
        </div>

        <p className="mt-4 text-sm text-gray-600">
          মোট {data.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
        </p>

        {/* product cards */}
        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product: ProductType) => {
            return (
              <div key={product.id} className="rounded-2xl border bg-white p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 text-2xl">
                    {product.image}
                  </span>
                  <div>
                    <h2 className="font-semibold">{product.nameBn}</h2>
                    <p className="text-xs text-gray-500">
                      প্রতি {product.unit}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-xs text-gray-500">আজকের দাম</p>
                <div className="flex items-end justify-between">
                  <p className="text-lg font-bold">
                    {product.today.toLocaleString("bn-BD")}{" "}
                    <span className="text-sm font-normal">টাকা</span>
                  </p>

                  {product.change.dir === "up" && (
                    <span className="rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-600">
                      ▲ {product.change.pct.toLocaleString("bn-BD")}%
                    </span>
                  )}
                  {product.change.dir === "down" && (
                    <span className="rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-600">
                      ▼ {Math.abs(product.change.pct).toLocaleString("bn-BD")}%
                    </span>
                  )}
                  {product.change.dir === "flat" && (
                    <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
                      — ০.০%
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
