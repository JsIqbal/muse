import Navbar from "@/components/navbar";
import "../globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastProvider } from "@/providers/toast-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Musesoft",
    description: "A Developer Software Products Webstore",
    meta: [{ name: "view-transition", content: "same-origin" }],
};

export default function RootLayout({ children }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body
                    className={cn(
                        inter.className,
                        "bg-white h-screen min-w-screen  max-w-screen  flex flex-col items-start overflow-x-hidden"
                    )}
                >
                    <ToastProvider />
                    <Navbar />
                    {children}
                    <Footer />
                </body>
            </html>
        </ClerkProvider>
    );
}
