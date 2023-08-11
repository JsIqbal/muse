import Image from "next/image";

import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "../../components/ui/card";

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
                        Nubinet
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
                    <CardContent className="flex gap-x-4">
                        <h1 className="text-2xl font-semibold">
                            {totalDownloads()}
                        </h1>
                        <p className="text-muted-foreground text-xl text-blue-400">
                            And counting
                        </p>
                    </CardContent>
                </Card>
            </div>
            <div className="relative md:w-[55%] w-full h-full">
                <Image
                    src="/hero-pic.png"
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
