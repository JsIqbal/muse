"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import useCart from "@/hooks/use-cart";
import Image from "next/image";
import Link from "next/link";

const CartItem = ({ item }) => {
    const cart = useCart();

    return (
        <div className="flex flex-col items-center w-full gap-y-4">
            <Link href="/products" className="flex w-full justify-between items-center p-4  transition-all duration-150 rounded-md hover:shadow-lg border">
                <div className="flex items-center gap-x-4">
                    <div className="relative h-16 w-16 aspect-square">
                        <Image
                            src={item.images[0]}
                            fill
                            alt={item.name}
                        />
                    </div>

                    <p className="text-xl font-semibold">{item.name}</p>
                </div>
                <div className="flex flex-col justify-between itmes-start font-semibold h-full gap-y-6">
                    <p className="text-end">${item.price.dollar}</p>
                    <Button
                        variant="outline"
                        className="text-blue-700  hover:text-blue-900"
                        onClick={() => {
                            cart.removeItem(item.id);
                        }}
                    >
                        Remove
                    </Button>
                </div>
            </Link>
            <Separator />
        </div>
    );
};

export default CartItem;
