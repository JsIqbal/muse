import Link from "next/link";

const Footer = () => {
    return (
        <div className="flex flex-col lg:flex-row w-full justify-center gap-x-[20%] gap-y-4 h-max mt-auto text-center bg-gray-800 text-white py-2 ">
            <div className="">
                &copy; 2023 all rights reserved by{" "}
                <Link className="hover:underline" href="/">
                    Musesoft
                </Link>
            </div>
            <div className="flex gap-x-2 justify-center items-center">
                <p>Developed by:</p>
                <Link
                    className="hover:underline"
                    href="https://github/com/jsiqbal"
                >
                    Md. Iqbal Hossain
                </Link>
                &
                <Link
                    className="hover:underline"
                    href="https://github/com/ahmad-munab"
                >
                    Ahmad Munab
                </Link>
            </div>
        </div>
    );
};

export default Footer;
