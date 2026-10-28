import React from "react";
import NavLinks from "./NavLinks";
import { cacheLife } from "next/cache";

const NavBar = async () => {
  // const res = await fetch('https://openapi.programming-hero.com/api/bazardor/categories')
  // const data = await res.json()

  "use cache";
  cacheLife("hours");

  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
  );
  if (!res.ok) return null;
  const data = await res.json();
  return (
    <div className=" max-w-7xl mx-auto p-2 ">
      <NavLinks navlinks={data} />
    </div>
  );
};

export default NavBar;
