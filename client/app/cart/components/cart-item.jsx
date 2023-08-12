"use client"

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import useCart from "@/hooks/use-cart";
import Image from "next/image";

const CartItem = ({ item }) => {
    const cart = useCart()

    return (
        <div key={item.id} className="flex flex-col items-center w-full gap-y-4">
            <div className="flex w-full justify-between  items-center py-4">
                <div className="flex items-center gap-x-4">
                    <div className="relative h-full aspect-square">
                        <Image src={item.image} fill alt={item.name} />
                    </div>
                    <div>
                        <p className="text-xl">{item.name}</p>
                    </div>
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
            </div>
            <Separator />
        </div>
    );
};

export default CartItem;
