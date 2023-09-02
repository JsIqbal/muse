import Image from "next/image";

import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const montserrat = Montserrat({
    weight: "700",
    subsets: ["latin"],
});

const Hero = () => {
    // This will fetch the number of times downloaded dinamicly (remove the comment when complete)
    const totalDownloads = () => {
        return "10.3k";
    };

    return (
        <div className="flex-grow container 2xl:mt-44 xl:mt-36 lg:mt-28 mt-20  mb-2 2xl:mb-6  flex lg:flex-row flex-col gap-x-16 gap-y-4 w-full justify-between  items-center">
            <div className="flex flex-col gap-12 lg:w-[45%] w-full h-full justify-start py-8">
                <div className="flex flex-col gap-8">
                    <p className="text-blue-500 fond-light">
                        Empowering Developers with Unparalleled Tools!
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 font-semibold">
                        Elevate Your Software Development Experience with{" "}
                        <span
                            className={cn(
                                "text-blue-600 ",
                                montserrat.className
                            )}
                        >
                            Musesoft
                        </span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Embark on a journey of innovation and efficiency with
                        our cutting-edge software applications tailored to
                        enhance every step of your software development process.
                    </p>
                </div>
                <Card className="shadow-sm hover:none space-y-0 w-">
                    <CardHeader>
                        <CardTitle>Total downloads:</CardTitle>
                    </CardHeader>

                    <CardContent className="flex justify-between ">
                        <h1 className="text-2xl font-semibold col-span-2">
                            {totalDownloads()}
                            <span className="text-muted-foreground text-xl text-blue-400 col-span-1 ml-3">
                                And counting
                            </span>
                        </h1>

                        <Link href="/products">
                            {" "}
                            <Button
                                varient="outline"
                                className="hover:scale-[102%] h-max rounded-full text-sm sm:text-md lg:text-lg xl:text-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-800 shadow-xl border-2 border-white"
                            >
                                Download Now
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
            <div className="flex lg:w-[55%] w-full h-full items-center justify-center text-center">
                <Image
                    src="/images/hero-pic.png"
                    alt="Pic error"
                    width={600}
                    height={600}
                    
                />
            </div>
        </div>
    );
};

export default Hero;
