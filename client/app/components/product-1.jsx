"use client";

import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import Image from "next/image";
import Link from "next/link";

const Product1 = () => {
    const cart = useCart();
    const data = {
        id: "prod_OQqVfPPkSOgzHj",
        name: "Muse",
        price: { id: "price_1NdyopHyjaNCI3rEeEKN4r1L", dollar: 20 },
        image: "https://files.stripe.com/links/MDB8YWNjdF8xTmR5ZGlIeWphTkNJM3JFfGZsX3Rlc3RfNVR5THV6UWVQMG9zdUlkS3g5MW9JQ2FZ00NAoHmUpY",
    };
    // Will be added to cart
    function onAddToCart() {
        cart.addItem(data);
        console.log(cart.items);
    }

    return (
        <div className="w-screen  bg-white">
            <div className="flex lg:flex-row flex-col justify-center items-center py-10 px-6 md:px-10 lg:px-[7%] xl:px-[10%] 2xl:px-[20%] flex-grow">
                <div className="lg:w-[50%] w-full flex flex-col justify-center items-start gap-y-8">
                    <div className="flex flex-col gap-y-4">
                        <h1 className="text-3xl font-extrabold text-gray-900">
                            Muse: Middleware Universal <br /> Scripting idE
                        </h1>
                        <p className="text-lg">
                            Automate Middleware Management with Python/Jython.
                            Target WebSphere, WebLogic, JBoss, Glassfish, and
                            Tomcat over JMX and Linux SSH.
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

                                    <Link href="/muse">
                                        <Button variant="outline">
                                            Learn More{" "}
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
                                                className="lucide lucide-arrow-right ml-3"
                                            >
                                                <path d="M5 12h14" />
                                                <path d="m12 5 7 7-7 7" />
                                            </svg>
                                        </Button>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:w-[50%] w-max md:p-[7%] p-[9%]">
                    <div className="relative rounded-md shadow-lg">
                        <Image
                            src="/images/dummy-pic-1.PNG"
                            width={450}
                            height={450}
                            alt="demo picture"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product1;
