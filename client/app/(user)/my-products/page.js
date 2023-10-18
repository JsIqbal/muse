"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
import { saveAs } from "file-saver";
import Image from "next/image";
import Link from "next/link";
import Spinner from "@/components/spinner";

const BASE = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3004";

export default function Purchases() {
    const { user } = useUser();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // check if the user is defined
        if (!user?.id) return;

        // use async/await and try/catch to fetch the products from the API
        const fetchProducts = async () => {
            try {
                const response = await axios.get(
                    `${BASE}/api/purchases/product/${user.id}`
                );
                console.log("-------res data", response.data);
                setProducts(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                // set the loading state to false
                setLoading(false);
            }
        };

        // call the fetchProducts function
        fetchProducts();
    }, [user]);

    // a function to handle the download button click
    const handleDownload = (product) => {
        // download the product using file-saver
        saveAs(product.downloadUrl, product.fileName);
    };

    return (
        <div className="container mx-auto p-4">
            {loading ? (
                // show a loader while fetching the products
                <div className="flex justify-center items-center">
                    <Spinner size={16} />
                </div>
            ) : products.length > 0 ? (
                // show the products in a grid
                <>
                    <h1 className="text-2xl font-bold mb-4">Your purchases</h1>
                    <div className="grid grid-cols-3 gap-4">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="shadow-lg rounded-lg overflow-hidden"
                            >
                                <Image
                                    src={product.imageUrl}
                                    alt={product.title}
                                />
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold">
                                        {product.title}
                                    </h2>
                                    <p className="text-gray-600">
                                        {product.description}
                                    </p>
                                    <button
                                        onClick={() => handleDownload(product)}
                                        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                                    >
                                        Download
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                // show a message when no product is found
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
            )}
        </div>
    );
}
