import CommonTabs from "@/components/tabs";
import Overview from "./muse-overview";
import Features from "./muse-features";
import Benefit from "./muse-benefits";

const MuseTabs = () => {
    const tabsData = {
        tabList: [
            { value: "Overview", label: "Overview" },
            { value: "Features", label: "Features" },
            { value: "Benefits", label: "Benefits" },
        ],
        tabContent: [
            {
                value: "Overview",
                text: <Overview />,
            },
            {
                value: "Features",
                text: <Features />,
            },
            {
                value: "Benefits",
                text: <Benefit />,
            },
        ],
    };

    return (
        <div className="w-full my-10 bg-gray-100 bg-opacity-93 animate-fade-in-down">
            <CommonTabs tabsData={tabsData} />
        </div>
    );
};

export default MuseTabs;
