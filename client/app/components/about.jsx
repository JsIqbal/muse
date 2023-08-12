import { Button } from "@/components/ui/button";
import Link from "next/link";

const About = () => {
    return (
        <div className="container flex-grow h-auto rounded-lg shadow-xl p-10 bg-white">
            <h1 className="text-3xl font-bold mb-4">
                Software Solutions for the Future
            </h1>
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
            <div className="border rounded-lg p-4 mt-4">
                <h2 className="text-xl font-semibold">Our Featured Products</h2>
                <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2">
                    <div className="w-full md:w-1/2 lg:w-1/3">
                        <img
                            src="/icons/muse-icon.png"
                            alt="Muse logo"
                            className="w-full h-auto rounded-lg"
                            width={50}
                            height={50}
                        />
                        <h3 className="text-lg font-semibold mt-2">
                            Muse - Middleware Universal Scripting idE
                        </h3>
                        <p className="text-gray-700 text-sm">
                            Muse is a versatile and intuitive scripting tool
                            that allows you to create, edit, debug, and run
                            scripts in any language and environment. Muse
                            supports Python, Ruby, JavaScript, PHP, C#, Java,
                            and more. You can also integrate Muse with popular
                            frameworks and libraries such as Django, Rails,
                            React, Angular, .NET, Spring Boot, and more.
                        </p>
                        <Button
                            onClick={() => {
                                // redirect to Muse product page
                            }}
                            className="bg-blue-500 font-semibold mt-4 shadow-xl text-center"
                        >
                            Learn More
                        </Button>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3">
                        <img
                            src="[6](https://neilpatel.com/blog/how-to-write-the-perfect-about-page-that-drives-leads/)"
                            alt="JET Pack logo"
                            className="w-full h-auto rounded-lg"
                        />
                        <h3 className="text-lg font-semibold mt-2">
                            JET Pack - OpenJDK 13 / 14 / 16 / 18 / 19
                        </h3>
                        <p className="text-gray-700 text-sm">
                            JET Pack is a comprehensive and reliable Java
                            environment that provides you with the latest and
                            most stable versions of OpenJDK. JET Pack allows you
                            to develop, test, and deploy Java applications with
                            ease and confidence. JET Pack also includes a
                            variety of tools and features such as Maven, Gradle,
                            JUnit, SonarQube, JaCoCo, and more.
                        </p>
                        <Button
                            onClick={() => {
                                // redirect to JET Pack product page
                            }}
                            className="bg-blue-500 font-semibold mt-4 shadow-xl text-center"
                        >
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>

            <p className="text-gray-700 mt-4">
                Choose innovation and efficiency with our software products that
                redefine the way you develop, automate, and optimize your
                projects.
            </p>
            <Link href="/prodcuts">
                <Button
                    onClick={() => {
                        // redirect to product catalog page
                    }}
                    className="bg-blue-500 font-semibold mt-4 shadow-xl text-center w-max"
                >
                    Browse Our Products
                </Button>
            </Link>
        </div>
    );
};

export default About;
