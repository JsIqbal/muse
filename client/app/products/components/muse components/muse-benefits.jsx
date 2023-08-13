const Benefit = () => {
    return (
        <div className="mt-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-800">Benefits</h3>
            <div className="flex flex-wrap mt-4">
                <div className="w-full md:w-1/2">
                    <ul className="list-disc pl-6 text-gray-700">
                        <li>
                            Open Source - <strong>GPL3/EPL licensed.</strong>
                        </li>
                        <li>
                            Effortless <strong>Automation:</strong>
                        </li>
                        <ul className="list-disc pl-6 mt-2">
                            <li>
                                Automate{" "}
                                <strong>
                                    WebSphere, WebLogic, JBoss, Glassfish, and
                                    Tomcat Middleware Estates
                                </strong>{" "}
                                over JMX (SSL/non-SSL).
                            </li>
                            <li>
                                Streamline <strong>Linux SSH</strong> without
                                requiring agents.
                            </li>
                        </ul>
                        <li>
                            Unified <strong>Workspace:</strong>
                        </li>
                        <ul className="list-disc pl-6 mt-2">
                            <li>
                                Target all <strong>5 servers</strong> and{" "}
                                <strong>Linux</strong> from a single workspace.
                            </li>
                            <li>
                                Benefit from a familiar{" "}
                                <strong>
                                    Eclipse-based Jython Development IDE.
                                </strong>
                            </li>
                        </ul>
                        <li>
                            Quick and Easy <strong>Setup:</strong>
                        </li>
                        <ul className="list-disc pl-6 mt-2">
                            <li>
                                Install effortlessly with a{" "}
                                <strong>4-click installer.</strong>
                            </li>
                            <li>
                                Compatibility with{" "}
                                <strong>
                                    Java 8/9/10, Amazon Corretto,
                                    JETPack13/14/16, IBM SDK.
                                </strong>
                            </li>
                        </ul>
                        <li>
                            Enhanced <strong>Auditing & Compliance:</strong>
                        </li>
                        <ul className="list-disc pl-6 mt-2">
                            <li>
                                Utilize powerful{" "}
                                <strong>
                                    JBoss/GlassFish/Tomcat/Linux Active Auditing
                                    Framework.
                                </strong>
                            </li>
                            <li>
                                Deploy <strong>Pega and Informatica</strong>{" "}
                                with preset server compliance profiles.
                            </li>
                        </ul>
                        {/* ...and more benefits */}
                    </ul>
                </div>
                <div className="w-full md:w-1/2">
                    <ul className="list-disc pl-6 text-gray-700">
                        <li>
                            <strong>
                                Python-based Configuration Snapshots
                            </strong>{" "}
                            for <strong>Tomcat and Glassfish.</strong>
                        </li>
                        <li>
                            <strong>Infrastructure-as-Code:</strong>
                        </li>
                        <ul className="list-disc pl-6 mt-2">
                            <li>
                                Transform infrastructure into{" "}
                                <strong>code.</strong>
                            </li>
                            <li>
                                Automate the{" "}
                                <strong>automation process.</strong>
                            </li>
                        </ul>
                        <li>
                            <strong>Automation-as-a-Service:</strong>
                        </li>
                        <ul className="list-disc pl-6 mt-2">
                            <li>
                                Embrace the concept of{" "}
                                <strong>Automation as-a Service.</strong>
                            </li>
                            <li>
                                Designed to run on the{" "}
                                <strong>JETPack platform.</strong>
                            </li>
                        </ul>
                        <li>
                            <strong>Streamlined Management:</strong>
                        </li>
                        <ul className="list-disc pl-6 mt-2">
                            <li>
                                Reduce complexity of{" "}
                                <strong>deployments and change control.</strong>
                            </li>
                            <li>
                                Unified administration point for{" "}
                                <strong>
                                    server farms with multiple vendors.
                                </strong>
                            </li>
                        </ul>
                        <li>
                            <strong>Vendor Support:</strong>
                        </li>
                        <ul className="list-disc pl-6 mt-2">
                            <li>
                                Develop{" "}
                                <strong>
                                    Jython Scriptlets and access the Dynatrace
                                    API
                                </strong>{" "}
                                with <strong>Dynatrace support.</strong>
                            </li>
                            <li>
                                Work efficiently with{" "}
                                <strong>
                                    complex JEE Infrastructure and Software.
                                </strong>
                            </li>
                            <li>
                                Vendor support for{" "}
                                <strong>
                                    RedHat (JBoss), Oracle (SOA Suite,
                                    WebLogic), IBM (WebSphere), Pega Systems,
                                    Informatica,
                                </strong>{" "}
                                and more.
                            </li>
                        </ul>
                        {/* ...and more benefits */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Benefit;
