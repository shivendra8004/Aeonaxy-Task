import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
export default function Home() {
    return (
        <main className="bg-white">
            {/* Landing Page Header Started */}
            <header>
                <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                    <Link className="text-primary font-semibold satisfyFont text-3xl" href="/">
                        Dribbble
                    </Link>

                    <div className="flex flex-1 items-center justify-end md:justify-between">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <Link href="/profile">Profile Page</Link>
                                </li>

                                <li>
                                    <Link href="/auth/verify">Verify Page</Link>
                                </li>

                                <li>
                                    <Link href="/interests">Interests Page</Link>
                                </li>

                                <li>
                                    <Link href="/pofile">404 Page</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <Link
                                    href="/auth/sign-up"
                                    className={buttonVariants({
                                        variant: "default",
                                    })}
                                >
                                    Sign Up Page
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Sheet>
                        <SheetTrigger className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 lg:hidden">
                            <span className="sr-only">Toggle menu</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
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
                                <li>
                                    <Link href="/profile">Profile Page</Link>
                                </li>

                                <li>
                                    <Link href="/auth/verify">Verify Page</Link>
                                </li>

                                <li>
                                    <Link href="/interests">Interests Page</Link>
                                </li>

                                <li>
                                    <Link href="/pofile">404 Page</Link>
                                </li>
                            </ul>
                        </SheetContent>
                    </Sheet>
                </div>
            </header>
            {/* Header Code Ended */}
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                            <Image
                                height={100}
                                width={100}
                                alt=""
                                src="/ShivaPassport.jpg"
                                quality={100}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>

                        <div className="lg:py-24">
                            <h2 className="text-3xl font-bold sm:text-4xl">Aeonaxy Task Completed by Shivendra Jat</h2>

                            <p className="mt-4 text-gray-600">
                                I am writing to formally submit my completed project as per the assigned task guidelines. Adhering meticulously to the provided
                                instructions, I have ensured that every aspect of the project reflects a commitment to excellence and professionalism.
                            </p>

                            <Link
                                href="/auth/sign-up"
                                className="mt-8 inline-block rounded bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-primary/75 focus:outline-none focus:ring focus:ring-red-400"
                            >
                                Get Started
                            </Link>
                            <p className="text-sm p-2">
                                Or checkout my{" "}
                                <Link href="https://github.com/shivendra8004" className="text-sm underline" target="_blank">
                                    Github
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <span className="flex items-center">
                <span className="h-px flex-1 bg-black"></span>
                <span className="shrink-0 px-6">xxxxx</span>
                <span className="h-px flex-1 bg-black"></span>
                <span className="shrink-0 px-6">xxxxx</span>
                <span className="h-px flex-1 bg-black"></span>
                <span className="shrink-0 px-6">xxxxx</span>
                <span className="h-px flex-1 bg-black"></span>
            </span>

            <section>
                <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mx-auto">
                    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                        <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                            <h2 className="text-3xl font-bold sm:text-4xl">Technologies Used</h2>

                            <p className="mt-4 text-gray-600">
                                This task is built with the latest technologies to showcase excellence in every aspect. following their instructions closely and
                                using the newest technology to make it great.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                            <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>

                                <h2 className="mt-2 font-bold">Next.Js</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">React framework for seamless web development.</p>
                            </div>

                            <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>

                                <h2 className="mt-2 font-bold">Tailwind CSS</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">Streamlined styling approach for design implementation.</p>
                            </div>

                            <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>

                                <h2 className="mt-2 font-bold">Lucide React</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">Icon library enhancing visuals and functionality.</p>
                            </div>

                            <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>

                                <h2 className="mt-2 font-bold">Unsplash</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600"> High-quality image sourcing to enrich user experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
