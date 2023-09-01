import UsersTable from "../components/users-table";

const UsersPage = () => {
    return (
        <div className="w-full h-full py-20">
            <div className="container border p-4 rounded-lg h-full shadow-md">
                <h1 className="text-3xl font-semibold text-center py-8">
                    Users Table
                </h1>
                <div className="flex justify-center items-center">
                    <UsersTable />
                </div>
            </div>
        </div>
    );
};

export default UsersPage;
