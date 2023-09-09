import { cn } from "@/lib/utils";

const Spinner = ({ size }) => {
    return (
        <span
            style={{ animationDuration: "3s" }}
            className={cn("border-[6px] border-dashed border-blue-700 rounded-full animate-spin", `w-${size} h-${size} ${size===8 && "border-[4px]"}`)}
        ></span>
    );
};

export default Spinner;
