"use client";

import { signIn } from "@/lib/auth-client";
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
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignInPage = () => {
  const handleSignIn = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = Object.fromEntries(formData.entries());

    const { data: resData, error } = await signIn.email({
      email: data.email,
      password: data.password,
      callbackURL: "/",
    });
  };
  const handleGoogleSignIn = async () => {
    const data = await signIn.social({
      provider: "google",
    });
  };

  const handleGithubSignIn = async () => {
    const data = await signIn.social({
      provider: "github",
    });
  };

  return (
    // <div>
    //   <Form className="w-full max-w-96" onSubmit={handleSignIn}>
    //     <Fieldset>
    //       <Fieldset.Legend>Profile Settings</Fieldset.Legend>
    //       <Description>Update your profile information.</Description>
    //       <FieldGroup>
    //         <TextField isRequired name="email" type="email">
    //           <Label>Email</Label>
    //           <Input placeholder="john@example.com" />
    //           <FieldError />
    //         </TextField>

    //         <TextField
    //           isRequired
    //           minLength={8}
    //           name="password"
    //           type="password"
    //           validate={(value) => {
    //             if (value.length < 8) {
    //               return "Password must be at least 8 characters";
    //             }
    //             if (!/[A-Z]/.test(value)) {
    //               return "Password must contain at least one uppercase letter";
    //             }
    //             if (!/[0-9]/.test(value)) {
    //               return "Password must contain at least one number";
    //             }
    //             return null;
    //           }}
    //         >
    //           <Label>Password</Label>
    //           <Input placeholder="Enter your password" />
    //           <Description>
    //             Must be at least 8 characters with 1 uppercase and 1 number
    //           </Description>
    //           <FieldError />
    //         </TextField>
    //       </FieldGroup>
    //       <Fieldset.Actions>
    //         <Button type="submit">
    //           {/* <FloppyDisk /> */}
    //           Save changes
    //         </Button>
    //         <Button type="reset" variant="secondary">
    //           Cancel
    //         </Button>
    //       </Fieldset.Actions>
    //     </Fieldset>
    //   </Form>
    // </div>

    <div className="min-h-screen bg-green-50 px-4 py-10 text-center">
      <h1 className="text-2xl font-bold">সাইন ইন</h1>
      <p className="mt-1 text-sm text-gray-600">
        বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
      </p>

      <div className="mx-auto mt-6 max-w-md rounded-2xl border bg-white p-6 text-left">
        <form onSubmit={handleSignIn} className="space-y-4">
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

          <button
            type="submit"
            className="w-full rounded-lg bg-[#05893E] py-2.5 font-semibold text-white"
          >
            সাইন ইন
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
          অ্যাকাউন্ট নেই?{" "}
          <Link href="/sign-up" className="text-[#05893E]">
            সাইন আপ করুন
          </Link>
        </p>
      </div>

      <Link href="/" className="mt-6 inline-block text-sm text-gray-500">
        ← হোম পেজে ফিরে যান
      </Link>
    </div>
  );
};

export default SignInPage;
