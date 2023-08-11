import CommonCard from "@/components/card";

const Testimonials = () => {
    // just for template
    const testimonials = () => {
        return [
            {
                name: "John Doe",
                role: "Software Engineer",
                review: "I have been using these software products for a while now, and I must say they have significantly improved my development workflow. The automation capabilities are outstanding, and the Eclipse-based IDE is a real game-changer. Highly recommended!",
            },
            {
                name: "Jane Smith",
                role: "Developer",
                review: "As a developer, I'm always looking for tools that can boost my productivity. These software products have exceeded my expectations. The Middleware Universal Scripting idE is a masterpiece, making server management a breeze. The JET Pack with OpenJDK versions is a cherry on top!",
            },
            {
                name: "Sam Johnson",
                role: "Student",
                review: "Being a student aspiring to become a developer, these products have been invaluable in my learning journey. The JET Pack has helped me explore different Java versions, and the Middleware Universal Scripting idE has given me hands-on experience with server automation. Truly impressive!",
            },
        ];
    };

    return (
        <div className="w-screen  bg-white container space-y-20 pt-16 pb-20 justify-center">
            <h1 className="text-3xl xl:text-4xl text-muted-foreground  text-center">
                What our customers say about us
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {testimonials().map((testimonial, index) => (
                    <CommonCard
                        title={testimonial.name}
                        desc={testimonial.role}
                        element={testimonial.review}
                    />
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
