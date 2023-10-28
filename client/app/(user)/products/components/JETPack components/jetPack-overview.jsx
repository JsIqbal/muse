const Overview = () => {
  return (
    <div className="flex flex-wrap pb-8 pt-4 bg-gray-100 bg-opacity-93">
      <div className="w-full md:w-2/3 pr-0 md:pr-8 mb-6 md:mb-0">
        <h1 className="text-4xl font-bold text-left text-gray-800 mb-6">
          JET Pack -OpenJDK 13 / 14 / 16 / 18 / 19
        </h1>
        <ul className="list-disc pl-8 mb-6 text-gray-700">
          <li>
            Java Essential Tools, JDK13-19 , JConsole, VisualVM, MissionControl
          </li>
          <li>All supplied working out of the box.</li>
          <li>
            Compatible with Muse :{" "}
            <a
              href="https://sourceforge.net/projects/museproject/"
              className="text-blue-800 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://sourceforge.net/projects/museproject/
            </a>
          </li>
          <li>Take and Diagnose Heap Dumps</li>
          <li>CPU and Memory Profile your code</li>
          <li>
            Graph Heap and CPU usage over time -setting thresholds and triggers
          </li>
          <li>Diagnose Out of Memory Errors</li>
          <li>Diagnose Memory Leaks, down to method and object</li>
        </ul>
        <p className="mb-6 text-blue-800">
          <strong>Now with Enhanced Auditing & Compliance.</strong>
          <br />
          Unveiling powerful JBoss, GlassFish, Tomcat, and Linux Active Auditing
          Frameworks.
          <br />
          Quick-deploy Pega and Informatica with preset server compliance
          profiles.
        </p>
        <ul className="list-disc pl-8 text-gray-700">
          <li>
            JET Pack -OpenJDK 13 / 14 / 16 / 18 / 19 Java Essential Tools,
            JDK13-19 , JConsole, VisualVM, MissionControl
          </li>
          <li>Includes:</li>
          <ul className="list-disc pl-8 mt-2">
            <li>
              Java JDK 13 or Java JDK 14 or Java JDK 16 or Java JDK 18 or Java
              JDK 19 OpenSource JDK. Dev/Run-time
            </li>
            <li>Visual VM</li>
            <li>JConsole</li>
            <li>MissionControl</li>
          </ul>
        </ul>
      </div>
      {/* <div className="w-full md:w-1/3">
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
      </div> */}
    </div>
  );
};

export default Overview;
