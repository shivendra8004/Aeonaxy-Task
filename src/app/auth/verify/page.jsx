"use client";
import Footer from "@/components/helpers/Footer";
import Navbar from "@/components/helpers/Navbar";
import React, { useEffect, useState } from "react";
import { MailCheck } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { redirect } from "next/navigation";
const Page = () => {
    const [time, setTime] = useState(20);
    useEffect(() => {
        toast({
            variant: "destructive",
            duration: "8000",
            title: "Demo Page to Showcase Email Verification Page Design",
            description: `This is just a demo page to show the design of the page, there is no actual implementation of authentication, You will be redirected automatically in ${time} seconds`,
        });
        const interval = setInterval(() => {
            setTime((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        if (time === 0) {
            redirect("/profile");
        }
    }, [time]);
    return (
        <div>
            <Navbar itemsEnabled={true} />
            <section className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 py-32 ">
                    <div className="mx-auto max-w-xl text-center">
                        <h1 className="text-3xl font-bold sm:text-4xl/relaxed">Please verify your email...</h1>
                        <div className="w-full text-gray-400 flex justify-center">
                            <MailCheck size={120} />
                        </div>
                        <div className="sm:text-md/relaxed">
                            <p className="mt-4 ">Please verify your email address. We&apos;ve sent a confirmation email to:</p>
                            <p className="text-black font-bold my-2">account@refro.design</p>
                            <p className="mt-4 ">Click the confirmation link in that email to begin using Dribbble.</p>
                            <p className="mt-4 ">
                                Didn&apos;t recieve the email? Check your Spam folder, it may have been caught by a filter. If you still don&apos;t see it, you
                                can <span className="text-primary font-bold">resend the confirmation email</span>.
                            </p>
                            <p className="mt-4">
                                Wrong email address?<span className="text-primary font-bold">Change it.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Page;
