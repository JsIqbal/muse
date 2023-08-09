"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Montserrat } from "next/font/google";
import { useState } from "react";

const montsserrat = Montserrat({
    weight: "700",
    subsets: ["latin"],
});

const Navbar = () => {
    const [position, setPosition] = useState("top");

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-gray-100 bg-opacity-93 shadow-md">
            <div className="flex justify-between  p-4 container">
                <Link
                    href="/"
                    className="flex items-center justify-center gap-4"
                >
                    <div className="relative w-16 h-8 ">
                        <Image fill alt="Logo" src="/icon.webp" />
                    </div>
                    <h1
                        className={cn(
                            "text-2xl font-bold",
                            montsserrat.className
                        )}
                    >
                        MUSE
                    </h1>
                </Link>
                <div className="flex gap-2 p-4">
                    <DropdownMenu className="">
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline">
                                Products <span className="ml-1">&#9660;</span>{" "}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>Products</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup
                                value={position}
                                onValueChange={setPosition}
                            >
                                <DropdownMenuRadioItem value="top">
                                    <Link href="/muse">muse</Link>
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="bottom">
                                    <Link href="/jet-pack">jet-pack</Link>
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="right">
                                    <Link href="/blackbeltprivecy">
                                        blackbeltprivecy
                                    </Link>
                                </DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Button className="bg-blue-700 ml-8">Contact us</Button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
