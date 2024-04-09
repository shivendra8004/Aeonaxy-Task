"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import SignInForm from "@/components/auth/SignUpForm";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
const page = () => {
    return (
        <section className="bg-white h-screen">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-5">
                    <Image
                        alt="Sign In art"
                        src="https://images.unsplash.com/photo-1602212096437-d0af1ce0553e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="absolute inset-0 h-full w-full object-cover opacity-80"
                        width={870}
                        height={1110}
                    />

                    <div className="hidden lg:absolute lg:block md:p-8 xl:p-16 top-0">
                        <Link className={`block text-amber-300 text-3xl satisfyFont`} href="/">
                            Dribbble
                        </Link>

                        <h2 className="mt-6 text-xl font-bold text-white sm:text-3xl md:text-3xl">
                            Discover the world&apos;s top <br /> Designers & Creatives.
                        </h2>
                    </div>
                    <div className="hidden lg:relative lg:block md:p-8 xl:px-16">
                        <p className=" text-white">
                            Developed by{" "}
                            <Link target="_blank" href="https://github.com/shivendra8004" className="underline">
                                Shivendra Jat
                            </Link>
                        </p>
                    </div>
                </section>

                <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-7 h-full">
                    <div className="max-w-xl lg:max-w-2xl ">
                        <div className="relative -mt-16 block lg:hidden">
                            <Link
                                className={`inline-flex size-16 items-center justify-center text-primary font-semibold rounded-full bg-white  sm:size-20 satisfyFont`}
                                href="/"
                            >
                                Dribbble
                            </Link>
                        </div>
                        <div className="h-full">
                            <div className="w-full text-end">
                                <p>
                                    Already a member?
                                    <Button
                                        onClick={() => {
                                            toast({
                                                title: "Warning",
                                                description: "There is No UI Provided for SignIn Page.",
                                                variant: "destructive",
                                            });
                                        }}
                                        variant="link"
                                        className="text-blue-900"
                                    >
                                        Sign In
                                    </Button>
                                </p>
                            </div>
                            <SignInForm />
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
};

export default page;
