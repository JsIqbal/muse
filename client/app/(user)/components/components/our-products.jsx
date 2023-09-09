import { ArrowRight } from "@/node_modules/lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const OurProducts = () => {
    return (
        <div className="flex flex-col gap-y-12 container items-center">
            <h1 className="text-gray-800 text-4xl lg:text-5xl font-bold">
                Our Products
            </h1>
            <div className="my-4 mx-auto w-20 h-2 -mt-6 bg-indigo-500"></div>

            <motion.a
                variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.4, delay: 0.05 }}
                viewport={{ once: true }}
                href="/products"
                className="rounded-lg py-6 px-8  lg:w-[80%] w-full bg-white hover:scale-[101%] transition-transform duration-150 shadow-lg flex md:flex-row flex-col gap-y-6 gap-x-16 items-center justify-between"
            >
                <div className="relative w-16 h-16">
                    <Image fill alt="Logo" src="/icons/muse-icon.png" />
                </div>

                <h1 className="md:text-3xl text-2xl font-semibold text-center">
                    Muse - Middleware Universal Scripting idE
                </h1>
                <ArrowRight className=" w-8 h-8 hover:text-blue-900" />
            </motion.a>

            <motion.a
                variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.4, delay: 0.15 }}
                viewport={{ once: true }}
                href="/products"
                className="rounded-lg py-6 px-8  lg:w-[80%] w-full bg-white hover:scale-[101%] transition-transform duration-150 shadow-lg flex md:flex-row flex-col gap-y-6 gap-x-16 items-center justify-between"
            >
                <div className="relative w-16 h-16">
                    <Image fill alt="Logo" src="/icons/jetpack-icon.png" />
                </div>

                <h1 className="md:text-3xl text-2xl font-semibold text-center">
                    JETPack - Empowering Java Development environment
                </h1>
                <ArrowRight className=" w-8 h-8 hover:text-blue-900" />
            </motion.a>
        </div>
    );
};

export default OurProducts;
