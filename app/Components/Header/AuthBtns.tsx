"use client";

import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { FiLogOut, FiUser } from "react-icons/fi";

const AuthBtns = () => {
  const { data: session } = useSession();

  const [open, setOpen] = useState(false);
  const name = session?.user.name
  return (
    <div className="flex gap-4 items-center">
      {session?.user ? (
        <div className="relative">
          {/* button */}
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 text-sm"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#05893E] font-semibold text-white">
              {name?.[0]}
            </span>
            <span>{name}</span>
            <span className="text-xs text-gray-400">▾</span>
          </button>

          {/* dropdown */}
          {open && (
            <div className="absolute right-0 z-50 mt-3 w-56 rounded-xl border bg-white p-4 shadow-lg">
              <p className="font-semibold">{name}</p>
              <p className="text-xs text-gray-500">{session.user?.email}</p>

              <hr className="my-3" />

              <Link href="/profile" className="flex items-center gap-2 text-sm">
                <FiUser /> আমার প্রোফাইল
              </Link>

              <button onClick={()=>signOut()} className="mt-3 flex items-center gap-2 text-sm text-red-600">
                <FiLogOut /> সাইন আউট
              </button>
            </div>
          )}
        </div>
      ) : (
        <>
          <Link href="/sign-in" className="px-5 py-2">
            সাইন ইন
          </Link>
          <Link
            href="/sign-up"
            className="px-5 py-2 bg-[#05893E] text-white rounded"
          >
            সাইন আপ
          </Link>
        </>
      )}
    </div>
  );
};

export default AuthBtns;
