"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowRight } from "@/node_modules/lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const About = () => {
    const [buttonCliked, setButtonCLicked] = useState(false);
    return (
        <div className="curvey-top-bottom  flex flex-col gap-y-16 justify-center items-center w-screen h-auto flex-grow bg-[#F2F6F9] pb-28 pt-20  2xl:px-0 md:px-10 px-4">
            <div
                className={cn(
                    " hidden xl:flex flex-col  gap-y-2 justify-center items-center animate-bounce", buttonCliked && "animate-none"
                    
                )}
                style={{ animationDuration: "1s" }}
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
                    Products
                </Button>
                <ArrowDown />
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
            <div className="flex flex-col gap-y-12 container items-center">
                <h1 className="text-gray-800 text-4xl lg:text-5xl font-bold">
                    Our Products
                </h1>
                <div className="my-4 mx-auto w-20 h-2 -mt-6 bg-indigo-500"></div>

                <Link
                    href="/products"
                    className="rounded-lg py-6 px-8  lg:w-[80%] w-full bg-white hover:scale-[100.6%] transition-all duration-150 shadow-lg flex gap-x-4 items-center"
                >
                    <div className="relative">
                        <Image
                            width={64}
                            height={64}
                            alt="Logo"
                            src="/icons/muse-icon.png"
                        />
                    </div>
                    <h1 className="text-2xl font-semibold text-center">
                        Muse - Middleware Universal Scripting idE
                    </h1>
                    <ArrowRight className="ml-auto w-8 h-8 hover:text-blue-900" />
                </Link>

                <Link
                    href="/products"
                    className="rounded-lg py-6 px-8  lg:w-[80%] w-full bg-white hover:scale-[100.6%] transition-all duration-150 shadow-lg flex gap-x-4 items-center"
                >
                    <div className="relative">
                        <Image
                            width={64}
                            height={64}
                            alt="Logo"
                            src="/icons/jetpack-icon.png"
                        />
                    </div>
                    <h1 className="text-2xl font-semibold text-center">
                        JETPack - Empowering Java Development environment
                    </h1>
                    <ArrowRight className="ml-auto w-8 h-8 hover:text-blue-900" />
                </Link>
            </div>
        </div>
    );
};

export default About;
