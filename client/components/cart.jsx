"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ShoppingBagIcon } from "@/node_modules/lucide-react";

const Cart = () => {
    const router = useRouter();
    return (
        <Button
            variant="outline"
            onClick={() => router.push("/cart")}
            className="space-x-2 relative"
        >
            <ShoppingBagIcon />
            <span className=" h-max w-max font-semibold text-slate-900">
                Go to cart{" "}
            </span>
        </Button>
    );
};

export default Cart;
