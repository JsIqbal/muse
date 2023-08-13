"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { Montserrat } from "next/font/google";
import EmailForm from "./email-sending-form";
import { ClerkLoaded, ClerkLoading, UserButton, useAuth } from "@clerk/nextjs";
import { Skeleton } from "./ui/skeleton";
import Cart from "./cart";

const montsserrat = Montserrat({
    weight: "700",
    subsets: ["latin"],
});

const Navbar = () => {
    const { isSignedIn } = useAuth();

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-gray-100 bg-opacity-93 shadow-md border-b-[1] border-slate-500">
            <div className="flex justify-between  p-4 container">
                <Link
                    href="/"
                    className="flex items-center justify-center gap-4"
                >
                    <div className="relative w-16 h-8 ">
                        <Image fill alt="Logo" src="/icons/muse-icon.png" />
                    </div>
                    <h1
                        className={cn(
                            "text-3xl text-blue-600",
                            montsserrat.className
                        )}
                    >
                        Musesoft
                    </h1>
                </Link>

                <div className="flex gap-x-4">
                    <Link href="/products">
                        <Button variant="outline" className="shadow-lg w-max">
                            Our Products
                        </Button>
                    </Link>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className=" shadow-xl" variant="outline">
                                Contact us
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <EmailForm />
                        </DialogContent>
                    </Dialog>

                    <div className="flex gap-x-8">
                        <Cart />

                        {isSignedIn ? (
                            <div className="flex justify-center items-center">
                                <ClerkLoading>
                                    <Skeleton className="h-10 w-10 rounded-full" />
                                </ClerkLoading>
                                <ClerkLoaded>
                                    <UserButton
                                        className="h-10 w-10"
                                        afterSignOutUrl="/"
                                    />
                                </ClerkLoaded>
                            </div>
                        ) : (
                            <Link href="/sign-up">
                                <Button className="bg-blue-600 w-max">
                                    Sign up
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
