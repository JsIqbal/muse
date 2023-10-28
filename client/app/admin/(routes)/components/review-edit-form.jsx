import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";

import toast from "react-hot-toast";

// Define the schema for the form data
const schema = z.object({
  name: z.string(),
  role: z.string(),
  review: z.string(),
});

// Define the component for the form
const ReviewEditForm = ({ review }) => {
  // Use the useForm hook with the zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: review.name,
      role: review.role,
      review: review.review,
    },
  });

  // Define the onSubmit function
  const onSubmit = async (data) => {
    // Define the API URL
    const API_URL = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/review/${review.ID}`;

    // Try to send the data to the API with Axios
    try {
      // Send a PUT request with Axios and await for the response
      const response = await axios.put(
        API_URL,
        {
          name: data.name,
          role: data.role,
          review: data.review,
        },
        { withCredentials: true }
      );
      // Check if the response is successful (status 200 or 204)
      if (response.status === 200 || response.status === 204) {
        // Display a success toast
        toast.success("Review updated successfully!");
      } else {
        // Throw an error with the status text
        throw new Error(response.statusText);
      }
    } catch (error) {
      // Display an error toast
      console.error(error);
      toast.error("An error occurred during updating the review");
    }

    
  };

  // Return the JSX for the form
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" bg-white rounded-lg space-y-6"
    >
      <h1 className="md:text-4xl text-3xl font-bold text-center mb-8">
        Edit Review
      </h1>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          id="name"
          {...register("name")}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.name && (
          <p className="text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="role"
          className="block text-sm font-medium text-gray-700"
        >
          Role
        </label>
        <input
          id="role"
          {...register("role")}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.role && (
          <p className="text-sm text-red-600">{errors.role.message}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="review"
          className="block text-sm font-medium text-gray-700"
        >
          Review
        </label>
        <textarea
          id="review"
          {...register("review")}
          rows={4}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        ></textarea>
        {errors.review && (
          <p className="text-sm text-red-600">{errors.review.message}</p>
        )}
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700"
        >
          Update Review
        </button>
      </div>
    </form>
  );
};

export default ReviewEditForm;
