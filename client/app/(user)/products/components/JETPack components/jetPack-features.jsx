const Features = () => {
  return (
    <div className="p-6 bg-gray-100 bg-opacity-93">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Features</h2>
          <p className="text-gray-700 mb-6">
            Simplify | Aggregate | Automate | Simplify
          </p>
          <ul className="list-disc pl-6 md:pl-8 text-gray-700">
            <li className="mb-3 font-semibold">
              Java 13 / 14 / 16 / 18 / 19 OpenSource JDK.
            </li>
            <li className="mb-3 font-semibold">Visual VM</li>
            <li className="mb-3 font-semibold">JConsole</li>
            <li className="mb-3 font-semibold">MissionControl</li>
            <li className="mb-3 font-semibold">
              All supplied working out of the box.
            </li>
            <li className="mb-3 font-semibold">
              Compatible with Muse :
              https://sourceforge.net/projects/museproject/
            </li>
            <li className="mb-3 font-semibold">Take and Diagnose Heap Dumps</li>
            <li className="mb-3 font-semibold">
              CPU and Memory Profile your code
            </li>
            <li className="mb-3 font-semibold">
              Graph Heap and CPU usage over time -setting thresholds and
              triggers
            </li>
            <li className="mb-3 font-semibold">
              Diagnose Out of Memory Errors
            </li>
            <li className="mb-3 font-semibold">
              Diagnose Memory Leaks, down to method and object
            </li>
            {/* ...more items */}
          </ul>
        </div>
        <div className="w-full md:w-1/2 pl-0 md:pl-8">
          <ul className="list-disc pl-6 md:pl-8 text-gray-700">
            <li className="mb-3 font-semibold">Simultaneously from ONE ide.</li>
            <li className="mb-3 font-semibold">
              Sample Scripts for ALL 5 Servers INCLUDED...
            </li>
            <li className="mb-3 font-semibold">
              Live Connection to GIT Repository. Get updates in minutes...
            </li>
            <li className="mb-3 font-semibold">
              Apply SSL Configuration to unlimited servers in 2 clicks.
            </li>
            <li className="mb-3 font-semibold">
              Performance Tune your Multi-Server Pega Estate in 2 clicks.
              (JBoss)
            </li>
            <li className="mb-3 font-semibold">
              Upgrade Vendor Applications on unlimited servers in 2 clicks.
            </li>
            {/* ...more items */}
            <li className="mb-3 font-semibold">
              Secure SSL/TLS Trust Stores Provisioned.
            </li>
            <li className="mb-3 font-semibold">
              Schedule Automation with Jenkins
            </li>
            <ul className="list-disc pl-6 md:pl-8 mt-2">
              <li className="mb-1 font-semibold">
                Extract Eclipse Launch Configuration
              </li>
              <li className="mb-1 font-semibold">
                Use it directly in a Jenkins Build Job
              </li>
            </ul>
            <li className="mb-3 font-semibold">
              We invite Vendors and Systems Integrators with Complex Deployment
              Needs to work with us.
              <ul className="list-disc pl-6 md:pl-8 mt-2">
                <li className="mb-1 font-semibold">
                  Oracle, IBM, RedHat, Apache and Eclipse Foundation pack
                  Ultimate Middleware Firepower !!!
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
