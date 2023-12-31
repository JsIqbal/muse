import Image from "next/image";

const Testimonial = ({ testimonial }) => {
    return (
        <div className="rounded-lg shadow max-w-[24rem] w-[90%] h-[18rem] p-10 bg-white text-gray-700 leading-snug flex flex-col justify-between animate-fade-in-down">
            <div className="-ml-4">
                <svg
                    className="w-8 opacity-25 text-indigo-500"
                    xmlns="http://www.w3.org/2000/svg"
                    shapeRendering="geometricPrecision"
                    textRendering="geometricPrecision"
                    imageRendering="optimizeQuality"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    viewBox="0 0 640 640"
                    fill="currentColor"
                >
                    <path d="M557.133 561.704H442.128c-44.256 0-80.458-36.19-80.458-80.446 0-165.58-42.32-347.485 160.656-399.418 91.95-23.516 115.915 77.753 18.119 84.745-59.647 4.276-71.293 42.804-73.147 101.068h92.269c44.256 0 80.458 36.201 80.458 80.458v130.702c0 45.591-37.3 82.89-82.891 82.89zm-358.032 0H84.096c-44.256 0-80.446-36.19-80.446-80.446 0-165.58-42.331-347.485 160.644-399.418 91.95-23.516 115.915 77.753 18.118 84.745-59.646 4.276-71.292 42.804-73.146 101.068h92.269c44.256 0 80.457 36.201 80.457 80.458v130.702c0 45.591-37.3 82.89-82.89 82.89z" />
                </svg>
            </div>
            <div className="mt-2">{testimonial.review}</div>
            <div>
                <div className="mx-auto w-full border border-gray-300 my-8"></div>
                <div className="flex items-center">
                    <div className="relative w-12 h-12 rounded-full border-2 border-indigo-400">
                        <Image
                            fill
                            alt="Image"
                            src={
                                testimonial.pic ||
                                "https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
                            }
                            objectFit="cover"
                            className="rounded-full border border-indigo-400"
                        />
                    </div>
                    <div className="ml-4">
                        <div className="font-bold">{testimonial.name}</div>
                        <div className="text-sm text-gray-600 mt-1">
                            {testimonial.role}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
