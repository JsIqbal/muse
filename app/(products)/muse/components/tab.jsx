import CommonTabs from "@/components/tabs";

const MuseTab = () => {
    const tabsData = {
        tabList: [
            { value: "overview", label: "overview" },
            { value: "features", label: "features" },
            { value: "benefits", label: "benefits" },
        ],
        tabContent: [
            {
                value: "overview",
                text: (
                    <div className="flex flex-wrap pb-8 pt-4 bg-gray-100 bg-opacity-93">
                        <div className="w-full md:w-2/3 pr-0 md:pr-8 mb-6 md:mb-0">
                            <h1 className="text-4xl font-extrabold text-left text-blue-800 mb-6">
                                Simplify | Aggregate | Automate | Simplify
                            </h1>
                            <ul className="list-disc pl-8 mb-6 text-gray-700">
                                <li>✨ Open Source - GPL3/EPL.</li>
                                <li>
                                    🚀 Leverage Python / Jython to automate:
                                    <ul className="list-disc pl-8 mt-2 text-gray-600">
                                        <li>
                                            Middlewares like WebSphere,
                                            WebLogic, JBoss, Glassfish, and
                                            Tomcat over JMX (SSL/non-SSL)
                                        </li>
                                        <li>
                                            Linux SSH with agent-less
                                            connections
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    🔥 Manage all 5 server types and Linux from
                                    one unified workspace.
                                </li>
                                <li>
                                    💡 Familiar Eclipse-based Jython Development
                                    IDE, ready to roll.
                                </li>
                                <li>
                                    🛠️ Streamlined 4-Click Installer. Works on
                                    Win x64, Linux WINE x64. Bundled JVM.
                                </li>
                                <li>
                                    🔧 Supports Java 8/9/10, Amazon Corretto,
                                    JETPack 13/14/16, IBM SDK.
                                </li>
                            </ul>
                            <p className="mb-6 text-blue-800">
                                <strong>
                                    Now with Enhanced Auditing & Compliance.
                                </strong>
                                <br />
                                Unveiling powerful JBoss, GlassFish, Tomcat, and
                                Linux Active Auditing Frameworks.
                                <br />
                                Quick-deploy Pega and Informatica with preset
                                server compliance profiles.
                            </p>
                            <ul className="list-disc pl-8 text-gray-700">
                                <li>
                                    📷 Python-based Configuration Snapshots for
                                    Tomcat and Glassfish 2
                                </li>
                                <li>
                                    🏗️ Transform infrastructure into code.
                                    Automate the automation.
                                </li>
                                <li>
                                    ⚙️ Embrace the Automation as-a Service
                                    Paradigm.
                                </li>
                                <li>
                                    🚀 Designed to run with the{" "}
                                    <a
                                        // href="https://sourceforge.net/projects/jetpack"
                                        href="#"
                                        className="text-blue-800 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        JETPack
                                    </a>{" "}
                                    platform.
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/3">
                            <div className="aspect-w-16 aspect-h-9">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/cLhAHzlv4Bo"
                                    title="YouTube Video"
                                    allowFullScreen
                                    className="rounded-lg mt-10"
                                    style={{ height: "400px" }}
                                ></iframe>
                            </div>
                        </div>
                    </div>
                ),
            },
            {
                value: "features",
                text: (
                    <div className="p-6 bg-gray-100 bg-opacity-93">
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-6 md:mb-0">
                                <h2 className="text-2xl font-bold text-blue-800 mb-4">
                                    Features
                                </h2>
                                <p className="text-gray-700 mb-6">
                                    Simplify | Aggregate | Automate | Simplify
                                </p>
                                <ul className="list-disc pl-6 md:pl-8 text-gray-700">
                                    <li className="mb-3 font-semibold">
                                        No deployed Agents{" "}
                                        <span className="font-normal">
                                            required
                                        </span>
                                    </li>
                                    <li className="mb-3 font-semibold">
                                        <span className="font-normal">
                                            Administer:
                                        </span>
                                    </li>
                                    <ul className="list-disc pl-6 md:pl-8 mt-2 text-gray-600">
                                        <li className="mb-2 font-semibold">
                                            Linux (bash)
                                        </li>
                                        <li className="mb-2 font-semibold">
                                            Jython - JMX
                                            <ul className="list-disc pl-6 md:pl-8 mt-2">
                                                <li className="mb-1 font-semibold">
                                                    WebSphere
                                                </li>
                                                <li className="mb-1 font-semibold">
                                                    WebLogic
                                                </li>
                                                <li className="mb-1 font-semibold">
                                                    JBoss
                                                </li>
                                                <li className="mb-1 font-semibold">
                                                    Glassfish
                                                </li>
                                                <li className="mb-1 font-semibold">
                                                    Tomcat
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <li className="mb-3 font-semibold">
                                        Jenkins - DevOps Pipeline
                                        <ul className="list-disc pl-6 md:pl-8 mt-2">
                                            <li className="mb-2 font-semibold">
                                                Ansible -{" "}
                                                <span className="font-normal">
                                                    Muse....
                                                </span>
                                            </li>
                                            <li className="mb-2 font-semibold">
                                                Muse -{" "}
                                                <span className="font-normal">
                                                    Ansible....
                                                </span>
                                            </li>
                                            <li className="mb-2 font-semibold">
                                                Muse -{" "}
                                                <span className="font-normal">
                                                    Linux SSH
                                                </span>
                                            </li>
                                            <li className="mb-2 font-semibold">
                                                Muse -{" "}
                                                <span className="font-normal">
                                                    Middleware
                                                </span>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* ...more items */}
                                </ul>
                            </div>
                            <div className="w-full md:w-1/2 pl-0 md:pl-8">
                                <ul className="list-disc pl-6 md:pl-8 text-gray-700">
                                    <li className="mb-3 font-semibold">
                                        Simultaneously{" "}
                                        <span className="font-normal">
                                            from ONE ide.
                                        </span>
                                    </li>
                                    <li className="mb-3 font-semibold">
                                        <span className="font-normal">
                                            Sample
                                        </span>{" "}
                                        Scripts for ALL 5 Servers INCLUDED...
                                    </li>
                                    <li className="mb-3 font-semibold">
                                        Live Connection to{" "}
                                        <span className="font-normal">
                                            GIT Repository.
                                        </span>{" "}
                                        Get updates in minutes...
                                    </li>
                                    <li className="mb-3 font-semibold">
                                        Apply{" "}
                                        <span className="font-normal">
                                            SSL Configuration
                                        </span>{" "}
                                        to unlimited servers in 2 clicks.
                                    </li>
                                    <li className="mb-3 font-semibold">
                                        Performance Tune your Multi-Server Pega
                                        Estate{" "}
                                        <span className="font-normal">
                                            in 2 clicks.
                                        </span>{" "}
                                        (JBoss)
                                    </li>
                                    <li className="mb-3 font-semibold">
                                        Upgrade{" "}
                                        <span className="font-normal">
                                            Vendor Applications
                                        </span>{" "}
                                        on unlimited servers{" "}
                                        <span className="font-normal">
                                            in 2 clicks.
                                        </span>
                                    </li>
                                    {/* ...more items */}
                                    <li className="mb-3 font-semibold">
                                        Secure{" "}
                                        <span className="font-normal">
                                            SSL/TLS Trust Stores
                                        </span>{" "}
                                        Provisioned.
                                    </li>
                                    <li className="mb-3 font-semibold">
                                        Schedule Automation{" "}
                                        <span className="font-normal">
                                            with Jenkins
                                        </span>
                                    </li>
                                    <ul className="list-disc pl-6 md:pl-8 mt-2">
                                        <li className="mb-1 font-semibold">
                                            Extract Eclipse Launch{" "}
                                            <span className="font-normal">
                                                Configuration
                                            </span>
                                        </li>
                                        <li className="mb-1 font-semibold">
                                            Use it directly{" "}
                                            <span className="font-normal">
                                                in a Jenkins
                                            </span>{" "}
                                            Build Job
                                        </li>
                                    </ul>
                                    <li className="mb-3 font-semibold">
                                        We invite{" "}
                                        <span className="font-normal">
                                            Vendors
                                        </span>{" "}
                                        and Systems Integrators with Complex
                                        Deployment Needs{" "}
                                        <span className="font-normal">
                                            to work
                                        </span>{" "}
                                        with us.
                                        <ul className="list-disc pl-6 md:pl-8 mt-2">
                                            <li className="mb-1 font-semibold">
                                                Oracle, IBM, RedHat, Apache and
                                                Eclipse Foundation pack{" "}
                                                <span className="font-normal">
                                                    Ultimate Middleware
                                                    Firepower
                                                </span>{" "}
                                                !!!
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ),
            },
            {
                value: "benefits",
                text: "benefits content is going to show here.",
            },
        ],
    };

    return (
        <div className="w-full my-20 bg-gray-100 bg-opacity-93">
            <CommonTabs tabsData={tabsData} />
        </div>
    );
};

export default MuseTab;
