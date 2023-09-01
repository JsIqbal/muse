"use client";

import { Button } from "@/components/ui/button";
import MobileSidebar from "./components/mobile-sidebar";
import Sidebar from "./components/sidebar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }) => {
    const router = useRouter();
    const [loaded, setLoaded] = useState(false);

    function handleLogout() {
        localStorage.removeItem("adminToken");
        router.push("/");
    }

    useEffect(() => {
        let token = localStorage.getItem("adminToken");
        if (!token) return router.push("/admin/login");
        setLoaded(true);
    }, []);

    return (
        <html>
            <head>
                <title>Musesoft Admin Portal</title>
            </head>
            <body className="w-screen h-screen p-0 m-0 flex">
                {loaded && (
                    <>
                        <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
                            <Sidebar />
                        </div>
                        <div className="flex flex-col h-full w-full md:ps-72">
                            <div className="w-full flex justify-between items-center shadow-lg p-4">
                                <MobileSidebar />
                                <Button
                                    onClick={handleLogout}
                                    className="ms-auto"
                                >
                                    Logout
                                </Button>
                            </div>
                            <div className="w-full h-full">{children}</div>
                        </div>
                    </>
                )}
            </body>
        </html>
    );
};

export default DashboardLayout;
