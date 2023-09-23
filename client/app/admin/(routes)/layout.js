"use client";

import { Button } from "@/components/ui/button";
import MobileSidebar from "./components/mobile-sidebar";
import Sidebar from "./components/sidebar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import useLogout from "@/hooks/use-logout";

const DashboardLayout = ({ children }) => {
    const router = useRouter();
    const [loaded, setLoaded] = useState(false);

    const logout = useLogout();

    const handleLogout = async () => {
        await logout();
        router.push("/");
    };

    useEffect(() => {
        let token = Cookies.get("token");
        if (!token) return router.push("/admin/login");
        setLoaded(true);
    }, []);

    return (
        <div className="flex">
            {loaded && (
                <>
                    <div className="hidden h-full lg:flex lg:w-72 lg:flex-col lg:fixed lg:inset-y-0 z-[80] bg-gray-900">
                        <Sidebar />
                    </div>
                    <div className="flex flex-col h-full w-full lg:ps-72">
                        <div className="w-full flex justify-between items-center shadow-md border-b p-4">
                            <MobileSidebar />
                            <Button
                                onClick={handleLogout}
                                className="ms-auto font-semibold text-lg"
                                size="lg"
                            >
                                Log Out
                            </Button>
                        </div>
                        <div className="w-full h-full">{children}</div>
                    </div>
                </>
            )}
        </div>
    );
};

export default DashboardLayout;
