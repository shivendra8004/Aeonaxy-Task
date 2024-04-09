"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "../ui/input";
import { buttonVariants } from "../ui/button";
import { Camera, RefreshCw } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu";
import { toast } from "../ui/use-toast";
const ProfileForm = () => {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const handleFileChange = (e) => {
        setUploading(true);
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = () => {
                setFile(reader.result);
            };
            reader.readAsDataURL(selectedFile);
            setUploading(false);
        }
        setUploading(false);
    };
    const handleClick = (e) => {
        toast({
            title: "Warning",
            description: "This is a demo page designed to exhibit my development skills. You can test the functionality by uploading an image.",
            variant: "destructive",
        });
    };
    return (
        <form className="mt-4 grid grid-cols-6 gap-4 ">
            <h3 className="col-span-6 font-semibold text-xl sm:text-2xl">Add an avatar</h3>
            <div className="col-span-6 flex flex-col sm:flex-row items-center w-full gap-6 sm:gap-12">
                {file ? (
                    uploading ? (
                        <div className="w-32 h-32 bg-transparent rounded-full flex items-center justify-center border border-dashed text-gray-500 border-gray-500">
                            <RefreshCw size={20} className="animate-spin text-black" />
                        </div>
                    ) : (
                        <div className="relative w-32 h-32 ">
                            <Image src={file} height={100} width={100} alt="Profile Image" className="rounded-full w-32 h-32 object-cover" />
                        </div>
                    )
                ) : (
                    <div className="w-32 h-32 bg-transparent rounded-full flex items-center justify-center border border-dashed text-gray-500 border-gray-500">
                        <Camera size={16} />
                    </div>
                )}
                <div className="text-center sm:text-start">
                    <label
                        htmlFor="file"
                        className={buttonVariants({
                            variant: "outline",
                            className: "font-semibold",
                        })}
                    >
                        Choose Image
                    </label>
                    <Input type="file" accept="image/*" onChange={handleFileChange} name="file" id="file" className="hidden" />

                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-gray-500 p-0 ">Or choose one of our defaults</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className=" w-56 rounded-md border border-gray-100 bg-white shadow-lg">
                                        <div className="p-2">
                                            <strong className="block p-2 text-xs font-medium uppercase  text-gray-400"> General </strong>

                                            <button
                                                type="button"
                                                className="block text-start rounded-lg w-full px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                                role="menuitem"
                                                onClick={handleClick}
                                            >
                                                Male
                                            </button>

                                            <button
                                                type="button"
                                                className="block rounded-lg text-start w-full px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                                role="menuitem"
                                                onClick={handleClick}
                                            >
                                                Female
                                            </button>
                                            <button
                                                type="button"
                                                className="block rounded-lg w-full text-start px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                                role="menuitem"
                                                onClick={handleClick}
                                            >
                                                Other
                                            </button>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
            <div className="col-span-6">
                <h3 className="col-span-6 font-semibold text-xl sm:text-2xl">Add your location</h3>
                <Input placeholder="Enter a location" className="border-1 text-md sm:text-lg font-medium rounded-none border-b mt-3 focus-visible:ring-0" />
            </div>
            <div className="col-span-3 lg:col-span-2 mt-4">
                <Link
                    href="/interests"
                    className={buttonVariants({
                        variant: "default",
                        className: "w-full py-1",
                    })}
                >
                    Next
                </Link>
                <p className="text-center py-1 m-0 text-sm text-gray-600">
                    or Press{" "}
                    <Link href="/auth/sign-up" className="font-semibold">
                        RETURN
                    </Link>
                </p>
            </div>
        </form>
    );
};

export default ProfileForm;
