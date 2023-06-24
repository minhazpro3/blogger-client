"use client";
import React, { useRef, useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
export default function HomeTrustSecurity() {
  useEffect(() => {
    AOS.init();
  }, []);
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <div className="container mx-auto my-12 px-8 md:px-0">
      <div className="flex justify-center">
        <div className="items-center justify-evenly sm:flex md:justify-around">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="md:6 flex items-center  gap-4 rounded-md px-4 "
          >
            <div>
              <lottie-player
                id="firstLottie"
                ref={ref}
                autoplay
                loop
                mode="normal"
                src="https://assets9.lottiefiles.com/packages/lf20_u4g6bqib.json"
                style={{ width: "50px", height: "50px" }}
              ></lottie-player>
            </div>
            <h4 className="text-xl text-white sm:text-sm">
              Advanced Integration
            </h4>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="md:6 my-2 flex  items-center gap-4 rounded-md px-4 sm:my-0 "
          >
            <div>
              <lottie-player
                id="firstLottie"
                ref={ref}
                autoplay
                loop
                mode="normal"
                src="https://assets4.lottiefiles.com/packages/lf20_jcTRQijNzu.json"
                style={{ width: "50px", height: "50px" }}
              ></lottie-player>
            </div>
            <h4 className="text-xl text-white sm:text-sm">
              Customizable Branding
            </h4>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="md:6 flex items-center  gap-4 rounded-md px-4 "
          >
            <div>
              {" "}
              <lottie-player
                id="firstLottie"
                ref={ref}
                autoplay
                loop
                mode="normal"
                src="https://assets1.lottiefiles.com/packages/lf20_MbebXrwitI.json"
                style={{ width: "50px", height: "50px" }}
              ></lottie-player>
            </div>
            <h4 className="text-xl text-white sm:text-sm">Enhanced Security</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
