"use client"

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ShoppingBagIcon } from "@/node_modules/lucide-react";

const Cart = () => {
    const router = useRouter();
    return (
        <div className="flex justify-center items-center ">
            <Button variant="outline" onClick={() => router.push("/cart")} className="space-x-2">
                <ShoppingBagIcon/>
                <span className="text-slate-900 font-semibold">Go to cart</span>
            </Button>
        </div>
    );
};

export default Cart;
