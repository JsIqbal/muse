import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "./ui/separator";

const CommonTabs = ({ tabsData }) => {
    const { tabList, tabContent } = tabsData;

    return (
        <Tabs defaultValue={tabList[0].value} className="w-full">
            <TabsList>
                {tabList.map((tab) => (
                    <TabsTrigger key={tab.value} value={tab.value}>
                        {tab.label}
                    </TabsTrigger>
                ))}
            </TabsList>
            <Separator className="w-full" />
            {tabList.map((tab) => (
                <TabsContent
                    className="container"
                    key={tab.value}
                    value={tab.value}
                >
                    {
                        tabContent.find(
                            (content) => content.value === tab.value
                        )?.text
                    }
                </TabsContent>
            ))}
        </Tabs>
    );
};

export default CommonTabs;
