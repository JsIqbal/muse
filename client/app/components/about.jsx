import { Button } from "@/components/ui/button";
import Image from "next/image";

const About = () => {
    return (
        <div className="curvey-top  flex flex-col gap-y-16 justify-center items-center w-screen h-auto flex-grow bg-[#F2F6F9] pt-20 pb-20 ">
            <div className="flex flex-col  gap-y-2 justify-center items-center">
                <Button
                    id="move"
                    onClick={() => {
                        const section = document.querySelector("#move");
                        section.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="hidden lg:block bg-blue-500 font-semibold shadow-xl text-center text-lg h-10"
                >
                    About us
                </Button>
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
                    className="lucide lucide-arrow-down text-white"
                >
                    <path d="M12 5v14" />
                    <path d="m19 12-7 7-7-7" />
                </svg>
            </div>

            <div className="container flex-grow h-auto rounded-lg shadow-xl p-10 bg-white">
                <h1 className="text-3xl font-bold mb-4">About Us</h1>
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
            </div>
            <div className="flex flex-col gap-y-8 container items-center">
                <h1 className="text-3xl text-slate-900 font-bold">
                    Our Products
                </h1>
                <div className="border  rounded-lg p-4 w-[70%] bg-white hover:scale-[101%] transition-all duration-150 shadow-lg">
                    <div className="flex gap-x-4 items-center">
                        <div className="relative w-16 h-16 ">
                            <Image fill alt="Logo" src="/icons/muse-icon.png" />
                        </div>
                        <h1 className="text-2xl font-semibold text-center">
                            Muse - Middleware Universal Scripting idE
                        </h1>
                    </div>
                </div>
                <div className="border  rounded-lg p-4 w-[70%] bg-white hover:scale-[101%] transition-all duration-150 shadow-lg">
                    <div className="flex gap-x-4 items-center">
                        <div className="relative w-16 h-16 ">
                            <Image
                                fill
                                alt="Logo"
                                src="/icons/jetPack-icon.png"
                            />
                        </div>
                        <h1 className="text-2xl font-semibold text-center">
                            JETPack - Empowering Java Development environment
                        </h1>
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
                            className="lucide lucide-arrow-right ml-3 transition-all duration-300 text-black"
                        ></svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
