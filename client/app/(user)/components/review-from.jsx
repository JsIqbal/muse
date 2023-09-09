import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast from "react-hot-toast";
import { useUser } from "@clerk/clerk-react";
import { SheetClose, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

// Define the schema for the review form
const reviewSchema = z.object({
    name: z.string().min(1),
    roles: z.string().min(1),
    review: z.string().min(50),
});

// Define the component for the review form
const ReviewForm = () => {
    // Use react-hook-form with zod resolver
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(reviewSchema),
    });

    // Get the user data from clerk useUser hook
    const user = useUser();

    // Define the submit handler
    const onSubmit = async (data) => {
        try {
            // // Send the data to the API endpoint
            // const response = await fetch("/api/users/review", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify(data),
            // });
            // // Check if the response is ok
            // if (response.ok) {
            //     // Close the sheet and display a success toast
            //     setOpen(false);
            //     toast.success("Thank you for the review");
            // } else {
            //     // Display an error toast
            //     toast.error("Something went wrong");
            // }
            toast.success("Thank you for the review")
        } catch (error) {
            // Display an error toast
            toast.error(error.message);
        }
    };

    // Return the JSX element for the form
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-6 py-8"
        >
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name">Name</Label>
                <input
                    id="name"
                    type="text"
                    value={user.fullName}
                    placeholder="Full Name"
                    {...register("name")}
                    className="border-2 rounded-md p-2"
                />
                {errors.name && (
                    <span className="text-xs text-red-500">
                        {errors.name.message?.replace('String', 'Name')}
                    </span>
                )}
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="roles">Role</Label>
                <input
                    className="border-2 rounded-md p-2"
                    id="roles"
                    type="text"
                    placeholder="e.g Software Engineer, Student"
                    {...register("roles")}
                />
                {errors.roles && (
                    <span className="text-xs text-red-500">
                        {errors.roles.message?.replace('String', 'Role')}
                    </span>
                )}
            </div>
            <div className="grid w-full gap-1.5">
                <Label htmlFor="review">Review</Label>
                <textarea
                    className="border-2 rounded-md p-2"
                    id="review"
                    rows={4}
                    {...register("review")}
                    placeholder="Minimum 50 characters"
                />
                {errors.review && (
                    <span className="text-xs text-red-500">
                        {errors.review.message?.replace('String', 'Review')}
                    </span>
                )}
            </div>
            <div className="flex justify-between gap-4 flex-wrap">
                <Button
                    type="submit"
                    className="px-4 py-2  text-white rounded-md"
                >
                    Submit
                </Button>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button className="" variant="outline">
                            Cancel
                        </Button>
                    </SheetClose>
                </SheetFooter>
            </div>
        </form>
    );
};

export default ReviewForm;
