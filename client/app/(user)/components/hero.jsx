"use client";

import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

import DownloadCard from "./components/download-card";
import Image from "next/image";
import { motion } from "framer-motion";

const montserrat = Montserrat({
    weight: "700",
    subsets: ["latin"],
});

const Hero = () => {
    return (
        <div className="flex-grow container md:px-10  px:6 2xl:mt-44 xl:mt-36 lg:mt-28 mt-20  mb-2 2xl:mb-6  flex lg:flex-row flex-col gap-x-16 gap-y-4 w-full justify-between  items-center">
            <div className=" animate-fade-in-left flex flex-col gap-12 lg:w-[45%] w-full h-full justify-start py-8">
                <div className="flex flex-col gap-8">
                    <p className="text-blue-500 fond-light">
                        Empowering Developers with Unparalleled Tools!
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 font-semibold">
                        Elevate Your Software Development Experience with{" "}
                        <span
                            className={cn(
                                "text-blue-600 ",
                                montserrat.className
                            )}
                        >
                            Musesoft
                        </span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Embark on a journey of innovation and efficiency with
                        our cutting-edge software applications tailored to
                        enhance every step of your software development process.
                    </p>
                </div>
                <DownloadCard />
            </div>
            <div className=" animate-fade-in-up flex lg:w-[45%] w-full h-full items-center justify-center text-center">
                <Image
                    src="/images/hero-pic.png"
                    alt="Pic error"
                    width={600}
                    height={600}
                />
            </div>
        </div>
    );
};

export default Hero;
