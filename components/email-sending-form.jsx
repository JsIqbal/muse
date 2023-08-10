import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast from "react-hot-toast";
import { DialogClose } from "@radix-ui/react-dialog";

// Define the schema for the form data
const schema = z.object({
    email: z.string().email().nonempty(),
    subject: z.string().nonempty(),
    message: z.string().nonempty(),
});

// Define the component for the form
const EmailForm = () => {
    // Use the useForm hook with the zod resolver
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    // Define the onSubmit function
    const onSubmit = (data) => {
        // Save or console.log the data
        console.log(data);
        // Display a success toast
        toast.success("Email sent successfully!");
    };

    // Return the JSX for the form
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-96 p-8 bg-white rounded-lg space-y-6"
        >
            <h1 className="text-2xl font-bold text-center mb-4">Contact us</h1>
            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                >
                    Your Email
                </label>
                <input
                    type="email"
                    id="email"
                    {...register("email")}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.email && (
                    <p className="text-sm text-red-600">
                        {errors.email.message}
                    </p>
                )}
            </div>
            <div>
                <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                >
                    Subject
                </label>
                <input
                    type="text"
                    id="subject"
                    {...register("subject")}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.subject && (
                    <p className="text-sm text-red-600">
                        {errors.subject.message}
                    </p>
                )}
            </div>
            <div>
                <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                >
                    Message
                </label>
                <textarea
                    id="message"
                    {...register("message")}
                    rows={4}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                ></textarea>
                {errors.message && (
                    <p className="text-sm text-red-600">
                        {errors.message.message}
                    </p>
                )}
            </div>
            <div className="flex justify-center">
                <DialogClose>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700"
                    >
                        Send Email
                    </button>
                </DialogClose>
            </div>
        </form>
    );
};

export default EmailForm;
