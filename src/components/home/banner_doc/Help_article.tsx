"use client";
import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

export default function Help_article() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className=" group  my-4 h-[300px] w-full  rounded-md rounded-tl-[1px] rounded-tr-3xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 sm:h-[260px] lg:h-[310px]"
    >
      <div className="shadow-base h-[300px] rounded-md rounded-tl-[1px] rounded-tr-3xl bg-slate-950 px-5 py-6 shadow-indigo-700 drop-shadow-lg sm:h-[260px] sm:px-3 sm:py-6  md:h-[300px] md:px-5  md:py-6 lg:h-[310px] lg:px-6 lg:py-7 ">
        <h2 className="text-2xl font-medium text-white sm:text-xl md:pt-2    md:text-2xl">
          Getting started with the API
        </h2>
        <p className="my-3 text-base text-white sm:text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolore
          odio reiciendis hic eum numquam laudantium quo asperiores repellendus
          natus.
        </p>
        <button className="my-2 rounded-md from-indigo-500 to-purple-500 px-6 py-2 text-blue-800  ease-in group-hover:translate-x-1   group-hover:bg-gradient-to-r   group-hover:text-white group-hover:duration-75 ">
          Read more &#8594;
        </button>
      </div>
    </div>
  );
}
