"use client";

import RouteHeading from "../components/route-heading";
import routes from "../lib/routes";
import { UploadBox } from "./upload-box";

const UsersPage = () => {
    return (
        <div className="w-full h-full py-20 flex justify-center items-center">
            <div className="lg:mx-[14%] md:mx-10 mx-5 border p-4 rounded-lg h-full w-full shadow-md space-y-10">
                <RouteHeading route={routes[4]} />
                <div className="flex w-full">
                    <UploadBox />
                </div>
            </div>
        </div>
    );
};

export default UsersPage;
