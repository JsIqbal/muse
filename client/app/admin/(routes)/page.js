"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "@/node_modules/lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import routes from "./lib/routes";
import RouteHeading from "./components/route-heading";

const DashboardPage = () => {
    const router = useRouter();

    return (
        <div className="h-full p-4 md:py-20 py-8 md:space-y-16 space-y-8">
            <div className=" space-y-3 flex flex-col justify-center items-center">
                <h1 className="text-center text-3xl md:text-4xl lg:5xl font-bold">
                    Musesoft Admin Portal
                </h1>
                <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
                    View the data of Musesoft
                </p>
            </div>
            <div className="lg:px-[14%] md:px-10 px-5  space-y-8 w-full">
                <RouteHeading route={routes[0]} />
                {routes.slice(1).map((route) => (
                    <Card
                        onClick={() => router.push(route.href)}
                        key={route.href}
                        className="p-4 border-black/5 flex items-center justify-between shadow-md hover:shadow-lg hover:bg-white/30 hover:scale-[101%] transition duration-150 cursor-pointer"
                    >
                        <div className="flex items-center gap-4">
                            <div
                                className={cn(
                                    "p-2 w-fit rounded-md",
                                    route.bgColor
                                )}
                            >
                                <route.icon
                                    className={cn("w-8 h-8", route.color)}
                                />
                            </div>
                            <p className="font-semibold text-xl">{route.label}</p>
                        </div>
                        <ArrowRight />
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default DashboardPage;
