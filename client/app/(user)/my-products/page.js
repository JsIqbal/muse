"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
import { saveAs } from "file-saver";
import Link from "next/link";
import Spinner from "@/components/spinner";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

const BASE = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3004";

export default function Purchases() {
    const { user } = useUser();
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const [productData, setProductData] = useState();

    useEffect(() => {
        if (!user?.id) return;

        const fetchProducts = async () => {
            try {
                const response = await axios.get(
                    `${BASE}/api/purchases/product/${user.id}`,
                    { responseType: "blob" }
                );

                if (response.status === 404) {
                    setNotFound(true);
                }
                console.log("------------response", response);
                setProductData(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [user]);

    const handleDownload = () => {
        toast.loading("Your tools are being downloaded...");

        try {
            saveAs(productData, "Test Download 1");
            toast.dismiss();

            toast.success("Tools downloaded successfully!");
        } catch (err) {
            toast.dismiss();
            toast.error(err);
        }
    };

    return (
        <div className="h-max w-full flex justify-center items-center">
            {loading && (
                <div className="flex justify-center items-center">
                    <Spinner size={16} />
                </div>
            )}
            {notFound && (
                <div className="col-span-3 gap-3 flex flex-col text-center">
                    <p className="md:text-4xl text-3xl font-bold">
                        No software downloaded
                    </p>
                    <Link
                        href="/cart"
                        className="text-blue-600 md:text-3xl hover:underline"
                    >
                        Go to cart
                    </Link>
                </div>
            )}{" "}
            {!loading && !notFound && (
                <div className="flex flex-col gap-6 justify-center items-center px-12 py-8 rounded-lg shadow-lg sm:mx-0 mx-2 border">
                    <h1 className="md:text-4xl text-3xl font-semibold text-gray-800">
                        Your tools are ready!
                    </h1>
                    <Button
                        onClick={handleDownload}
                        className="bg-indigo-600 hover:bg-indigo-800 md:text-2xl text-xl md:p-6 p-4 font-semibold shadow-lg"
                    >
                        Download
                    </Button>
                    {/* <p className=" text-muted">Thanks for purchasing :)</p> */}
                </div>
            )}
        </div>
    );
}
