import { Button } from "@/components/ui/button";

const Banner = () => {
    return (
        <>
            <div className="flex flex-col gap-6 md:w-[45%] w-full h-full">
                <div class="text-left text-blue-600 font-semibold text-lg">
                    M Muse
                </div>
                <div class="mt-4">
                    <h1 class="text-3xl font-bold">
                        Muse: Middleware Universal Scripting idE
                    </h1>
                </div>
                <div class="mt-2">
                    <h3 class="text-lg text-gray-700">
                        DevOps Automate: WebSphere; WebLogic; JBoss; Glassfish;
                        Tomcat; Linux.
                    </h3>
                </div>
                <div class="mt-4">
                    <Button class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                        Download
                    </Button>
                </div>
                <div class="mt-4">
                    <p class="text-gray-600">Brought to you by: musesoft</p>
                </div>
            </div>
            <div className="relative md:w-[55%] w-full h-full text-center align-middle">
                Second Column Content Goes Here
            </div>
        </>
    );
};

export default Banner;
