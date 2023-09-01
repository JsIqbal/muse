"use client";

import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import JETPackTabs from "./JETPack components/jetPackTabs";
import { Separator } from "@/components/ui/separator";

const Product2 = () => {
    const [showMore, setShowMore] = useState(false);
    const cart = useCart();
    const data = {
        id: "prod_OQqfX0s5HDDSZI",
        name: "JETPack",
        price: { id: "price_1NdyyYHyjaNCI3rE85pm3uK6", dollar: 20 },
        images: [
            "https://files.stripe.com/links/MDB8YWNjdF8xTmR5ZGlIeWphTkNJM3JFfGZsX3Rlc3RfdjlFWkZaWmVBRU93b2VUTTN2dVNxRk0x00fWNkumMi",
        ],
    };
    // Will be added to cart
    function onAddToCart() {
        cart.addItem(data);
    }

    return (
        <div className="w-screen py-8 2xl:px-0 px-8 bg-[#F2F6F9]">
            <div className="flex lg:flex-row flex-col justify-between items-center container">
                <div className="lg:w-[50%] flex justify-start w-max md:py-[7%] py-[9%]">
                    <div className="relative rounded-md">
                        <Image
                            src="/images/dummy-pic-1.PNG"
                            width={450}
                            height={450}
                            alt="demo picture"
                        />
                    </div>
                </div>
                <div className="lg:w-[50%] w-full flex flex-col justify-center items-start gap-y-8">
                    <div className="flex flex-col gap-y-4">
                        <h1 className="text-3xl font-extrabold text-gray-900">
                            JETPack - Empowering Java Development and
                            Diagnostics:
                        </h1>
                        <p className="text-lg">
                            JET Pack offers essential tools for Java developers,
                            encompassing OpenSource JDKs from Java 13 to 19. It
                            includes Visual VM, JConsole, and MissionControl,
                            providing powerful diagnostic capabilities to
                            profile and optimize your code.
                        </p>

                        <div className="mt-8 space-y-6">
                            <div className="text-[1rem] text-gray-700">
                                <h2 className="font-semibold">Features:</h2>

                                <div className="mt-2 space-y-2">
                                    <div className="flex items-start">
                                        <svg
                                            className="flex-shrink-0 h-4 w-4 text-green-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <p className="ml-1">
                                            OpenSource Java JDK Support: JETPack
                                            integrates with Java JDKs 13-19,
                                            empowering developers to leverage
                                            open-source Java advancements.
                                        </p>
                                    </div>

                                    <div className="flex items-start">
                                        <svg
                                            className="flex-shrink-0 h-4 w-4 text-green-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <p className="ml-1">
                                            Efficient Diagnostics: Tools like
                                            Visual VM, JConsole, and
                                            MissionControl offer real-time
                                            insights into memory usage, CPU
                                            performance, and smarter
                                            decision-making.
                                        </p>
                                    </div>

                                    <div className="flex items-start">
                                        <svg
                                            className="flex-shrink-0 h-4 w-4 text-green-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <p className="ml-1">
                                            Precise Performance Boost: Diagnose
                                            memory leaks, manage heap dumps, and
                                            profile CPU and memory usage with
                                            precision. Enhance efficiency and
                                            application behavior over time.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="text-lg text-gray-700">
                                <p className="mt-4 flex gap-x-4">
                                    <Button
                                        className="bg-blue-500"
                                        onClick={onAddToCart}
                                    >
                                        Add to cart
                                    </Button>

                                    <Button
                                        variant="outline"
                                        onClick={() => {
                                            setShowMore(!showMore);

                                            if (!showMore) {
                                                const section =
                                                    document.querySelector(
                                                        "#jetPackMoreInfo"
                                                    );
                                                section.scrollIntoView({
                                                    behavior: "smooth",
                                                });
                                            }
                                        }}
                                    >
                                        Details
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className={cn(
                                                "lucide lucide-arrow-right ml-3 transition-all duration-300",
                                                showMore && "rotate-90"
                                            )}
                                        >
                                            <path d="M5 12h14" />
                                            <path d="m12 5 7 7-7 7" />
                                        </svg>
                                    </Button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                id="jetPackMoreInfo"
                className={cn(
                    "transition-all duration-700 container delay-75",
                    showMore ? " opacity-100" : " opacity-0"
                )}
            >
                <JETPackTabs />
            </div>
        </div>
    );
};

export default Product2;
