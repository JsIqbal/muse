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
                    <div className="flex pb-8 pt-4 bg-gray-100 bg-opacity-93">
                        <div className="w-2/3 pr-8">
                            <h1 className="text-4xl font-extrabold text-left text-blue-800 mb-6">
                                Simplify. Aggregate. Automate. Simplify.
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
                                        href="https://sourceforge.net/projects/jetpack"
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
                        <div className="w-1/3">
                            <iframe
                                width="100%"
                                height="400px"
                                src="https://www.youtube.com/embed/cLhAHzlv4Bo"
                                title="YouTube Video"
                                className="rounded-lg mt-10"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                ),
            },
            {
                value: "features",
                text: "features content is going to show here.",
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
