import { useEffect, useState } from "react";
import InfiniteTestimonials from "./components/infinite-scroling-div";
import TestimonialSkeletons from "./components/testimonial-skeletons";
import axios from "axios";

const Testimonials = () => {
    const [testimonials, setTesimonials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                // Send a GET request to the API endpoint
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/review`
                );

                if (response.status === 200) {
                    // Get the data from the response
                    const data = response.data;
                    setTesimonials(data.reviews);
                } else {
                    throw new Error(response.statusText);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);

    return (
        <div className="w-screen bg-slate-100 mb-16">
            <div className="flex flex-col gap-16 container py-16  text-gray-900">
                <div>
                    <h2 className="text-center text-gray-800 text-4xl lg:text-5xl font-bold leading-tight">
                        Testimonials
                    </h2>
                    <div className="my-4 mx-auto w-20 h-2  bg-indigo-500"></div>
                    <div className="text-center text-gray-700 font-light text-lg">
                        Here are what some of our amazing customers are saying
                        ...
                    </div>
                </div>
                {loading || testimonials?.length === 0 ? (
                    <TestimonialSkeletons />
                ) : (
                    <InfiniteTestimonials testimonials={testimonials} />
                )}
            </div>
        </div>
    );
};

export default Testimonials;
