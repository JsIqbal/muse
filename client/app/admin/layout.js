"use client";

import "@/app/globals.css";
import { ToastProvider } from "@/providers/toast-provider";

const AdminLayout = ({ children }) => {
    return (
        <html>
            <head>
                <title>Admin Portal | Musesoft</title>
            </head>
            <body className="w-screen h-screen p-0 m-0">
                {children}
                <ToastProvider />
            </body>
        </html>
    );
};

export default AdminLayout;
