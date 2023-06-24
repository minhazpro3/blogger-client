"use client";
import React, { useRef } from "react";

const Share = () => {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <div>
      <div className="container mx-auto px-8 md:px-0">
        {/* share  */}
        <div className="group relative h-[300px] w-full rounded-lg border-2 border-slate-800 bg-transparent px-10 py-12">
          <h2 className="text-xl text-white">Community</h2>
          <h1 className="bottom-12 my-5 text-3xl text-white sm:absolute sm:my-0 ">
            Share here, There <br /> and anywhere
          </h1>
          <button className="bottom-12 w-36 rounded-md bg-purple-700 px-6 py-2 text-white sm:absolute sm:right-10">
            Expo{" "}
            <span className="ml-4 transition-all duration-150 group-hover:pl-3 ">
              &#8594;
            </span>
          </button>
        </div>

        {/* message points etc */}
        <div className="my-12">
          <div className="grid grid-cols-3 gap-4">
            {/* messaging */}
            <div className="relative col-span-1 rounded-lg border-2 border-slate-800 px-6 py-8 sm:h-[450px] md:h-[600px]">
              <h2 className=" pb-4 text-base font-medium uppercase text-green-300 ">
                Can you contact anytime 24/7
              </h2>
              <div className="flex justify-center">
                <lottie-player
                  id="firstLottie"
                  ref={ref}
                  autoplay
                  loop
                  mode="normal"
                  src="https://assets1.lottiefiles.com/packages/lf20_EmUlFP.json"
                  // src="https://assets4.lottiefiles.com/private_files/lf30_tvxeldei.json"
                  style={{ width: "150px", height: "150px" }}
                ></lottie-player>
              </div>
              <h2 className="absolute bottom-8 left-6 text-xl text-white sm:text-3xl">
                Instant Talk
              </h2>
              <div className="absolute bottom-5 right-6">
                <lottie-player
                  id="firstLottie"
                  ref={ref}
                  autoplay
                  loop
                  mode="normal"
                  src="https://assets7.lottiefiles.com/packages/lf20_mkgyhwlf.json"
                  style={{ width: "70px", height: "70px" }}
                ></lottie-player>
              </div>
            </div>
            {/* points approached etc */}
            <div className=" col-span-2 text-white  ">
              <div>
                <div className="w-full justify-center gap-4 sm:flex">
                  {/* find details */}
                  <div className="w-full ">
                    <div
                      className="relative h-[290px] rounded-lg border-4
                                   border-slate-800 p-4"
                    >
                      <h4 className="my-2 px-4 text-base font-medium text-green-300">
                        MAGIC POT
                      </h4>
                      <h2 className="my-7 px-4 text-4xl font-medium text-white">
                        Fine <br /> Details
                      </h2>
                      <p className="absolute bottom-2 px-4 py-2">
                        Feature cards section <br />
                        concept details by Yasir Arthure
                      </p>
                      <div className="absolute right-4 top-3 ">
                        <lottie-player
                          id="firstLottie"
                          ref={ref}
                          autoplay
                          loop
                          mode="normal"
                          src="https://assets7.lottiefiles.com/private_files/lf30_LOw4AL.json"
                          style={{ width: "150px", height: "150px" }}
                        ></lottie-player>
                      </div>
                      <div className="absolute bottom-2 right-4 ">
                        <lottie-player
                          id="firstLottie"
                          ref={ref}
                          autoplay
                          loop
                          mode="normal"
                          src="https://assets10.lottiefiles.com/packages/lf20_80nu1g6c.json"
                          style={{ width: "70px", height: "70px" }}
                        ></lottie-player>
                      </div>
                    </div>
                  </div>
                  {/* approached */}
                  <div className="w-full ">
                    <div
                      className="relative h-[290px] rounded-lg border-4
                                   border-slate-800 p-4"
                    >
                      <h4 className="my-2 px-4 text-base font-medium text-green-300">
                        TOP NOTCH SHORT
                      </h4>
                      <h2 className="my-7 px-4 text-4xl font-medium text-white">
                        Encrypted <br /> Approached
                      </h2>
                      <p className="absolute bottom-2 px-4 py-2">
                        Feature cards section <br />
                        concept details by Yasir Arthure
                      </p>
                      <div className="absolute right-4 top-3 ">
                        <lottie-player
                          id="firstLottie"
                          ref={ref}
                          autoplay
                          loop
                          mode="normal"
                          src="https://assets8.lottiefiles.com/packages/lf20_ibmd3e7f.json"
                          style={{ width: "150px", height: "150px" }}
                        ></lottie-player>
                      </div>
                      <div className="absolute bottom-2 right-4 ">
                        <lottie-player
                          id="firstLottie"
                          ref={ref}
                          autoplay
                          loop
                          mode="normal"
                          src="https://assets10.lottiefiles.com/packages/lf20_80nu1g6c.json"
                          style={{ width: "70px", height: "70px" }}
                        ></lottie-player>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 w-full">
                  <div className="relative   h-[290px] rounded-lg bg-slate-800  p-4">
                    <h2 className="absolute bottom-5 text-4xl">
                      Explore feature
                    </h2>
                    <div className="absolute bottom-5 right-6 ">
                      <lottie-player
                        id="firstLottie"
                        ref={ref}
                        autoplay
                        loop
                        mode="normal"
                        src="https://assets10.lottiefiles.com/packages/lf20_80nu1g6c.json"
                        style={{ width: "70px", height: "70px" }}
                      ></lottie-player>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
