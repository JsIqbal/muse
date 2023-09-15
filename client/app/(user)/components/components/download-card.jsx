import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import Spinner from "@/components/spinner";

const DownloadCard = () => {
    const [downloads, setDownloads] = useState("10.5k");
    useEffect(() => {
        const fetchDownloads = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/products/download`
                );
                if (response.ok) {
                    const data = await response.json();
                    setDownloads(data.totalDownloads);
                } else {
                    console.error("Error fetching downloads:", response.status);
                }
            } catch (error) {
                console.log(error);
                setDownloads("10.5k");
                return;
            }
        };
        fetchDownloads();
    }, []);

    return (
        <Card className="shadow-sm hover:none space-y-0 w-">
            <CardHeader>
                <CardTitle>Total downloads:</CardTitle>
            </CardHeader>

            <CardContent className="flex justify-between ">
                {downloads ? (
                    <h1 className="text-2xl font-semibold col-span-2">
                        {downloads}
                        <span className="text-muted-foreground text-xl text-blue-400 col-span-1 ml-3">
                            And counting
                        </span>
                    </h1>
                ) : (
                    <Spinner size={8} />
                )}

                <Link href="/products">
                    {" "}
                    <Button
                        varient="outline"
                        className="hover:scale-[102%] duration-100 transition-all h-max rounded-full text-sm sm:text-md lg:text-lg xl:text-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-800 shadow-xl border-2 border-white"
                    >
                        Download Now
                    </Button>
                </Link>
            </CardContent>
        </Card>
    );
};

export default DownloadCard;
