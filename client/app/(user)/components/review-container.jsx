import React, { useEffect, useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import ReviewForm from "./review-from";
import { Button } from "@/components/ui/button";

const ReviewContainer = () => {
    const [bought, setBought] = useState(false);

    useEffect(() => {
        //   const fetchBoughtStatus = async () => {
        //     try {
        //       // Fetch the data from the API endpoint
        //       const response = await fetch("/api/didUserBoughtAnything");
        //       // Check if the response is ok
        //       if (response.ok) {
        //         // Parse the data as JSON and store it in the state
        //         const data = await response.json();
        //         setBought(data);
        //       } else {
        //         // Display an error toast
        //         toast.error("Something went wrong");
        //       }
        //     } catch (error) {
        //       // Display an error toast
        //       toast.error(error.message);
        //     }
        //   };
        //   fetchBoughtStatus();

        setBought(true);
    }, []);

    // Return the JSX element for the main page
    return bought ? (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="fixed bottom-8 right-8 z-10 text-2xl h-16 bg-indigo-600 rounded-3xl shadow-xl border-2 animate-bounce" size="lg" >
                    Give a review
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Give us a review</SheetTitle>
                    <SheetDescription>
                        We appreciate your feedback. Please fill out the form
                        below and click submit when you're done.
                    </SheetDescription>
                </SheetHeader>
                <ReviewForm />
                
            </SheetContent>
        </Sheet>
    ) : (
        <></>
    );
};

export default ReviewContainer;
