
import HeroSection from "./Components/Hero/HeroSection";
import PriceIncrease from "./Components/Products/PriceIncrease";
import PriceDecrease from "./Components/Products/PriceDecrease";
import AllProducts from "./Components/Products/AllProducts";
import { cacheLife } from "next/cache";

export default async function Home() {

  "use cache";
  cacheLife("hours");

  const productRes = await fetch('https://openapi.programming-hero.com/api/bazardor/products')
  const productData = await productRes.json()
  // console.log(productData);
  return (
    <div className=" max-w-7xl mx-auto ">
      <HeroSection />
      {/* <p>আজকের বাজারের দাম এক নজরে</p> */}
      <PriceIncrease products = {productData}/>

      <PriceDecrease products = {productData}/>

      <AllProducts products = {productData} />
    </div>
  );
}