"use client";

import Banner from "./components/banner";
import MuseCard from "./components/card";
import MuseTab from "./components/tab";

const Page = () => {
    return (
        <div className="mb-20 w-full custom-top ">
            <div className="flex md:flex-row flex-col gap-16 items-center justify-center">
                <Banner />
            </div>
            <div className="flex md:flex-row flex-col gap-16 items-center justify-center">
                <MuseCard />
            </div>
            <div className="flex md:flex-row flex-col gap-16 items-center justify-center">
                <MuseTab />
            </div>
        </div>
    );
};

export default Page;
