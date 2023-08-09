"use client";

import Banner from "./components/banner";

const Page = () => {
    return (
        <div className="my-20 flex md:flex-row flex-col p-4 gap-16 w-full md:justify-between justify-center items-center">
            <Banner />
        </div>
    );
};

export default Page;
