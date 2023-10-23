import Testimonial from "./testimonial";

function InfiniteTestimonials({ testimonials= [] }) {
    return (
        <div className="w-full flex flex-wrap gap-6 justify-center items-center overflow-hidden px-4 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            {testimonials.slice(0,3).map((testimonial, index) => (
                <Testimonial
                    testimonial={testimonial}
                    key={index}
                    index={index + 1}
                />
            ))}
        </div>
    );
}

export default InfiniteTestimonials;
