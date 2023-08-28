"use client";

import Image from "next/image";

import CustomButton from "./CustonButton";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full h-full bg-pattern bg-cover py-10">
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col-reverse lg:flex-row">
        <div className="flex-1 flex flex-col items-center justify-evenly gap-6 p-3">
          <h2 className="font-bold text-4xl">
            Search, find, collect the cards that you need!
          </h2>
          <p className="text-xl">
            Take a look at all the Pokemon cards that we have available.
          </p>
          <CustomButton
            title="Gotta Catch´em all"
            textStyles="text-white font-bold font-2xl uppercase"
            containerStyles="bg-red-700 w-fit mx-auto rounded-2xl"
            handleClick={handleScroll}
          />
        </div>
        <div className="lg:flex-[1.5] p-">
          <div className="relative w-full h-[300px] lg:min-h-[500px]">
            <Image
              src="/hero.avif"
              alt="hero image"
              fill
              className="object-contain"
              sizes="(max-width: 375px) 50vw, (max-width: 1200px) 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
