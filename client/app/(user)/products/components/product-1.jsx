"use client";

import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import MuseTabs from "./muse components/museTabs";

const Product1 = () => {
    const [showMore, setShowMore] = useState(false);
    const cart = useCart();
    const data = {
        id: "prod_OQqVfPPkSOgzHj",
        name: "Muse",
        price: { id: "price_1NdyopHyjaNCI3rEeEKN4r1L", dollar: 20 },
        images: ["https://files.stripe.com/links/MDB8YWNjdF8xTmR5ZGlIeWphTkNJM3JFfGZsX3Rlc3RfNVR5THV6UWVQMG9zdUlkS3g5MW9JQ2FZ00NAoHmUpY"],
    };
    // Will be added to cart
    function onAddToCart() {
        cart.addItem(data);
    }

    return (
        <div className="w-screen  bg-white flex flex-col" id="museContent">
            <div className="flex lg:flex-row flex-col justify-between items-center container">
                <div className="lg:w-[50%] w-full flex flex-col justify-center items-start gap-y-8">
                    <div className="flex flex-col gap-y-4">
                        <h1 className="text-3xl font-extrabold text-gray-900">
                            Muse: Middleware Universal <br /> Scripting idE
                        </h1>
                        <p className="text-lg">
                            Muse empowers you to automate WebSphere, WebLogic,
                            JBoss, Glassfish, and Tomcat Middleware Estates over
                            JMX using Python / Jython. With its user-friendly
                            Eclipse-based Jython Development IDE, you can
                            streamline your workflow and simplify server
                            management.
                        </p>

                        <div className="mt-8 space-y-6">
                            <div className="text-[1rem] text-gray-700">
                                <h2 className="font-semibold">Features:</h2>

                                <div className="mt-2 space-y-2">
                                    <p className="flex items-start">
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
                                        Simplify, Aggregate, Automate...
                                    </p>
                                    <p className="ml-5">
                                        Manage Linux, WebSphere, WebLogic,
                                        JBoss, Glassfish, Tomcat through JMX and
                                        Linux SSH without agents.
                                    </p>
                                    <p className="flex items-start">
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
                                        Sample Scripts Included
                                    </p>
                                    <p className="ml-5">
                                        Access GIT Repository, apply SSL
                                        Configuration in clicks. Performance
                                        Tune Pega (JBoss), Upgrade Vendor Apps,
                                        Build WebLogic Domains quickly.
                                    </p>
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
                                            const section =
                                                document.querySelector(
                                                    "#museMoreInfo"
                                                );
                                            if (!showMore) {
                                                section.scrollIntoView({
                                                    behavior: "smooth",
                                                });
                                            }
                                        }}
                                    >
                                        Details{" "}
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

                <div className="lg:w-[50%] w-max md:p-[7%] p-[9%]">
                    <div className="relative rounded-md">
                        <Image
                            src="/images/dummy-pic-1.PNG"
                            width={450}
                            height={450}
                            alt="demo picture"
                        />
                    </div>
                </div>
            </div>
            <div
                id="museMoreInfo"
                className={cn(
                    "transition-all duration-700 container ",
                    showMore ? "h-[44rem]" : "h-0 invisible"
                )}
            >
                <MuseTabs />
            </div>
        </div>
    );
};

export default Product1;
