"use client"

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const RouteHeading = ({ route }) => {
    const router = useRouter();
    const Icon = route.icon;

    return (
        <div
            onClick={() => router.push(route.href)}
            key={route.href}
            className="flex items-center justify-center  gap-6 cursor-pointer border p-3 my-4 w-min mx-auto rounded-lg shadow-sm hover:scale-[101.4%] transition duration-150"
        >
            <div className={cn("p-2 w-fit rounded-md", route.bgColor)}>
                <Icon className={cn("w-8 h-8", route.color)} />
            </div>
            <h1 className="font-bold text-gray-800 md:text-3xl text-2xl ">{route.label}</h1>
        </div>
    );
};

export default RouteHeading;
