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

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { Montserrat } from "next/font/google";
import { useState } from "react";
import EmailForm from "./email-sending-form";

const montsserrat = Montserrat({
    weight: "700",
    subsets: ["latin"],
});

const Navbar = () => {
    const [position, setPosition] = useState("top");

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-gray-100 bg-opacity-93 shadow-md border-b-[1] border-slate-500">
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
                            "text-3xl text-blue-600",
                            montsserrat.className
                        )}
                    >
                        Nubinet
                    </h1>
                </Link>
                <div className="flex gap-2 p-4">
                    <DropdownMenu className="">
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="shadow-lg">
                                Products{" "}
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
                                    className="ml-3 mt- lucide lucide-chevron-down"
                                >
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
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
                                    <Link className="w-full" href="/muse">
                                        muse
                                    </Link>
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="bottom">
                                    <Link className="w-full" href="/jet-pack">
                                        jet-pack
                                    </Link>
                                </DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="bg-blue-700 ml-8 shadow-xl">
                                Contact us
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <EmailForm />
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    );
};

export default Navbar;