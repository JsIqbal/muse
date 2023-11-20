import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast from "react-hot-toast";
import axios from "axios";

// Define the schema for the form data
const schema = z.object({
    email: z.string().email().nonempty(),
    subject: z.string().min(4),
    content: z.string().min(10),
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
    // Define the onSubmit function
    const onSubmit = async (data) => {
        // Display a loading toast
        toast.loading("Sending email");

        // Define the API URL
        const API_URL = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/contact-us`;

        // Try to send the data to the API with Axios
        try {
            // Send a POST request with Axios and await for the response
            const response = await axios.post(API_URL, data);

            // Check if the response is successful (status 200)
            if (response.status === 200) {
                toast.dismiss();
                // Display a success toast
                toast.success("Your Email was sent successfully!");
            } else {
                // Throw an error with the status text
                throw new Error(response.statusText);
            }
        } catch (error) {
            toast.dismiss();
            // Display an error toast
            console.error(error);
            toast.error("An error occurred during sending the email");
        }
    };

    // Return the JSX for the form
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className=" bg-white rounded-lg space-y-6"
        >
            <h1 className="md:text-4xl text-3xl font-bold text-center mb-8">
                Contact us
            </h1>
            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                >
                    Your Email
                </label>
                <input
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
                    htmlFor="content"
                    className="block text-sm font-medium text-gray-700"
                >
                    Message
                </label>
                <textarea
                    id="content"
                    {...register("content")}
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
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700"
                >
                    Send Email
                </button>
            </div>
        </form>
    );
};

export default EmailForm;
