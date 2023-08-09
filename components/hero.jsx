import React from "react";

const Hero = () => {
    return (
        <div className="my-20 flex md:flex-row flex-col p-4 gap-16 w-full md:justify-between justify-center items-center">
            <div className="flex flex-col gap-6 md:w-[45%] w-full h-full">
                <p className="text-sky-400">One platform blah blah.</p>
                <h2 className="text-3xl  text-slate-900 font-semibold">
                    Improve something Lorem ipsum dolor sit. mone hji kei king
                    my wo
                </h2>
                <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae quos, reprehenderit iusto iste cum consequatur
                    nesciunt alias numquam magnam labore.!!
                </p>
            </div>
            <div className="relative md:w-[55%] w-full h-full text-center align-middle">
                BIG POSTER IMAGE
            </div>
        </div>
    );
};

export default Hero;
