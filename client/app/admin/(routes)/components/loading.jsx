import Spinner from "@/components/spinner";

const LoadingSpinner = () => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <Spinner size={12}/>
        </div>
    );
};

export default LoadingSpinner;
