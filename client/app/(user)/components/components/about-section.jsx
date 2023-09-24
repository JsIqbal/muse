const AboutSection = () => {
    return (
        <div className="flex flex-col gap-y-12 container items-center ">
            <h1 className="text-gray-800 text-4xl lg:text-5xl font-bold">
                About Us
            </h1>
            <div className="my-4 mx-auto w-20 h-2 -mt-6 bg-indigo-500"></div>
            <p className="text-gray-700">
                Welcome to Musesoft! We are a team of passionate and experienced
                developers who offer a diverse range of cutting-edge software
                solutions designed to enhance your development and automation
                experiences.
            </p>
            <p className="text-gray-700 mt-2">
                Whether you need a powerful scripting tool, a fast and reliable
                Java environment, or anything in between, we have the perfect
                software product for you. Our products are easy to use, highly
                customizable, and compatible with various platforms and
                frameworks.
            </p>

            <p className="text-gray-700 mt-4">
                Choose innovation and efficiency with our software products that
                redefine the way you develop, automate, and optimize your
                projects.
            </p>
        </div>
    );
};

export default AboutSection;
