import CommonTabs from "@/components/tabs";

const MuseTab = () => {
    const tabsData = {
        tabList: [
            { value: "account", label: "Account" },
            { value: "password", label: "Password" },
        ],
        tabContent: [
            { value: "account", text: "Make changes to your account here." },
            { value: "password", text: "Change your password here." },
        ],
    };

    return (
        <div className="w-full mt-16 bg-gray-100 bg-opacity-93">
            <CommonTabs tabsData={tabsData} />
        </div>
    );
};

export default MuseTab;
