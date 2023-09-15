import React, { useEffect, useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import ReviewForm from "./review-from";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";

import toast from "react-hot-toast";

const ReviewContainer = () => {
    const [bought, setBought] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const user = useUser()

    useEffect(() => {
          const fetchBoughtStatus = async () => {
            try {
              // Fetch the data from the API endpoint
              const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/product/${user?.user?.id}`);
              // Check if the response is ok
              if (response.ok) {
                // Parse the data as JSON and store it in the state
                const data = await response.json();
                setBought(data);
              }
            } catch (error) {
              // Display an error toast
              console.error(error);
            }
          };
          if (user?.isSignedIn)  fetchBoughtStatus();
         
    }, [user]);

    // Return the JSX element for the main page
    return bought ? (
        <>
            <Button
                onClick={() => setIsOpen(true)}
                className={cn("fixed bottom-8 right-8 z-10 md:text-2xl text-xl h-16 bg-indigo-600 rounded-3xl shadow-xl border-2 animate-pulse", isOpen && "hidden")}
                size="lg"
            >
                Write a review
            </Button>{" "}
            <Sheet open={isOpen} onOpenChange={() => setIsOpen(false)}>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Give us a review</SheetTitle>
                        <SheetDescription>
                            We appreciate your feedback. Please fill out the
                            form below and click submit when you're done.
                        </SheetDescription>
                    </SheetHeader>
                    <ReviewForm setIsOpen={setIsOpen}/>
                </SheetContent>
            </Sheet>
        </>
    ) : (
        <></>
    );
};

export default ReviewContainer;
