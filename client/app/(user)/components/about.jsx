"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowRight } from "@/node_modules/lucide-react";

import { useState } from "react";

import OurProducts from "./components/our-products";
import AboutSection from "./components/about-section";

const About = () => {
    const [buttonCliked, setButtonCLicked] = useState(false);
    return (
        <div className="curvey-top-bottom  flex flex-col gap-y-24 justify-center items-center w-screen h-auto flex-grow bg-[#F2F6F9] pb-28 pt-20  2xl:px-0 md:px-10 px-4">
            <div
                className={cn(
                    " hidden xl:flex flex-col  gap-y-2 justify-center items-center animate-pulse",
                    buttonCliked && "animate-none"
                )}
                style={{ animationDuration: "2s" }}
            >
                <Button
                    id="move"
                    onClick={() => {
                        document
                            .querySelector("#move")
                            .scrollIntoView({ behavior: "smooth" });
                        setButtonCLicked(true);
                    }}
                    className=" bg-blue-500 font-semibold shadow-xl text-center text-lg h-10"
                >
                    <ArrowDown className="text-white" />
                </Button>
            </div>
            <OurProducts />
            <AboutSection />
        </div>
    );
};

export default About;
