"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const AdminPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    async function handleLogin(e) {
        console.log("Anything");
        console.log(e);
        e.preventDefault();

        if (!username || !password) return;

        const response = await fetch(
            `${process.env.NEXTSERVER_URL}/api/admins/login`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ password, username }),
            }
        );

        if (response.status === 200) {
            const { data } = await response.json();
            console.log(data);

            localStorage.setItem("adminToken", data.token);
            toast.success("Sccessfully logged in");

            router.push("/admin");
        } else {
            toast.error("Could not not login.");
        }
    }

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="bg-transparent border rounded-lg shadow-lg p-8 m-2 flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold">Login to Admin Portal</h1>
                <form
                    onSubmit={(e) => {
                        console.log("something");
                        handleLogin(e);
                    }}
                    className="flex flex-col gap-4 mt-10 w-full"
                >
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border rounded p-2 m-2 w-full"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border rounded p-2 m-2 w-full"
                    />
                    <Button
                        type="submit"
                        onClick={(e) => {
                            console.log("something");
                            handleLogin(e);
                        }}
                        className="bg-blue-500 text-white rounded p-2 m-2"
                    >
                        Login
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default AdminPage;
