import EmailsTable from "./emails-table";

const UsersPage = () => {
    return (
        <div className="w-full h-full py-20 flex justify-center items-center">
            <div className="xl:w-[78%] md:w-[90%] w-[95%] border p-4 rounded-lg h-full shadow-md md:mx-none mx-6">
                <h1 className="text-3xl font-semibold text-center py-8">
                    Emails Table
                </h1>
                <div className="flex justify-center items-center">
                    <EmailsTable />
                </div>
            </div>
        </div>
    );
};

export default UsersPage;
