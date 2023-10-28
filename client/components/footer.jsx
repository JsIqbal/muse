import { cn } from "@/lib/utils";
import Link from "next/link";

const Footer = ({className}) => {
    return (
        <footer className={cn("flex flex-col lg:flex-row w-full justify-center gap-x-[20%] gap-y-4 h-max mt-auto text-center bg-gray-800 text-white py-6 ", className)}>
            <div className="">
                &copy; 2023 all rights reserved by{" "}
                <Link className="hover:underline" href="/">
                    Musesoft
                </Link>
            </div>
            {/*  */}
        </footer>
    );
};

export default Footer;
