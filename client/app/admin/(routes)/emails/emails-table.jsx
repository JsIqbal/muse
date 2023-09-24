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

export function EmailsTable() {
    const [emails, setEmails] = useState([]);
    const [loadingEmails, setLoadingEmails] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Send a GET request to the API endpoint with Axios
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/admins/contact-us`,
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
                    const { emails } = response.data;
                    setEmails(emails);
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
        setLoadingEmails(false);
    }, []);

    return loadingEmails || !Array.isArray(emails) ? (
        <LoadingSpinner />
    ) : (
        <Table>
            <TableCaption>
                {emails.length === 0 && (
                    <h1 className="py-6 text-muted-foreground">
                        No Emails found
                    </h1>
                )}
            </TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-max">Email</TableHead>
                    <TableHead className="w-min">Subject</TableHead>
                    <TableHead className="w-max text-right ">
                        Message
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {emails.map((email) => (
                    <TableRow key={email.ID}>
                        <TableCell className="font-medium">
                            {email.email}
                        </TableCell>
                        <TableCell className="w-max break-words">
                            {email.subject}
                        </TableCell>
                        <TableCell className="text-right break-all">
                            {email.content}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default EmailsTable;
