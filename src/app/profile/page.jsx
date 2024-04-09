import Navbar from "@/components/helpers/Navbar";
import ProfileForm from "@/components/helpers/ProfileForm";
import Wrapper from "@/components/helpers/Wrapper";
import React from "react";

const Page = () => {
    return (
        <div>
            <Navbar itemsEnabled={false} link="/" />
            <Wrapper className="px-4 sm:px-24 md:px-36 lg:px-52 xl:px-60 py-8 md:py-20 ">
                <div>
                    <h2 className="text-3xl sm:text-4xl  font-bold mb-2">
                        <span className="block lg:inline"> Welcome!</span> Let&apos;s create your profile
                    </h2>
                    <p className="text-sm sm:text-md md:text-lg text-gray-600">Let others get to know you better! Yes you can do these later</p>

                    <ProfileForm />
                </div>
            </Wrapper>
        </div>
    );
};

export default Page;
