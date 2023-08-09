import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col gap-y-10">
            <div className="flex justify-center items-center w-screen h-auto flex-grow bg-[#F2F6F9] py-20">
                <div className="container mx-10 flex-grow h-auto rounded-lg shadow-xl p-10 flex flex-col lg:flex-row gap-y-5 bg-white">
                    <div className="flex flex-col w-[50%]">
                        About
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Recusandae quos, reprehenderit iusto iste cum
                            consequatur nesciunt alias numquam magnam labore.!!
                        </p>
                    </div>
                    <div className="flex flex-col w-[50%]">more info</div>
                </div>
            </div>
            <div className="w-screen  bg-white">
                <div className="flex py-10 px-6 md:px-10 lg:px-[7%] xl:px-[10%] 2xl:px-[20%] flex-grow">
                    <div className="w-[50%] flex flex-col justify-center items-start gap-y-8">
                        <h1>Title something and more</h1>
                        <p>
                            Paragraph about the product ig and more Lorem ipsum
                            dolor sit amet consectetur adipisicing elit.
                            Recusandae quos, reprehenderit iusto iste cum
                            consequatur nesciunt alias numquam magnam labore.!!
                            product ig and more Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Recusandae quos,
                            reprehenderit iusto iste cum consequatur nesciunt
                            alias numquam magnam labore.!!
                        </p>
                        <Button className="bg-blue-600">Download now</Button>
                    </div>
                    <div className="w-[50%] p-[7%]">
                        <div className="relative rounded-md shadow-lg">
                            <Image
                                src="/dummy-pic-1.PNG"
                                width={450}
                                height={450}
                                alt="demo picture"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-screen  bg-[#F2F6F9]">
                <div className="flex py-10 px-6 md:px-10 lg:px-[7%] xl:px-[10%] 2xl:px-[20%] flex-grow">
                    <div className="w-[50%] p-[7%]">
                        <div className="relative rounded-md shadow-lg">
                            <Image
                                src="/dummy-pic-1.PNG"
                                width={450}
                                height={450}
                                alt="demo picture"
                            />
                        </div>
                    </div>
                    <div className="w-[50%] flex flex-col justify-center items-start gap-y-8">
                        <h1>Title something and more</h1>
                        <p>
                            Paragraph about the product ig and more Lorem ipsum
                            dolor sit amet consectetur adipisicing elit.
                            Recusandae quos, reprehenderit iusto iste cum
                            consequatur nesciunt alias numquam magnam labore.!!
                            product ig and more Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Recusandae quos,
                            reprehenderit iusto iste cum consequatur nesciunt
                            alias numquam magnam labore.!!
                        </p>
                        <Button className="bg-blue-600">Download now</Button>
                    </div>
                </div>
            </div>
            <div className="w-screen  bg-white">
                <div className="flex py-10 px-6 md:px-10 lg:px-[7%] xl:px-[10%] 2xl:px-[20%] flex-grow">
                    <div className="w-[50%] flex flex-col justify-center items-start gap-y-8">
                        <h1>Title something and more</h1>
                        <p>
                            Paragraph about the product ig and more Lorem ipsum
                            dolor sit amet consectetur adipisicing elit.
                            Recusandae quos, reprehenderit iusto iste cum
                            consequatur nesciunt alias numquam magnam labore.!!
                            product ig and more Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Recusandae quos,
                            reprehenderit iusto iste cum consequatur nesciunt
                            alias numquam magnam labore.!!
                        </p>
                        <Button className="bg-blue-600">Download now</Button>
                    </div>
                    <div className="w-[50%] p-[7%]">
                        <div className="relative rounded-md shadow-lg">
                            <Image
                                src="/dummy-pic-1.PNG"
                                width={450}
                                height={450}
                                alt="demo picture"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
