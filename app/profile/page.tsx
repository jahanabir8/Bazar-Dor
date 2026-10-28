'use client'

import { updateUser, useSession } from "@/lib/auth-client";
// import { updateUser } from "better-auth/api";
// import Link from "next/link";
import { FiLogOut } from "react-icons/fi";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const { data: session } = useSession();

  const handleNameChange = async(e: React.SyntheticEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // const data: Record<string, string> = Object.fromEntries(formData.entries());
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;

    const {data: resData, error} = await updateUser({
      name: data.name
    })

    if(!error){
      return toast.success('Users name changed successfuly!')
    }
  }

  return (
    <div className="min-h-screen bg-green-50 px-4 py-10">
      <div className="mx-auto max-w-2xl">
        {/* heading */}
        <h1 className="text-2xl font-bold">আমার প্রোফাইল</h1>
        <p className="mt-1 text-sm text-gray-600">
          আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
        </p>

        {/* user card */}
        <div className="mt-5 flex items-center justify-between gap-3 rounded-2xl border bg-white p-4 sm:p-5">
          <div className="flex items-center gap-4">
            {/* <img
              src="/avatar.png"
              alt="Rezwan Ahmed"
              className="h-14 w-14 rounded-xl bg-gray-200 object-cover"
            /> */}
            <div>
              <h2 className="font-semibold sm:text-lg">{session?.user.name}</h2>
              <p className="text-sm text-gray-500">{session?.user.email}</p>
            </div>
          </div>

          <button className="flex shrink-0 items-center gap-1.5 rounded-lg border border-red-500 px-3 py-1.5 text-sm text-red-600 hover:bg-red-50">
            <FiLogOut /> সাইন আউট
          </button>
        </div>

        {/* info card */}
        <div className="mt-5 rounded-2xl border bg-white p-4 sm:p-5">
          <h2 className="font-semibold">তথ্য</h2>

          <form className="mt-5 space-y-4" onSubmit={handleNameChange}>
            <div>
              <label className="text-sm font-medium">নাম</label>
              <input
                type="text"
                name="name"
                required
                defaultValue={session?.user.name}
                className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#05893E] py-2.5 font-semibold text-white"
            >
              আপডেট
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
