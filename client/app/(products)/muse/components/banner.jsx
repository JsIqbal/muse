import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import Image from "next/image";

const Banner = () => {
    return (
        <>
            <div className="flex flex-col gap-6 md:w-[45%] w-full h-full">
                <div className="text-left text-blue-600 font-semibold text-lg">
                    <Badge
                        className="border-2 border-emerald-500 rounded-full text-emerald-500 text-lg font-bold"
                        variant="outline"
                    >
                        M
                    </Badge>
                    <span className="text-2xl font-semibold text-gray-800">
                        use
                    </span>
                </div>
                <div className="mt-4">
                    <h1 className="text-3xl font-bold">
                        Muse: Middleware Universal Scripting idE
                    </h1>
                </div>
                <div className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-800 ">
                        Streamlined DevOps Automation
                    </h3>
                    <Separator />
                    <h3 className="text-lg text-gray-700 mt-4">
                        <span className="font-semibold ">DevOps Automate:</span>{" "}
                        WebSphere | WebLogic | JBoss | Glassfish | Tomcat |
                        Linux.
                    </h3>
                </div>

                <div className="mt-4">
                    <a
                        href="https://github.com/JsIqbal/muse/archive/refs/heads/develop.zip"
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                    >
                        Download
                    </a>
                </div>
                <div className="mt-4">
                    <p className="text-gray-600">Brought to you by: musesoft</p>
                </div>
            </div>

            <div className="relative md:w-[55%] w-full h-full text-center align-middle ">
                <Image
                    className="ml-auto"
                    height={500}
                    width={600}
                    alt="Logo"
                    src="/images/muse.png"
                />
            </div>
        </>
    );
};

export default Banner;
