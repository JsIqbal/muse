import { Button } from "@/components/ui/button";

const About = () => {
    return (
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
                    Welcome to our software product selling website! We offer a
                    diverse range of cutting-edge software solutions designed to
                    enhance your development and automation experiences.
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
                        JBoss, Glassfish, and Tomcat Middleware Estates over JMX
                        using Python / Jython. With its user-friendly
                        Eclipse-based Jython Development IDE, you can streamline
                        your workflow and simplify server management.
                    </p>
                    <p className="text-gray-700 mt-2">
                        Explore its features including Infrastructure-as-Code,
                        Active Auditing Framework, and preset profiles for
                        Server Compliance, making Pega and Informatica
                        deployment a breeze.
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
                        providing powerful diagnostic capabilities to profile
                        and optimize your code.
                    </p>
                    <p className="text-gray-700 mt-2">
                        Simplify heap dumps, CPU and memory profiling, and
                        diagnose memory-related issues effortlessly.
                    </p>
                </div>
                <p className="text-gray-700 mt-4">
                    Choose innovation and efficiency with our software products
                    that redefine the way you develop, automate, and optimize
                    your projects.
                </p>
            </div>
        </div>
    );
};

export default About;
