import Navbar from "@/components/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "MUSE",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={cn(
                    inter.className,
                    "bg-gradient-to-b from-sky-100 to-blue-300 h-screen w-screen flex flex-col items-start"
                )}
            >
                <Navbar />
                <main className="flex-grow container">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
