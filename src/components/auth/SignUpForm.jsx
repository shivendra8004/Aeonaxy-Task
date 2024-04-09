"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "../ui/button";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
const SignInForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <form action="#" className="mt-8 grid grid-cols-6 gap-6">
            <div className="col-span-6 py-8">
                <h1 className="font-bold text-primary text-3xl">Sign up to Dribble</h1>
            </div>
            <div className="col-span-6 sm:col-span-3">
                <Label htmlFor="name" className="text-md">
                    Name
                </Label>
                <Input id="name" name="name" className="bg-slate-200 border-0 " placeholder="Shivendra" />
            </div>

            <div className="col-span-6 sm:col-span-3">
                <Label htmlFor="username" className="text-md">
                    Username
                </Label>
                <Input id="username" name="username" className="bg-slate-200 border-0 " placeholder="shivendra8004" />
            </div>

            <div className="col-span-6">
                <Label htmlFor="email" className="text-md">
                    Email
                </Label>
                <Input id="email" name="email" className="bg-slate-200 border-0 " placeholder="shivendra8004@gmail.com" />
            </div>

            <div className="col-span-6 ">
                <Label htmlFor="password" className="text-md">
                    Password
                </Label>
                <div className="relative flex items-center">
                    <Input
                        id="password"
                        type={`${showPassword ? "text" : "password"}`}
                        placeholder="6+ characters"
                        name="password"
                        className="bg-slate-200 border-0 "
                    />
                    {showPassword ? (
                        <EyeOff className="absolute right-3 cursor-pointer" size={16} onClick={() => setShowPassword(!showPassword)} />
                    ) : (
                        <Eye className="absolute right-3 cursor-pointer" size={16} onClick={() => setShowPassword(!showPassword)} />
                    )}
                </div>
            </div>

            <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                    <input type="checkbox" id="MarketingAccept" name="marketing_accept" className="size-5 rounded-md border-gray-200 bg-white shadow-sm" />
                    <span className="text-sm text-gray-700">
                        Creating an account means you&apos;re okay with our
                        <Link href="#" className="text-blue-900 font-medium">
                            {" "}
                            Terms of Service, Privacy Policy, our default{" "}
                        </Link>
                        and{" "}
                        <Link href="#" className="text-blue-900 font-medium">
                            Notification settings
                        </Link>
                        .
                    </span>
                </label>
            </div>

            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <Link
                    href="/auth/verify"
                    className="inline-block shrink-0 rounded-md border border-primary bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-primary focus:outline-none focus:ring focus-visible:ring-0 active:text-primary"
                >
                    Create an account
                </Link>
            </div>
            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    This site is protected by reCAPTCHA and the Google <br />
                    <Link href="#" className=" text-blue-900 font-medium">
                        Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className=" text-blue-900 font-medium">
                        Terms of Service
                    </Link>{" "}
                    apply .
                </p>
            </div>
        </form>
    );
};

export default SignInForm;
