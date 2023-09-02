import React, { useEffect, useRef } from "react";
import Testimonial from "./testimonial";
import TestimonialSkeletons from "./testimonial-skeletons";

function InfiniteTestimonials({ testimonials, loading }) {
    const testimonialsRef = useRef(null);

    useEffect(() => {
        let ul = testimonialsRef.current;
        ul.insertAdjacentHTML("afterend", ul.outerHTML);
        ul.nextSibling.setAttribute("aria-hidden", "true");
    }, []);

    return (
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul
                ref={testimonialsRef}
                className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            >
                {testimonials.map((testimonial, index) => (
                    <Testimonial testimonial={testimonial} key={index} />
                ))}
            </ul>
        </div>
    );
}

export default InfiniteTestimonials;
