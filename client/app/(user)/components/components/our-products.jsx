import { ArrowRight } from "@/node_modules/lucide-react";

import Image from "next/image";
import Link from "next/link";

const OurProducts = () => {
    return (
        <div className="flex flex-col gap-y-12 container items-center ">
            <h1 className="text-gray-800 text-4xl lg:text-5xl font-bold">
                Our Products
            </h1>
            <div className="my-4 mx-auto w-20 h-2 -mt-6 bg-indigo-500"></div>

            <Link
                href="/products"
                className="animate-fade-in-left rounded-lg py-6 px-8  lg:w-[80%] w-full bg-white hover:scale-[101%] transition-transform duration-150 shadow-lg "
            >
                <div className="flex md:flex-row flex-col gap-y-6 gap-x-16 items-center justify-between ">
                    <Image
                        alt="Logo"
                        src="/icons/muse-icon.png"
                        width={64}
                        height={64}
                    />

                    <h1 className="md:text-3xl text-2xl font-semibold text-center">
                        Muse - Middleware Universal Scripting idE
                    </h1>

                    <ArrowRight className=" w-8 h-8" />
                </div>
            </Link>

            <Link
                href="/products"
                className="animate-fade-in-left rounded-lg py-6 px-8  lg:w-[80%] w-full bg-white hover:scale-[101%] transition-transform duration-150 shadow-lg "
            >
                <div className="flex md:flex-row flex-col gap-y-6 gap-x-16 items-center justify-between ">
                    <Image
                        alt="Logo"
                        src="/icons/jetpack-icon.png"
                        width={64}
                        height={64}
                    />

                    <h1 className="md:text-3xl text-2xl font-semibold text-center">
                        JETPack - Empowering JaButton Development environment
                    </h1>

                    <ArrowRight className=" w-8 h-8" />
                </div>
            </Link>
        </div>
    );
};

export default OurProducts;
