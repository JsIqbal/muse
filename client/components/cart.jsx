import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const Cart = () => {
    const router = useRouter();
    return (
        <div className="flex justify-center items-center ">
            <Button variant="outline" onClick={() => router.push("/cart")} className="space-x-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-shopping-bag "
                >
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                    <path d="M3 6h18" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>{" "}
                <span className="text-slate-900 font-semibold">Go to cart</span>
            </Button>
        </div>
    );
};

export default Cart;
