import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    Mails,
    MessagesSquareIcon,
    Upload,
    Users2Icon,
} from "@/node_modules/lucide-react";

const SidebarLinks = () => {
    const routes = [
        {
            label: "Dashboard",
            icon: LayoutDashboard,
            href: "/admin",
            color: "text-purple-500",
        },
        {
            label: "Users",
            icon: Users2Icon,
            href: "/admin/users",
            color: "text-blue-500",
        },
        {
            label: "Emails",
            icon: Mails,
            href: "/admin/emails",
            color: "text-green-500",
        },
        {
            label: "Reviews",
            icon: MessagesSquareIcon,
            href: "/admin/reviews",
            color: "text-yellow-500"
        },
        {
            label: "Upload",
            icon: Upload,
            href: "/admin/upload",
            color: "text-orange-500"
        },
    ];

    const pathname = usePathname();
    return (
        <div className="space-y-3 text-zinc-400 px-2 w-full">
            {routes.map((route) => {
                return (
                    <Link
                        href={route.href}
                        key={route.href}
                        className={cn(
                            "group flex p-3 w-full justify-start cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition-all duration-150",
                            pathname === route.href
                                ? "bg-white/10 text-white"
                                : ""
                        )}
                    >
                        <div className="flex items-center flex-1">
                            <route.icon
                                className={cn("h-8 w-8 mr-3", `${route.color}`)}
                            />
                            <p className="text-xl font-semibold">
                                {route.label}
                            </p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default SidebarLinks;
