import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Product2 = () => {
  // Will be added to cart
  function downloadJETPack() {
    return null;
  }

  return (
    <div className="w-screen  bg-[#F2F6F9]">
      <div className="flex lg:flex-row flex-col justify-center items-center py-10 px-6 md:px-10 lg:px-[7%] xl:px-[10%] 2xl:px-[20%] flex-grow">
        <div className="lg:w-[50%] w-max md:p-[7%] p-[9%]">
          <div className="relative rounded-md shadow-lg">
            <Image
              src="/images/dummy-pic-1.PNG"
              width={450}
              height={450}
              alt="demo picture"
            />
          </div>
        </div>
        <div className="lg:w-[50%] w-full flex flex-col justify-center items-start gap-y-8">
          <div className="flex flex-col gap-y-4">
            <h1 className="text-3xl font-extrabold text-gray-900">
              JETPack - Empowering Java Development and Diagnostics:
            </h1>
            <p className="text-lg">
              Elevate your Java development with JETPack. Streamline workflow,
              identify bottlenecks, and optimize performance. Experience Java at
              its best.
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
                      OpenSource Java JDK Support: JETPack integrates with Java
                      JDKs 13-19, empowering developers to leverage open-source
                      Java advancements.
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
                      Efficient Diagnostics: Tools like Visual VM, JConsole, and
                      MissionControl offer real-time insights into memory usage,
                      CPU performance, and smarter decision-making.
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
                      Precise Performance Boost: Diagnose memory leaks, manage
                      heap dumps, and profile CPU and memory usage with
                      precision. Enhance efficiency and application behavior
                      over time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-lg text-gray-700">
                <p className="mt-4 flex gap-x-4">
                  <Button className="bg-blue-500" onClick={downloadJETPack}>
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
  );
};

export default Product2;
