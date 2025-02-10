import React from "react";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-2 gap-6 py-12 md:py-16">
      <div className="intersect-once intersect:motion-preset-pop motion-duration-700 col-span-2 flex flex-col items-center md:col-span-1 md:items-start">
        <h3 className="mb-4 text-lg font-medium text-neutral-700">
          Hey, I’m Deepanshu Verma
        </h3>
        <h1 className="mb-8 text-center text-3xl/snug font-semibold text-neutral-800 md:text-start lg:text-6xl">
          A <span className="text-neutral-500">Full Stack</span> Developer,
          builing solutions for the web.
        </h1>
        <a
          href="#contact"
          className="w-full transform rounded-full bg-black px-6 py-3 text-center text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-neutral-100 hover:text-black hover:shadow-xl active:scale-95 sm:w-fit"
        >
          Get in touch
        </a>
      </div>
      <div className="intersect-once intersect:motion-preset-pop motion-duration-700 col-span-2 flex justify-center md:col-span-1">
        <div className="relative size-72 overflow-hidden rounded-full bg-neutral-100 lg:size-96">
          <img
            className="absolute left-1/2 top-[-30%] -translate-x-1/2 transform"
            src="/assets/myImage.png"
            alt="My Image"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
