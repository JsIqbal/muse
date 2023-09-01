"use client";

import { useEffect } from "react";
import "@/app/globals.css"
import { redirect } from "next/navigation";

const AdminLayout = ({ children }) => {
    
    useEffect(() => {
        
        const token = localStorage.getItem("adminToken");
        if (token) return redirect("/admin");
    }, []);

    return <div>{children}</div>;
};

export default AdminLayout;
