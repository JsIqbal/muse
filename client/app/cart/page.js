"use client";

import { Separator } from "@/components/ui/separator";
import useCart from "@/hooks/use-cart";
import Link from "next/link";

import CartItem from "./components/cart-item";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const CartPage = () => {
    const cart = useCart();
    const auth = useAuth();
    const router = useRouter();

    function checkout() {
        if (cart.items.length === 0) return null;
        if (auth.isSignedIn) {
            // Handle checkout
        } else {
            router.push(`/sign-up`);
        }
    }

    return (
        <div className="container mt-44 max-w-4xl">
            <div className="flex flex-col w-full h-full p-4 ">
                <h1 className="md:text-4xl text-3xl font-bold font-sans text-center px-auto py-8">
                    Your Shopping Cart
                </h1>
                <Separator className="my-6" />
                <div className="flex flex-col w-full gap-y-4">
                    {cart.items.length !== 0 ? (
                        cart.items.map((item) => {
                            return <CartItem item={item} />;
                        })
                    ) : (
                        <p className="text-2xl text-center my-6">
                            No items in cart{" "}
                            <Link
                                href="/"
                                className="hover:underline text-blue-700 font-medium"
                            >
                                By products
                            </Link>
                        </p>
                    )}
                </div>

                <div className="flex justify-between w-full items-start my-10 text-xl font-semibold">
                    <div>
                        <h1>Subtotal: </h1>
                        <p className="text-muted-foreground">
                            Shipping and taxes will be calculated at checkout.
                        </p>
                    </div>
                    <h1>${cart.totalPrice()}</h1>
                </div>
                <Button
                    onClick={checkout}
                    variant={cart.items.length === 0 ? "disabled" : "default"}
                    className="bg-blue-600 w-full mx-auto font-semibold text-xl hover:bg-blue-700"
                    size="lg"
                >
                    Checkout
                </Button>
            </div>
        </div>
    );
};

export default CartPage;
