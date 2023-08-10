import Navbar from "@/components/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Nubinet",
    description: "A Developer Software Products Webstore",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={cn(
                    inter.className,
                    "bg-white h-screen w-screen flex flex-col items-start overflow-x-hidden"
                )}
            >
                <Toaster/>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
