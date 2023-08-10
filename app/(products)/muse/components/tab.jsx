import CommonTabs from "@/components/tabs";

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
                text: "overview content is going to show here.",
            },
            {
                value: "features",
                text: "features content is going to show here.",
            },
            {
                value: "benefits",
                text: "benefits content is going to show here.",
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
