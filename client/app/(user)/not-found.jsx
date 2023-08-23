import Link from "next/link";

const Custom404 = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-700 ">
            <div className="card custom-top text-white text-center p-8 rounded-lg mx-4 sm:mx-auto">
                <div className="tools">
                    <div className="circle">
                        <span className="red box"></span>
                    </div>
                    <div className="circle">
                        <span className="yellow box"></span>
                    </div>
                    <div className="circle">
                        <span className="green box"></span>
                    </div>
                </div>
                <div className="card__content mt-6">
                    <h1 className="text-4xl font-semibold mb-4">
                        404 - Page Not Found
                    </h1>
                    <p className="text-gray-300 mb-4">
                        The page you requested is not found.
                    </p>
                    <p className="text-gray-300 mb-4">
                        If you believe this is an issue, please{" "}
                        <Link
                            className="text-blue-500 hover:underline "
                            href="/contact-us"
                        >
                            contact us.
                        </Link>
                    </p>
                    <Link
                        className="text-blue-500 hover:underline pb-4"
                        href="/"
                    >
                        Go back to home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Custom404;
