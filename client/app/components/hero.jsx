import Image from "next/image";

import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "../../components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const montsserrat = Montserrat({
    weight: "700",
    subsets: ["latin"],
});

const Hero = () => {
    // This will fetch the number of times downloaded dinamicly (remove the comment when complete)
    const totalDownloads = () => {
        return "10.3k";
    };

    return (
        <div className="flex-grow container mt-44 mb-6 flex md:flex-row flex-col gap-x-16 gap-y-4 w-full md:justify-between justify-start items-center">
            <div className="flex flex-col gap-6 md:w-[45%] w-full h-full justify-start">
                <p className="text-sky-500">
                    Empowering Developers with Unparalleled Tools!
                </p>
                <h2 className="text-3xl lg:text-4xl text-slate-900 font-semibold">
                    Elevate Your Software Development Experience with{" "}
                    <span
                        className={cn("text-blue-600 ", montsserrat.className)}
                    >
                        Musesoft
                    </span>
                </h2>
                <p className="text-muted-foreground">
                    Embark on a journey of innovation and efficiency with our
                    cutting-edge software applications tailored to enhance every
                    step of your software development process.
                </p>
                <Card className="shadow-sm hover:none space-y-0 w-">
                    <CardHeader>
                        <CardTitle>Total downloads:</CardTitle>
                    </CardHeader>

                    <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 items-center">
                        <h1 className="text-2xl font-semibold col-span-2">
                            {totalDownloads()}
                            <span className="text-muted-foreground text-xl text-blue-400 col-span-1 ml-3">
                                And counting
                            </span>
                        </h1>

                        <Link href="/products" className="col-span-1">
                            {" "}
                            <Button
                                varient="outline"
                                className=" h-max rounded-full font-semibold bg-gradient-to-r from-blue-500 to-indigo-700 shadow-xl border-2 border-white"
                            >
                                Download Now
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
            <div className="relative md:w-[55%] w-full h-full">
                <Image
                    src="/images/hero-pic.png"
                    alt="Pic error"
                    width={600}
                    height={600}
                    className="ml-auto"
                />
            </div>
        </div>
    );
};

export default Hero;
