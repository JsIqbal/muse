"use client";

import { Separator } from "@radix-ui/react-separator";
import Banner from "./components/banner";
import Card from "./components/card";

const Page = () => {
    return (
        <div className="my-20 w-full">
            <div className="flex md:flex-row flex-col gap-16 items-center justify-center">
                <Banner />
            </div>
            <div className="flex md:flex-row flex-col gap-16 items-center justify-center">
                <Card />
            </div>
        </div>
    );
};

export default Page;
