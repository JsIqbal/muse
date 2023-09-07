"use client";

import { Separator } from "@/components/ui/separator";
import Link from "next/link";

import CartItem from "./components/cart-item";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useCart from "@/hooks/use-cart";

const CartPage = () => {
    const user = useUser();
    const cart = useCart();
    const router = useRouter();
    const [sureCheckout, setSureCheckout] = useState(false);
    const [checkoutURL, setCheckoutURL] = useState(null);
    const [loading, setLoading] = useState(false);

    async function checkout() {
        if (cart.items.length === 0 || loading) return null;
        if (user.isSignedIn) {
            if (sureCheckout && checkoutURL) {
                router.push(checkoutURL);
            } else {
                setLoading(true);
                // Create an options object with the method and body
                const options = {
                    method: "POST",
                    body: JSON.stringify({
                        items: cart.items,
                        userEmail: user.user.emailAddresses[0].emailAddress,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                };

                // Use the fetch function to send the request and get the response
                let data;
                try {
                    // Await for the response and check if it is ok
                    let res = await fetch("/api/stripe/createSession", options);
                    if (res.ok) {
                        // Parse the response as json and return it
                        data = await res.json();
                    } else {
                        // Throw an error with the status code and message
                        throw new Error(`${res.status}: ${res.statusText}`);
                    }
                } catch (error) {
                    // Catch any errors and log them to the console
                    console.error(error);
                }

                setCheckoutURL(data.session_url);
                setSureCheckout(true);
                setLoading(false);
            }
        } else {
            router.push(`/sign-up`);
        }
    }

    return (
        <div className="container mt-44 max-w-6xl flex lg:flex-row lg:items-start flex-col gap-6 justify-center items-center mb-10">
            <div className="border flex flex-col lg:w-[65%] w-full gap-6 rounded-lg shadow-lg p-6">
                <h1 className="md:text-4xl text-3xl font-bold font-sans text-center ">
                    Your Cart
                </h1>
                <Separator className="my-6" />
                <div className="flex flex-col w-full gap-y-4 overflow-auto">
                    {cart?.items?.length !== 0  ? (
                        cart.items.map((item) => {
                            return <CartItem item={item} key={item.id} />;
                        })
                    ) : (
                        <div className="text-2xl text-center my-6">
                            No items in cart{" "}
                            <Link
                                href="/"
                                className="hover:underline text-blue-700 font-medium"
                            >
                                By products
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            <div className="border flex flex-col lg:w-[35%] w-full gap-6 rounded-lg shadow-lg p-6">
                <div className="flex justify-between w-full items-start my-10 text-xl font-semibold">
                    <div>
                        <h1>Subtotal: </h1>
                        <p className="text-muted-foreground font-normal">
                            *Shipping and taxes will be calculated at checkout.
                        </p>
                    </div>
                    <h1>${cart.totalPrice()}</h1>
                </div>

                <Button
                    onClick={checkout}
                    variant={cart.items.length === 0 ? "disabled" : "default"}
                    className="bg-blue-600 w-full mx-auto font-semibold text-xl text-white hover:bg-blue-700 shadow-lg"
                    size="lg"
                >
                    {loading ? (
                        <span
                            style={{ animationDuration: "3s" }}
                            className="w-8 h-8 border-[3.7px] border-dashed rounded-full animate-spin"
                        ></span>
                    ) : sureCheckout ? (
                        "Confirm Purchase"
                    ) : (
                        "Download Now"
                    )}
                </Button>
            </div>
        </div>
    );
};

export default CartPage;
