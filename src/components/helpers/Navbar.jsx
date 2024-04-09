import React from "react";
import Link from "next/link";
import { ChevronLeft, BriefcaseBusiness } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
const Navbar = ({ itemsEnabled, link = null }) => {
    /* 
    ## if itemsEnabled is false then no others things will get display in navbar except logo
    ## if itemsEnabled is true and no link prop is passed then Main navbar with various option will get display
    ## if itemsEnabled is true and link prop is passed then only back button will get displayed 
    */
    return (
        <header className="bg-white border-b">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                <Link className={`satisfyFont text-primary text-3xl font-medium`} href="/">
                    Dribbble
                </Link>
                {itemsEnabled &&
                    (link ? (
                        <Link
                            href={link}
                            className={buttonVariants({
                                variant: "secondary",
                                className: "m-2",
                            })}
                        >
                            <ChevronLeft size={20} />
                        </Link>
                    ) : (
                        <div className="flex font-medium flex-1 items-center justify-end lg:justify-between">
                            <nav aria-label="Global" className="hidden lg:block">
                                <ul className="flex items-center gap-6 text-sm ">
                                    <li>
                                        <Link className=" text-black transition hover:text-gray-600" href="#">
                                            {" "}
                                            Inspiration{" "}
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className=" text-black transition hover:text-gray-600" href="#">
                                            {" "}
                                            Find Work{" "}
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className=" text-black transition hover:text-gray-600" href="#">
                                            {" "}
                                            Learn Design{" "}
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className=" text-black transition hover:text-gray-600" href="#">
                                            {" "}
                                            Go Pro{" "}
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className=" text-black transition hover:text-gray-600" href="#">
                                            {" "}
                                            Hire Designers{" "}
                                        </Link>
                                    </li>
                                </ul>
                            </nav>

                            <div className="flex items-center gap-4">
                                <div className="sm:flex sm:gap-4">
                                    <div className="relative">
                                        <Label htmlFor="Search" className="sr-only">
                                            {" "}
                                            Search{" "}
                                        </Label>

                                        <Input
                                            type="text"
                                            id="Search"
                                            placeholder="Search ..."
                                            className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm focus-visible:ring-0"
                                        />

                                        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                                            <button type="button" className="text-gray-600 hover:text-gray-700">
                                                <span className="sr-only">Search</span>

                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="h-4 w-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </div>

                                    <div className="hidden lg:flex gap-6 items-center">
                                        <BriefcaseBusiness size={20} className="text-gray-600 cursor-pointer" />

                                        <Avatar size="sm">
                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                            <AvatarFallback>Shiva</AvatarFallback>
                                        </Avatar>
                                        <Link
                                            href="/profile"
                                            className={buttonVariants({
                                                variant: "default",
                                                size: "sm",
                                            })}
                                        >
                                            Upload
                                        </Link>
                                    </div>
                                </div>

                                <Sheet>
                                    <SheetTrigger className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 lg:hidden">
                                        <span className="sr-only">Toggle menu</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    </SheetTrigger>
                                    <SheetContent>
                                        <ul className="flex flex-col items-center gap-4 text-sm ">
                                            <li className="w-full border-b py-2">
                                                <Link className={`satisfyFont text-primary text-3xl font-medium`} href="/">
                                                    Dribbble
                                                </Link>
                                            </li>
                                            <li className="w-full flex flex-col gap-2 border-b pb-1">
                                                <div className="flex justify-center">
                                                    <Avatar className="h-20 w-20">
                                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                                        <AvatarFallback>Shiva</AvatarFallback>
                                                    </Avatar>
                                                </div>
                                                <Link
                                                    href="/profile"
                                                    className={buttonVariants({
                                                        variant: "default",
                                                        size: "sm",
                                                        className: "m-0",
                                                    })}
                                                >
                                                    Upload
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className=" text-black transition hover:text-gray-600" href="#">
                                                    Inspiration
                                                </Link>
                                            </li>

                                            <li>
                                                <Link className=" text-black transition hover:text-gray-600" href="#">
                                                    Find Work
                                                </Link>
                                            </li>

                                            <li>
                                                <Link className=" text-black transition hover:text-gray-600" href="#">
                                                    Learn Design
                                                </Link>
                                            </li>

                                            <li>
                                                <Link className=" text-black transition hover:text-gray-600" href="#">
                                                    Go Pro
                                                </Link>
                                            </li>

                                            <li>
                                                <Link className=" text-black transition hover:text-gray-600" href="#">
                                                    Hire Designers
                                                </Link>
                                            </li>
                                        </ul>
                                    </SheetContent>
                                </Sheet>
                            </div>
                        </div>
                    ))}
            </div>
        </header>
    );
};

export default Navbar;
