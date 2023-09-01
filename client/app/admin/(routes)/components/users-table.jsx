"use client";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import LoadingSpinner from "./loading";

export function UsersTable() {
    const [users, setUsers] = useState([]);
    const [loadingUsers, setLoadingUsers] = useState(true);
    const router = useRouter()

    useEffect(() => {
        
        const fetchData = async () => {
            const token = localStorage.getItem("adminToken");

            if (token) {
                try {
                    const response = await fetch(
                        `http://localhost:3004/api/admins/users`,
                        {
                            method: "GET",
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    );

                    if (response.status === 401) {
                        localStorage.removeItem("adminToken");

                        router.push("/admin/login")
                    }

                    const data = await response.json();
                    setUsers(data);
                    console.log(data);
                } catch (error) {
                    console.error("Error fetching data:", error);
                    toast.error(`Error fetching users: ${error} `);
                }
            }
        };

        fetchData();
        setLoadingUsers(false);
    }, []);

    return loadingUsers || !users ? (
        <LoadingSpinner />
    ) : (
        <Table >
            <TableCaption>
                {users?.length === 0
                    ? "No users found"
                    : "A list of your recent invoices."}
            </TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Email</TableHead>
                    <TableHead>First Name</TableHead>
                    <TableHead>Last Name</TableHead>
                    <TableHead className="text-right">UserId</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {users.map((user) => (
                    <TableRow key={user.user_id}>
                        <TableCell className="font-medium">
                            {user.email}
                        </TableCell>
                        <TableCell>{"Frist name"}</TableCell>
                        <TableCell>{"last name"}</TableCell>
                        <TableCell className="text-right">
                            {user.user_id}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default UsersTable;
