"use client";

import Hero from "@/app/components/hero";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
    function downloadMuse() {
        return null;
    }

    function downloadJETPack() {
        return null;
    }

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
        <div className="flex flex-col gap-y-10">
            <div className="flex-grow container">
                <Hero />
            </div>
            <div className="curvey-top  flex flex-col gap-y-16 justify-center items-center w-screen h-auto flex-grow bg-[#F2F6F9] pt-32 pb-20 px-10">
                <Button
                    id="move"
                    onClick={() => {
                        const section = document.querySelector("#move");
                        section.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="hidden lg:block bg-blue-500 font-semibold relative bottom-10 shadow-xl text-center"
                >
                    Learn More
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-arrow-down text-white relative top-4 left-6"
                    >
                        <path d="M12 5v14" />
                        <path d="m19 12-7 7-7-7" />
                    </svg>
                </Button>

                <div className="container flex-grow h-auto rounded-lg shadow-xl p-10 bg-white">
                    <h2 className="text-2xl font-bold mb-4">About Us</h2>
                    <p className="text-gray-700">
                        Welcome to our software product selling website! We
                        offer a diverse range of cutting-edge software solutions
                        designed to enhance your development and automation
                        experiences.
                    </p>
                    <p className="text-gray-700 mt-2">
                        Discover our featured products:
                    </p>
                    <div className="border rounded-lg p-4 mt-4">
                        <h3 className="text-lg font-semibold">
                            Muse: Middleware Universal Scripting idE
                        </h3>
                        <p className="text-gray-700 mt-2">
                            Muse empowers you to automate WebSphere, WebLogic,
                            JBoss, Glassfish, and Tomcat Middleware Estates over
                            JMX using Python / Jython. With its user-friendly
                            Eclipse-based Jython Development IDE, you can
                            streamline your workflow and simplify server
                            management.
                        </p>
                        <p className="text-gray-700 mt-2">
                            Explore its features including
                            Infrastructure-as-Code, Active Auditing Framework,
                            and preset profiles for Server Compliance, making
                            Pega and Informatica deployment a breeze.
                        </p>
                    </div>
                    <div className="border rounded-lg p-4 mt-4">
                        <h3 className="text-lg font-semibold">
                            JET Pack -OpenJDK 13 / 14 / 16 / 18 / 19
                        </h3>
                        <p className="text-gray-700 mt-2">
                            JET Pack offers essential tools for Java developers,
                            encompassing OpenSource JDKs from Java 13 to 19. It
                            includes Visual VM, JConsole, and MissionControl,
                            providing powerful diagnostic capabilities to
                            profile and optimize your code.
                        </p>
                        <p className="text-gray-700 mt-2">
                            Simplify heap dumps, CPU and memory profiling, and
                            diagnose memory-related issues effortlessly.
                        </p>
                    </div>
                    <p className="text-gray-700 mt-4">
                        Choose innovation and efficiency with our software
                        products that redefine the way you develop, automate,
                        and optimize your projects.
                    </p>
                </div>
            </div>
            <div className="w-screen  bg-white">
                <div className="flex lg:flex-row flex-col justify-center items-center py-10 px-6 md:px-10 lg:px-[7%] xl:px-[10%] 2xl:px-[20%] flex-grow">
                    <div className="lg:w-[50%] w-full flex flex-col justify-center items-start gap-y-8">
                        <div className="flex flex-col gap-y-4">
                            <h1 className="text-3xl font-extrabold text-gray-900">
                                Muse: Middleware Universal <br /> Scripting idE
                            </h1>
                            <p className="text-lg">
                                Automate Middleware Management with
                                Python/Jython. Target WebSphere, WebLogic,
                                JBoss, Glassfish, and Tomcat over JMX and Linux
                                SSH.
                            </p>

                            <div className="mt-8 space-y-6">
                                <div className="text-[1rem] text-gray-700">
                                    <h2 className="font-semibold">Features:</h2>

                                    <div className="mt-2 space-y-2">
                                        <p className="flex items-start">
                                            <svg
                                                className="flex-shrink-0 h-4 w-4 text-green-500"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            Simplify, Aggregate, Automate...
                                        </p>
                                        <p className="ml-5">
                                            Manage Linux, WebSphere, WebLogic,
                                            JBoss, Glassfish, Tomcat through JMX
                                            and Linux SSH without agents.
                                        </p>
                                        <p className="flex items-start">
                                            <svg
                                                className="flex-shrink-0 h-4 w-4 text-green-500"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            Sample Scripts Included
                                        </p>
                                        <p className="ml-5">
                                            Access GIT Repository, apply SSL
                                            Configuration in clicks. Performance
                                            Tune Pega (JBoss), Upgrade Vendor
                                            Apps, Build WebLogic Domains
                                            quickly.
                                        </p>
                                    </div>
                                </div>

                                <div className="text-lg text-gray-700">
                                    <p className="mt-4 flex gap-x-4">
                                        <Button
                                            className="bg-blue-500"
                                            onClick={downloadMuse}
                                        >
                                            Download now
                                        </Button>

                                        <Link href="/muse">
                                            <Button variant="outline">
                                                Learn More{" "}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    className="lucide lucide-arrow-right ml-3"
                                                >
                                                    <path d="M5 12h14" />
                                                    <path d="m12 5 7 7-7 7" />
                                                </svg>
                                            </Button>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-[50%] w-max md:p-[7%] p-[9%]">
                        <div className="relative rounded-md shadow-lg">
                            <Image
                                src="/dummy-pic-1.PNG"
                                width={450}
                                height={450}
                                alt="demo picture"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-screen  bg-[#F2F6F9]">
                <div className="flex lg:flex-row flex-col justify-center items-center py-10 px-6 md:px-10 lg:px-[7%] xl:px-[10%] 2xl:px-[20%] flex-grow">
                    <div className="lg:w-[50%] w-max md:p-[7%] p-[9%]">
                        <div className="relative rounded-md shadow-lg">
                            <Image
                                src="/dummy-pic-1.PNG"
                                width={450}
                                height={450}
                                alt="demo picture"
                            />
                        </div>
                    </div>
                    <div className="lg:w-[50%] w-full flex flex-col justify-center items-start gap-y-8">
                        <div className="flex flex-col gap-y-4">
                            <h1 className="text-3xl font-extrabold text-gray-900">
                                JETPack - Empowering Java Development and
                                Diagnostics:
                            </h1>
                            <p className="text-lg">
                                Elevate your Java development with JETPack.
                                Streamline workflow, identify bottlenecks, and
                                optimize performance. Experience Java at its
                                best.
                            </p>

                            <div className="mt-8 space-y-6">
                                <div className="text-[1rem] text-gray-700">
                                    <h2 className="font-semibold">Features:</h2>

                                    <div className="mt-2 space-y-2">
                                        <div className="flex items-start">
                                            <svg
                                                className="flex-shrink-0 h-4 w-4 text-green-500"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <p className="ml-1">
                                                OpenSource Java JDK Support:
                                                JETPack integrates with Java
                                                JDKs 13-19, empowering
                                                developers to leverage
                                                open-source Java advancements.
                                            </p>
                                        </div>

                                        <div className="flex items-start">
                                            <svg
                                                className="flex-shrink-0 h-4 w-4 text-green-500"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <p className="ml-1">
                                                Efficient Diagnostics: Tools
                                                like Visual VM, JConsole, and
                                                MissionControl offer real-time
                                                insights into memory usage, CPU
                                                performance, and smarter
                                                decision-making.
                                            </p>
                                        </div>

                                        <div className="flex items-start">
                                            <svg
                                                className="flex-shrink-0 h-4 w-4 text-green-500"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <p className="ml-1">
                                                Precise Performance Boost:
                                                Diagnose memory leaks, manage
                                                heap dumps, and profile CPU and
                                                memory usage with precision.
                                                Enhance efficiency and
                                                application behavior over time.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-lg text-gray-700">
                                    <p className="mt-4 flex gap-x-4">
                                        <Button
                                            className="bg-blue-500"
                                            onClick={downloadJETPack}
                                        >
                                            Download now
                                        </Button>

                                        <Link href="/jet-pack">
                                            <Button variant="outline">
                                                Learn More{" "}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    className="lucide lucide-arrow-right ml-3"
                                                >
                                                    <path d="M5 12h14" />
                                                    <path d="m12 5 7 7-7 7" />
                                                </svg>
                                            </Button>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-screen  bg-white container space-y-20 pt-16 pb-20 justify-center">
                <h1 className="text-3xl xl:text-4xl text-muted-foreground  text-center">
                    What our customers say about us
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {testimonials().map((testimonial, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle>{testimonial.name}</CardTitle>
                                <CardDescription>
                                    {testimonial.role}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>{testimonial.review}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
