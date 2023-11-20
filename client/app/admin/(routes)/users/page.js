"use client";

import UsersTable from "./users-table";
import routes from "../lib/routes";
import RouteHeading from "../components/route-heading";

const UsersPage = () => {
    return (
        <div className="w-full h-full py-20 flex justify-center items-center">
            <div className="lg:mx-[14%] md:mx-10 mx-5 border p-4 rounded-lg h-full w-full shadow-md ">
                <RouteHeading route={routes[1]} />
                <div className="flex w-full">
                    <UsersTable />
                </div>
            </div>
        </div>
    );
};

export default UsersPage;
