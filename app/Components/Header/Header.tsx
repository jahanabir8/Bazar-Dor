import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavBar from "./NavBar";
import AuthBtns from "./AuthBtns";
import Marquee from "./Marquee";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (

    <header>
      <div className="flex items-center justify-between gap-3 max-w-7xl mx-auto px-3 py-3 sm:px-4 sm:py-3.5">
        {/* logo */}
        <Link href="/" className="logo flex items-center gap-2 min-w-0">
          <div className="p-2 sm:p-3 bg-[#05893E] rounded shrink-0">
            <Image
              width={20}
              height={20}
              src="/logo-icon.png"
              alt="logo"
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
          </div>
          <div className="grid min-w-0">
            <span className="text-lg sm:text-[20px] font-bold truncate">
              বাজার দর
            </span>
            <span className="text-xs sm:text-sm text-gray-600 truncate">
              {date}
            </span>
          </div>
        </Link>

        {/* auth btns */}
        <div className="shrink-0">
          <AuthBtns />
        </div>
      </div>

      {/* nav links */}
      <div className="border-y border-gray-300 overflow-x-auto">
        <NavBar />
      </div>
      <div>
        <Marquee />
      </div>
    </header>
  );
};

export default Header;
