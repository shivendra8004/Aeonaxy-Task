"use client";
import React from "react";
import Link from "next/link";
import { Dribbble, Twitter, Facebook, Instagram, Github } from "lucide-react";
const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <Link className={` text-primary text-3xl font-semibold satisfyFont`} href="/">
                            Dribbble
                        </Link>

                        <p className="mt-4 max-w-xs text-gray-500">
                            Dribbble is the world&apos;s leading community for creatives to share, grow, and get hired.
                        </p>

                        <ul className="mt-8 flex gap-6">
                            <li>
                                <Link href="/" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:opacity-75">
                                    <span className="sr-only">Dribbble</span>

                                    <Dribbble size={20} />
                                </Link>
                            </li>

                            <li>
                                <Link href="/" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:opacity-75">
                                    <span className="sr-only">Twitter</span>

                                    <Twitter size={20} />
                                </Link>
                            </li>

                            <li>
                                <Link href="/" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:opacity-75">
                                    <span className="sr-only">Facebook</span>

                                    <Facebook size={20} />
                                </Link>
                            </li>

                            <li>
                                <Link href="/" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:opacity-75">
                                    <span className="sr-only">Instagram</span>

                                    <Instagram size={20} />
                                </Link>
                            </li>

                            <li>
                                <Link href="/" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:opacity-75">
                                    <span className="sr-only">Github</span>

                                    <Github size={20} />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2 lg:grid-cols-5">
                        <div>
                            <p className="font-semibold text-gray-900">For designers</p>

                            <ul className="mt-4 space-y-2 text-sm">
                                <li>
                                    <Link href="/" className="text-gray-700 transition hover:opacity-75">
                                        Go Pro!
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/" className="text-gray-700 transition hover:opacity-75">
                                        Explore design work
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/" className="text-gray-700 transition hover:opacity-75">
                                        Design blog
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/" className="text-gray-700 transition hover:opacity-75">
                                        Overtime podcast
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/" className="text-gray-700 transition hover:opacity-75">
                                        Playoffs
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="text-gray-700 transition hover:opacity-75">
                                        Weekly Warm-Up
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="text-gray-700 transition hover:opacity-75">
                                        Refer a Friend
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="text-gray-700 transition hover:opacity-75">
                                        Code of conduct
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold text-gray-900">Hire designers</p>

                            <ul className="my-4 space-y-2 text-sm">
                                <li>
                                    <Link href="/" className="text-gray-700 transition hover:opacity-75">
                                        Post a job opening
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/" className="text-gray-700 transition hover:opacity-75">
                                        Post a freelance project
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/" className="text-gray-700 transition hover:opacity-75">
                                        Search for designers
                                    </Link>
                                </li>
                            </ul>
                            <p className="font-semibold text-gray-900">Brands</p>

                            <ul className="mt-4 space-y-2 text-sm">
                                <li>
                                    <Link href="/" className="text-gray-700 transition hover:opacity-75">
                                        Advertise with us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold text-gray-900">Company</p>

                            <ul className="mt-4 space-y-2 text-sm">
                                <li>
                                    <Link href="/" className="text-gray-700 transition hover:opacity-75">
                                        About
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/" className="text-gray-700 transition hover:opacity-75">
                                        Careers
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/" className="text-gray-700 transition hover:opacity-75">
                                        Support
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="text-gray-700 transition hover:opacity-75">
                                        Media Kit
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="text-gray-700 transition hover:opacity-75">
                                        Testimonials
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="text-gray-700 transition hover:opacity-75">
                                        API
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="text-gray-700 transition hover:opacity-75">
                                        Terms of Service
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="text-gray-700 transition hover:opacity-75">
                                        Privacy policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="text-gray-700 transition hover:opacity-75">
                                        Cookie policy
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold text-gray-900">Directories</p>

                            <ul className="my-6 space-y-2 text-sm">
                                <li>
                                    <Link href="/" className="text-gray-700 transition hover:opacity-75">
                                        Design jobs
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/" className="text-gray-700 transition hover:opacity-75">
                                        Designers for hire
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/" className="text-gray-700 transition hover:opacity-75">
                                        Freelance designers for hire
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/" className="text-gray-700 transition hover:opacity-75">
                                        Tags
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="text-gray-700 transition hover:opacity-75">
                                        Places
                                    </Link>
                                </li>
                            </ul>
                            <p className="font-semibold text-gray-900">Design assests</p>

                            <ul className="mt-4 space-y-2 text-sm">
                                <li>
                                    <Link href="/" className="text-gray-700 transition hover:opacity-75">
                                        Dribbble Marketplace
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/" className="text-gray-700 transition hover:opacity-75">
                                        Creative Market
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/" className="text-gray-700 transition hover:opacity-75">
                                        Fontspring
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/" className="text-gray-700 transition hover:opacity-75">
                                        Font Squirrel
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-900">Design Resources</p>

                            <ul className="mt-4 space-y-2 text-sm">
                                <li>
                                    <Link href="/" className="text-gray-700 transition hover:opacity-75">
                                        Freelancing
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/" className="text-gray-700 transition hover:opacity-75">
                                        Design Hiring
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/" className="text-gray-700 transition hover:opacity-75">
                                        Design Portfolio
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/" className="text-gray-700 transition hover:opacity-75">
                                        Design Education
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="text-gray-700 transition hover:opacity-75">
                                        Creative Process
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="text-gray-700 transition hover:opacity-75">
                                        Design Industry Trends
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-between">
                    <p className="text-xs text-gray-500">&copy; 2023. Dribbble. All rights reserved.</p>
                    <p className="text-xs text-gray-500 flex gap-1">
                        <span className="font-semibold text-black">20,501,853</span> shots dribbbled <Dribbble size={16} className="text-primary" />
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
