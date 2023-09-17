"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
    Card,
    CardFooter,
    CardHeader,
    CardContent,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import axios from "axios";

const Page = () => {
    // Define the states for loading, error and data
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    // Define the useEffect hook to fetch the data from the API
    useEffect(() => {
        // Define an async function to fetch the data
        const fetchData = async () => {
            try {
                // // Use Axios with await to get the response
                // const response = await axios.get(`${process.env.SERVER_URL}/api/users/products`);
                // // Check if the response is successful
                // if (response.status === 200) {
                //     // Get the data from the response and set the data state
                //     const data = response.data;
                //     setData(data);
                // } else {
                //     // Handle errors with the appropriate message
                //     throw new Error(`Request failed with status ${response.status}`);
                // }

                // For demonstration purposes, we'll set some sample data here
                setData([
                    // {
                    //     id: 1,
                    //     name: "Next.js Pro",
                    //     description:
                    //         "The ultimate guide to building fast and scalable web applications with Next.js",
                    //     image: "https://files.stripe.com/links/MDB8YWNjdF8xTmR5ZGlIeWphTkNJM3JFfGZsX3Rlc3RfNVR5THV6UWVQMG9zdUlkS3g5MW9JQ2FZ00NAoHmUpY",
                    //     price: 49.99,
                    // },
                    // {
                    //     id: 2,
                    //     name: "Tailwind CSS Masterclass",
                    //     description:
                    //         "Learn how to design beautiful and responsive websites with Tailwind CSS",
                    //     image: "https://files.stripe.com/links/MDB8YWNjdF8xTmR5ZGlIeWphTkNJM3JFfGZsX3Rlc3RfNVR5THV6UWVQMG9zdUlkS3g5MW9JQ2FZ00NAoHmUpY",
                    //     price: 39.99,
                    // },
                    // {
                    //     id: 3,
                    //     name: "React Hooks Essentials",
                    //     description:
                    //         "A practical introduction to using React Hooks for state management and side effects",
                    //     image: "https://files.stripe.com/links/MDB8YWNjdF8xTmR5ZGlIeWphTkNJM3JFfGZsX3Rlc3RfNVR5THV6UWVQMG9zdUlkS3g5MW9JQ2FZ00NAoHmUpY",
                    //     price: 29.99,
                    // },
                ]);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container flex flex-col justify-center items-center mx-auto p-4">
            {loading && (
                <span
                    style={{ animationDuration: "3s" }}
                    className="w-16 h-16 border-[6px] border-dashed border-blue-700 rounded-full animate-spin"
                ></span>
            )}

            {!loading && (
                <div className="grid grid-cols-3 gap-4">
                    {data.length === 0 ? (
                        <div className="col-span-3 gap-3 flex flex-col text-center">
                            <p className="text-2xl font-semibold">
                                No software downloaded
                            </p>
                            <Link
                                href="/cart"
                                className="text-blue-600 hover:underline text-2xl"
                            >
                                Go to cart
                            </Link>
                        </div>
                    ) : (
                        data.map((product) => (
                            <Card key={product.id} className="shadow-lg">
                                <CardHeader className="relative w-16 h-16">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                    />
                                </CardHeader>
                                <CardContent>
                                    <CardTitle>{product.name}</CardTitle>
                                    <p>{product.description}</p>
                                    <CardFooter>
                                        <p className="text-lg font-bold">
                                            ${product.price}
                                        </p>
                                    </CardFooter>
                                </CardContent>
                            </Card>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default Page;
