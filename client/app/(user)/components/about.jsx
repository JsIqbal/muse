"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowRight } from "@/node_modules/lucide-react";

import { useState } from "react";

import OurProducts from "./components/our-products";

const About = () => {
    const [buttonCliked, setButtonCLicked] = useState(false);
    return (
        <div className="curvey-top-bottom  flex flex-col gap-y-16 justify-center items-center w-screen h-auto flex-grow bg-[#F2F6F9] pb-28 pt-20  2xl:px-0 md:px-10 px-4">
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

            {/* <div className="container flex-grow h-auto rounded-lg shadow-xl p-10 bg-white">
                <h1 className="text-3xl font-semibold mb-4">About Us</h1>
                <p className="text-gray-700">
                    Welcome to Musesoft! We are a team of passionate and
                    experienced developers who offer a diverse range of
                    cutting-edge software solutions designed to enhance your
                    development and automation experiences.
                </p>
                <p className="text-gray-700 mt-2">
                    Whether you need a powerful scripting tool, a fast and
                    reliable Java environment, or anything in between, we have
                    the perfect software product for you. Our products are easy
                    to use, highly customizable, and compatible with various
                    platforms and frameworks.
                </p>

                <p className="text-gray-700 mt-4">
                    Choose innovation and efficiency with our software products
                    that redefine the way you develop, automate, and optimize
                    your projects.
                </p>
            </div> */}
            <OurProducts />
        </div>
    );
};

export default About;
