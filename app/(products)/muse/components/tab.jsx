import CommonTabs from "@/components/tabs";
import Overview from "./feature-overview";
import Features from "./feature-features";
import Benefit from "./feature-benefit";

const MuseTab = () => {
    const tabsData = {
        tabList: [
            { value: "overview", label: "overview" },
            { value: "features", label: "features" },
            { value: "benefits", label: "benefits" },
        ],
        tabContent: [
            {
                value: "overview",
                text: <Overview />,
            },
            {
                value: "features",
                text: <Features />,
            },
            {
                value: "benefits",
                text: <Benefit />,
            },
        ],
    };

    return (
        <div className="w-full my-20 bg-gray-100 bg-opacity-93">
            <CommonTabs tabsData={tabsData} />
        </div>
    );
};

export default MuseTab;
