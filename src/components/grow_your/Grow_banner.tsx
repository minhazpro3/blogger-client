"use client";
import React, { useRef } from "react";

export default function GrowBanner() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <div className="container mx-auto px-8 md:px-0">
      <div className="grid grid-cols-4  gap-4">
        <div className="relative col-span-3 rounded-lg bg-blue-900 bg-opacity-30 p-4">
          <h2 className="text-4xl text-white ">
            Grow your business with
            <br /> Beautiful And Unique Design
          </h2>
          <p className="my-3 text-base text-white">
            We strongly believe in user-centric services. hence We have
            successfully built a significant space in the market. <br /> And our
            motto in full fill customer demand by making them satisfied with
            growing their business.
          </p>
          <button className="absolute  left-4 mb-1 rounded-full px-12 py-2 text-white">
            Get Started
          </button>
          <div className="absolute -bottom-2 left-4 -z-10 flex justify-center">
            <lottie-player
              id="firstLottie"
              ref={ref}
              autoplay
              loop
              mode="normal"
              src="https://assets4.lottiefiles.com/packages/lf20_uOFWvo.json"
              style={{ width: "180px", height: "140px" }}
            ></lottie-player>
          </div>
        </div>
        <div className="col-span-1 rounded-lg bg-blue-900 bg-opacity-30 p-4 text-white">
          <ul className="my-1 rounded-md bg-cyan-800 py-1 text-center hover:cursor-pointer  hover:bg-cyan-950">
            <button>Menu</button>
          </ul>
          <ul className="my-1 rounded-md bg-cyan-800 py-1 text-center hover:cursor-pointer  hover:bg-cyan-950">
            <button>Services</button>
          </ul>
          <ul className="my-1 rounded-md bg-cyan-800 py-1 text-center hover:cursor-pointer  hover:bg-cyan-950">
            <button>Solution</button>
          </ul>
          <ul className="my-1 rounded-md bg-cyan-800 py-1 text-center hover:cursor-pointer  hover:bg-cyan-950">
            <button>About us </button>
          </ul>
          <ul className="my-1 rounded-md bg-cyan-800 py-1 text-center hover:cursor-pointer  hover:bg-cyan-950">
            <button>Blogs </button>
          </ul>
          <ul className="my-1 rounded-md bg-cyan-800 py-1 text-center hover:cursor-pointer  hover:bg-cyan-950">
            <button className="">Contact us </button>
          </ul>
        </div>
      </div>

      <div className="my-8 justify-between p-2 sm:flex">
        <div className="w-full"></div>
        <div className="flex w-full justify-center gap-3">
          <div className="w-full rounded-md border-2 border-gray-600 p-3">
            <div>
              {" "}
              <lottie-player
                id="firstLottie"
                ref={ref}
                autoplay
                loop
                mode="normal"
                src="https://assets9.lottiefiles.com/private_files/lf30_uo4w38uo.json"
                style={{ width: "50px", height: "50px" }}
              ></lottie-player>
            </div>
            <h3 className="text-xl text-white">Experimental Ceam</h3>
            <p className="text-white">
              Our designer before in offering the services that charces off
              action oftion the eye and creats great impact on the mind.
            </p>
          </div>
          <div className="w-full rounded-md border-2 border-gray-600 p-3">
            <div>
              {" "}
              <lottie-player
                id="firstLottie"
                ref={ref}
                autoplay
                loop
                mode="normal"
                src="https://assets10.lottiefiles.com/packages/lf20_VN4Cyr7rjC.json"
                style={{ width: "50px", height: "50px" }}
              ></lottie-player>
            </div>
            <h3 className="text-xl text-white">Stragic Solution</h3>
            <p className="text-white">
              Our designer before in offering the services that charces off
              action oftion the eye and creats great impact on the mind.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
