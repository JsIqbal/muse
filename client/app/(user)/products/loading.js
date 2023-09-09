import Spinner from "@/components/spinner";

const CartLoading = () => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <Spinner size={16}/>
        </div>
    );
};

export default CartLoading;
