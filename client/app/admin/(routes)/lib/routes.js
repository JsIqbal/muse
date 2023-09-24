import { LayoutDashboard, Mails, MessagesSquareIcon, Users2Icon } from "@/node_modules/lucide-react";

const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/admin",
        color: "text-purple-900",
        bgColor: "bg-purple-300",
    },
    {
        label: "Users",
        icon: Users2Icon,
        href: "/admin/users",
        color: "text-blue-900",
        bgColor: "bg-blue-300",
    },
    {
        label: "Emails",
        icon: Mails,
        href: "/admin/emails",
        color: "text-green-900",
        bgColor: "bg-green-300",
    },
    {
        label: "Reviews",
        icon: MessagesSquareIcon,
        href: "/admin/reviews",
        color: "text-yellow-900",
        bgColor: "bg-yellow-300",
    },
];

export default routes