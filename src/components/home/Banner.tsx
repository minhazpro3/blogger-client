"use client";
import React, { useRef, useEffect } from "react";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomeBanner() {
  useEffect(() => {
    AOS.init();
  }, []);
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <div className="container mx-auto px-8 md:px-0 ">
      <div className="relative md:my-16">
        <div className="my-10 items-center justify-around gap-6 md:flex">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="flex justify-center"
          >
            <div>
              <h2 className="text-5xl text-white sm:text-6xl md:text-5xl lg:text-6xl">
                Main feature
                <br />
                of{" "}
                <span className="font-base font-semibold text-fuchsia-600 ">
                  Brainwave
                </span>
              </h2>
              <h6 className="my-3 text-base text-white opacity-50 md:my-5 md:text-xl">
                Here are some of the core feature of <br />
                Brainwave that make it stand out form <br /> other chat
                application
              </h6>
              <button className="rounded-tr-lg bg-indigo-900 px-6 py-2 text-white transition-all duration-500 hover:translate-x-2 hover:bg-white hover:text-fuchsia-800">
                Learn more <span>&#8594;</span>
              </button>
            </div>
          </div>
          {/* banner right main image */}
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="my-16 flex justify-center md:my-0"
          >
            <div className="h-[300px] w-[450px] md:h-[300px] md:w-[300px] lg:h-[450px] lg:w-[600px]">
              <lottie-player
                id="firstLottie"
                ref={ref}
                autoplay
                loop
                mode="normal"
                src="https://assets9.lottiefiles.com/packages/lf20_KCYk5H7cJP.json"
                // style={{ width: "100%", height: "450px"   }}
              ></lottie-player>
            </div>

            {/* https://assets9.lottiefiles.com/packages/lf20_rI827y2g0K.json
        https://assets2.lottiefiles.com/packages/lf20_HF41OKnIK9.json
        https://assets6.lottiefiles.com/packages/lf20_6WBFSD.json
        https://assets5.lottiefiles.com/packages/lf20_orznphcd.json
        https://assets3.lottiefiles.com/packages/lf20_X53TyG4jhE.json
        https://assets9.lottiefiles.com/packages/lf20_tqvrzfnf.json
        */}
          </div>
        </div>
        {/* bounce ball left */}
        <div className="absolute -top-3 left-[33%] h-[50px] w-[50px] md:left-[25%] md:top-16">
          <lottie-player
            id="firstLottie"
            ref={ref}
            autoplay
            loop
            mode="normal"
            src="https://assets9.lottiefiles.com/packages/lf20_tqvrzfnf.json"
            // style={{ width: "50px", height: "50px" }}
          ></lottie-player>
        </div>
        {/* bounce ball right */}
        <div className="absolute bottom-12 right-[40%]">
          <lottie-player
            id="firstLottie"
            ref={ref}
            autoplay
            loop
            mode="normal"
            src="https://assets9.lottiefiles.com/packages/lf20_tqvrzfnf.json"
            style={{ width: "50px", height: "50px" }}
          ></lottie-player>
        </div>
        {/* star bottom */}
        <div className="absolute bottom-24 right-[16%]">
          <lottie-player
            id="firstLottie"
            ref={ref}
            autoplay={false}
            loop
            mode="normal"
            src="https://assets10.lottiefiles.com/packages/lf20_gch1wlya.json"
            // https://assets10.lottiefiles.com/packages/lf20_8uq5y6n2.json
            style={{ width: "200px", height: "200px" }}
          ></lottie-player>
        </div>
        {/* star top */}
        <div className="absolute right-[35%] top-10">
          <lottie-player
            id="firstLottie"
            ref={ref}
            autoplay={false}
            loop
            mode="normal"
            src="https://assets10.lottiefiles.com/packages/lf20_8uq5y6n2.json"
            style={{ width: "200px", height: "200px" }}
          ></lottie-player>
        </div>
        {/* arrow down to up */}
        <div className="md:[400px] absolute left-0 top-20 -z-10 h-[300px] w-[300px] sm:left-12 sm:top-28 sm:w-[350px] md:-left-10 md:top-28 md:w-[400px]  lg:left-2 lg:top-56  ">
          <lottie-player
            id="firstLottie"
            ref={ref}
            autoplay={false}
            loop
            mode="normal"
            src="https://assets8.lottiefiles.com/packages/lf20_hxsyqoli.json"
            // style={{ width: "400px", height: "400px" }}
          ></lottie-player>
        </div>
        {/* machine learning ring of right */}
        <div className="absolute -bottom-4 right-4 -z-10 h-[200px] w-[250px] md:-bottom-2 md:right-10 md:h-[400px] md:w-[400px]  ">
          <lottie-player
            id="firstLottie"
            ref={ref}
            autoplay={false}
            loop
            mode="normal"
            src="https://assets5.lottiefiles.com/private_files/lf30_euywal0g.json"
            // style={{ width: "400px", height: "400px" }}
          ></lottie-player>
        </div>
      </div>
    </div>
  );
}
