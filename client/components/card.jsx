"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const CommonCard = ({ className, title, desc, cardFooter, element }) => {
    return (
        <Card className={className}>
            <CardHeader>
                <CardTitle>{title ? title : "Title"}</CardTitle>
                <CardDescription>
                    {desc ? desc : "Card Description"}
                </CardDescription>
            </CardHeader>
            <CardContent>{element ? element : <p>Card Content</p>}</CardContent>
            {cardFooter && <CardFooter>{cardFooter}</CardFooter>}
        </Card>
    );
};

export default CommonCard;
