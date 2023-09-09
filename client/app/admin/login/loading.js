import Spinner from "@/components/spinner";

const DashboardLoading = () => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <Spinner size={16}/>
        </div>
    );
};

export default DashboardLoading;
