import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="my-20 flex md:flex-row flex-col p-4 gap-x-16 gap-y-4 w-full md:justify-between justify-start items-center">
      <div className="flex flex-col gap-6 md:w-[45%] w-full h-full justify-start">
        <p className="text-sky-400">One platform blah blah.</p>
        <h2 className="text-3xl lg:text-4xl text-slate-900 font-semibold">
          Improve something Lorem ipsum dolor sit. mone hji kei king my wo
        </h2>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          quos, reprehenderit iusto iste cum consequatur nesciunt alias numquam
          magnam labore.!!
        </p>
      </div>
      <div className="relative md:w-[55%] w-full h-full">
        
        <Image
          src="/hero-pic.png"
          alt="Pic error"
          width={400}
          height={400}
          className="w-full h-full lg:p-[12%] md:p-[2%] sm:p-[8%] "
        />
      </div>
    </div>
  );
};

export default Hero;
