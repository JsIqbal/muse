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
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import LoadingSpinner from "../components/loading";
import axios from "axios";

export function UsersTable() {
    const [users, setUsers] = useState([]);
    const [loadingUsers, setLoadingUsers] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Send a GET request to the API endpoint with Axios
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/admins/users`,
                    {
                        withCredentials: true,
                    }
                );

                // Check if the response status is 401 (Unauthorized)
                if (response.status === 401) {
                    router.push("/admin/login");
                }

                // Check if the response is successful (status 200)
                if (response.status === 200) {
                    // Get the data from the response
                    const data = response.data;
                    setUsers(data);
                } else {
                    // Log and display an error message if the response is not OK
                    console.error(response.statusText);
                    toast.error(response.statusText);
                }
            } catch (error) {
                // Log any errors that occur during the process
                console.error(error);
            }
        };

        fetchData();
        setLoadingUsers(false);
    }, []);

    return loadingUsers || !Array.isArray(users) ? (
        <LoadingSpinner />
    ) : (
        <Table>
            <TableCaption>
                {users.length === 0 && (
                    <h1 className="py-6 text-muted-foreground">
                        No Users found
                    </h1>
                )}
            </TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Email</TableHead>
                    <TableHead className="w-[100px]">First Name</TableHead>
                    <TableHead className="w-[100px]">Last Name</TableHead>
                    <TableHead className="w-[100px] text-right">
                        UserId
                    </TableHead>
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
