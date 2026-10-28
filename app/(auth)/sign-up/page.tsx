"use client";

import { signIn, signUp } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import { error } from "console";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignUpPage = () => {
  const handleSignUp = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = Object.fromEntries(formData.entries());

    const { data: resData, error } = await signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
    });

  };

  const handleGoogleSignIn = async () => {
    const data = await signIn.social({
      provider: "google",
    });
  };

  const handleGithubSignIn = async()=>{
    const data = await signIn.social({
        provider: 'github'
    })
  }

  return (
    <div className="min-h-screen bg-green-50 px-4 py-10 text-center">
      <h1 className="text-2xl font-bold">অ্যাকাউন্ট তৈরি করুন</h1>
      <p className="mt-1 text-sm text-gray-600">
        বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
      </p>

      <div className="mx-auto mt-6 max-w-md rounded-2xl border bg-white p-6 text-left">
        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label className="text-sm font-medium">নাম</label>
            <input
              name="name"
              type="text"
              required
              minLength={3}
              placeholder="যেমন: রহিম উদ্দিন"
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-medium">ইমেইল</label>
            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-medium">পাসওয়ার্ড</label>
            <input
              name="password"
              type="password"
              required
              minLength={8}
              placeholder="কমপক্ষে ৮ অক্ষর"
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              পাসওয়ার্ড নিশ্চিত করুন
            </label>
            <input
              name="confirmPassword"
              type="password"
              required
              minLength={8}
              placeholder="আবার লিখুন"
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#05893E] py-2.5 font-semibold text-white"
          >
            অ্যাকাউন্ট তৈরি করুন
          </button>
        </form>

        <p className="my-4 text-center text-xs text-gray-500">অথবা</p>

        <div className="grid gap-3 sm:grid-cols-2">
          <button
            // onClick={() =>
            //   authClient.signIn.social({ provider: "google", callbackURL: "/" })
            // }
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center gap-2 rounded-lg border py-2 text-sm"
          >
            <FcGoogle /> Google দিয়ে চালিয়ে যান
          </button>

          <button
            // onClick={() =>
            //   authClient.signIn.social({ provider: "github", callbackURL: "/" })
            // }
            onClick={handleGithubSignIn}
            className="flex items-center justify-center gap-2 rounded-lg border py-2 text-sm"
          >
            <FaGithub /> GitHub দিয়ে চালিয়ে যান
          </button>
        </div>

        <p className="mt-4 text-center text-sm">
          অ্যাকাউন্ট আছে?{" "}
          <Link href="/sign-in" className="text-[#05893E]">
            সাইন ইন করুন
          </Link>
        </p>
      </div>

      <Link href="/" className="mt-6 inline-block text-sm text-gray-500">
        ← হোম পেজে ফিরে যান
      </Link>
    </div>
  );
};

export default SignUpPage;
