import { useEffect, useState } from "react";
import InfiniteTestimonials from "./components/infinite-scroling-div";

const Testimonials = () => {
    const [testimonials, setTesimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await fetch(
                //     `${process.env.SERVER_URL}/api/users/products`
                // );

                // if (response.ok) {
                //     const data = await response.json();
                //     console.log(data);
                //     setTesimonials(data);
                // } else {
                //     throw new Error(response.statusText);
                // }
                setTesimonials([
                    {
                        name: "John Doe",
                        roles: "Software Engineer",
                        pic: "https://avatars0.githubusercontent.com/u/810438?s=100",
                        review: "I have been using these software products for a while now, and I must say they have significantly improved my development workflow.",
                    },
                    {
                        name: "John Doe",
                        roles: "Software Engineer",
                        pic: "https://avatars0.githubusercontent.com/u/810438?s=100",
                        review: "I have been using these software products for a while now, and I must say they have significantly improved my development workflow.",
                    },
                    {
                        name: "John Doe",
                        roles: "Software Engineer",
                        pic: "https://avatars0.githubusercontent.com/u/810438?s=100",
                        review: "I have been using these software products for a while now, and I must say they have significantly improved my development workflow.",
                    },
                    {
                        name: "John Doe",
                        roles: "Software Engineer",
                        pic: "https://avatars0.githubusercontent.com/u/810438?s=100",
                        review: "I have been using these software products for a while now, and I must say they have significantly improved my development workflow.",
                    },
                    {
                        name: "John Doe",
                        roles: "Software Engineer",
                        pic: "https://avatars0.githubusercontent.com/u/810438?s=100",
                        review: "I have been using these software products for a while now, and I must say they have significantly improved my development workflow.",
                    },
                ]);
            } catch (error) {
                console.log(error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="w-screen bg-slate-100 mb-16">
            <div className="flex flex-col gap-6 container py-16  text-gray-900">
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
                <InfiniteTestimonials testimonials={testimonials} loading={loading}/>
            </div>
        </div>
    );
};

export default Testimonials;
