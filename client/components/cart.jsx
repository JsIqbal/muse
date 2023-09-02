"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ShoppingBagIcon } from "@/node_modules/lucide-react";
import useCart from "@/hooks/use-cart";

const Cart = () => {
    const cart = useCart();
    const router = useRouter();
    return (
        <Button
            variant="outline"
            onClick={() => router.push("/cart")}
            className="space-x-2 relative"
        >
            <ShoppingBagIcon />
            <span
                className=" h-max w-max font-semibold text-gray-800"
                onClick={() => {
                    cart.setCartBlinking(false);
                }}
            >
                Go to cart{" "}
                {cart.blink && (
                    <div className="absolute top-0 right-0">
                        <span
                            className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-blue-400 opacity-75"
                            style={{ animationDuration: "2s" }}
                        ></span>
                        <span className="absolute inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                    </div>
                )}
            </span>
        </Button>
    );
};

export default Cart;
