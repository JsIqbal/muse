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
import Image from "next/image";

export function ReviewsTable() {
    const [reviews, setReviews] = useState([]);
    const [loadingReviews, setLoadingReviews] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Send a GET request to the API endpoint with Axios
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/review`,
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
                    const { reviews } = response.data;
                    setReviews(reviews);
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
        setLoadingReviews(false);
    }, []);

    return loadingReviews || !Array.isArray(reviews) ? (
        <LoadingSpinner />
    ) : (
        <Table>
            <TableCaption>
                {reviews.length === 0 && (
                    <h1 className="py-6 text-muted-foreground">
                        No reviews found
                    </h1>
                )}
            </TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-min">Pic</TableHead>
                    <TableHead className="w-min">Name</TableHead>
                    <TableHead className="w-min">Role</TableHead>
                    <TableHead className="w-max text-right ">Review</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {reviews.map((review) => (
                    <TableRow key={review.ID}>
                        <TableCell className="font-medium relative w-12 h-12 ">
                            <Image
                                fill
                                alt="Image"
                                src={
                                    review.pic ||
                                    "https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
                                }
                                objectFit="cover"
                                className="rounded-full border border-indigo-400 m-1"
                            />
                        </TableCell>
                        <TableCell className="font-medium">
                            {review.name}
                        </TableCell>
                        <TableCell className="w-max break-words">
                            {review.role}
                        </TableCell>
                        <TableCell className="text-right break-all">
                            {review.review}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default ReviewsTable;
