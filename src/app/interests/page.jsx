"use client";
import React, { useState } from "react";
import Navbar from "@/components/helpers/Navbar";
import Link from "next/link";
import Option from "@/components/helpers/Option";

const Page = () => {
    const [selectedChoices, setSelectedChoices] = useState([]);

    const handleChoiceSelect = (choice) => {
        if (selectedChoices.includes(choice)) {
            setSelectedChoices(selectedChoices.filter((item) => item !== choice));
        } else {
            setSelectedChoices([...selectedChoices, choice]);
        }
    };

    return (
        <div>
            <Navbar itemsEnabled={true} link="/" />
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 ">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="text-3xl font-extrabold sm:text-4xl">What brings you to Dribbble?</h1>

                        <p className="mt-4 sm:text-md/relaxed">
                            Select the options that best describe you. Don&apos;t worry, you can explore other options later.
                        </p>

                        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                            <Option
                                selected={selectedChoices.includes("x")}
                                imageSrc="/option1.png"
                                title="I'm a designer looking to share my work"
                                description="Connect, showcase, and collaborate with fellow designers effortlessly."
                                choice="x"
                                handleChoiceSelect={handleChoiceSelect}
                            />
                            <Option
                                selected={selectedChoices.includes("y")}
                                imageSrc="/option1.png"
                                title="I'm looking to hire a designer "
                                description="Find top-tier talent to bring your vision to life."
                                choice="y"
                                handleChoiceSelect={handleChoiceSelect}
                            />
                            <Option
                                selected={selectedChoices.includes("z")}
                                imageSrc="/option1.png"
                                title="I'm looking for design inspiration"
                                description="Explore diverse styles and innovative ideas for inspiration."
                                choice="z"
                                handleChoiceSelect={handleChoiceSelect}
                            />
                        </div>
                        {selectedChoices.length > 0 && (
                            <div className="mt-8 flex justify-center ">
                                <p className="text-sm font-semibold">Anything else? You can select multiple</p>
                            </div>
                        )}

                        <div className="mt-4 flex justify-center ">
                            <Link
                                className={`block w-full rounded-lg px-16 py-3 text-sm font-medium text-white shadow focus:outline-none focus:ring sm:w-auto ${
                                    selectedChoices.length > 0 ? "bg-primary active:bg-red-500" : "bg-primary/50 cursor-not-allowed"
                                }`}
                                href="/"
                                disabled={!selectedChoices.length > 0}
                            >
                                Finish
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;
