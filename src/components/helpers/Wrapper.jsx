import { cn } from "@/lib/utils";
import React from "react";

const Wrapper = ({ children, className = "" }) => {
    return <div className={cn("mx-auto w-full max-w-screen-xl px-4 sm:px-16 md:px-36", className)}>{children}</div>;
};

export default Wrapper;
