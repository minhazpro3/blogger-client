"use client"
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Share = () => {

    const ref = useRef(null);
    React.useEffect(() => {
        import("@lottiefiles/lottie-player");
    });

    return (
        <div>

            <div className='container mx-auto px-8 md:px-0'>
                {/* share  */}
                <div className='w-full group relative h-[300px] bg-transparent border-2 border-slate-800 rounded-lg py-12 px-10'>
                    <h2 className='text-white text-xl'>Community</h2>
                    <h1 className='text-white text-3xl sm:absolute bottom-12 my-5 sm:my-0 '>Share here, There <br /> and anywhere</h1>
                    <button className='text-white bg-purple-700 rounded-md py-2 px-6 sm:absolute bottom-12 w-36 sm:right-10'>Expo <span className='group-hover:pl-3 transition-all duration-150 ml-4 ' >&#8594;</span></button>
                </div>

                {/* message points etc */}
                <div className="my-12">
                    <div className="grid grid-cols-3 gap-4">
                        {/* messaging */}
                        <div className="col-span-1 border-2 relative border-slate-800 sm:h-[450px] rounded-lg md:h-[600px] py-8 px-6">

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
                            <h2 className="text-white absolute bottom-8 left-6 text-xl sm:text-3xl">Instant Talk</h2>
                            <div className="absolute bottom-5 right-6">
                                <lottie-player
                                    id="firstLottie"
                                    ref={ref}
                                    autoplay
                                    loop
                                    mode="normal"
                                    src="https://assets7.lottiefiles.com/packages/lf20_mkgyhwlf.json"
                                    style={{ width: "70px", height: "70px" }}
                                ></lottie-player></div>
                        </div>
                        {/* points approached etc */}
                        <div className=" col-span-2 text-white  ">
                            <div>
                                <div className="sm:flex justify-center w-full gap-4">
                                    {/* find details */}
                                    <div className="w-full ">
                                        <div className="border-4 relative h-[290px] p-4
                                   border-slate-800 rounded-lg">
                                          <h4 className="text-base text-green-300 font-medium my-2 px-4">MAGIC POT</h4>
                                            <h2 className="text-4xl font-medium text-white px-4 my-7">Fine <br /> Details</h2>
                                            <p className="px-4 absolute bottom-2 py-2">Feature cards section <br />concept details by Yasir Arthure</p>
                                            <div className="absolute top-3 right-4 ">
                                                <lottie-player
                                                    id="firstLottie"
                                                    ref={ref}
                                                    autoplay
                                                    loop
                                                    mode="normal"
                                                    src="https://assets7.lottiefiles.com/private_files/lf30_LOw4AL.json"
                                                    style={{ width: "150px", height: "150px" }}
                                                ></lottie-player></div>
                                            <div className="absolute bottom-2 right-4 ">
                                                <lottie-player
                                                    id="firstLottie"
                                                    ref={ref}
                                                    autoplay
                                                    loop
                                                    mode="normal"
                                                    src="https://assets10.lottiefiles.com/packages/lf20_80nu1g6c.json"
                                                    style={{ width: "70px", height: "70px" }}
                                                ></lottie-player></div>
                                        </div>
                                    </div>
                                    {/* approached */}
                                    <div className="w-full ">
                                        <div className="border-4 relative h-[290px] p-4
                                   border-slate-800 rounded-lg">
                                           
                                            <h4 className="text-base text-green-300 font-medium my-2 px-4">TOP NOTCH SHORT</h4>
                                            <h2 className="text-4xl font-medium text-white px-4 my-7">Encrypted <br /> Approached</h2>
                                            <p className="px-4 absolute bottom-2 py-2">Feature cards section <br />concept details by Yasir Arthure</p>
                                            <div className="absolute top-3 right-4 ">
                                                <lottie-player
                                                    id="firstLottie"
                                                    ref={ref}
                                                    autoplay
                                                    loop
                                                    mode="normal"
                                                    src="https://assets8.lottiefiles.com/packages/lf20_ibmd3e7f.json"
                                                    style={{ width: "150px", height: "150px" }}
                                                ></lottie-player></div>
                                            <div className="absolute bottom-2 right-4 ">
                                                <lottie-player
                                                    id="firstLottie"
                                                    ref={ref}
                                                    autoplay
                                                    loop
                                                    mode="normal"
                                                    src="https://assets10.lottiefiles.com/packages/lf20_80nu1g6c.json"
                                                    style={{ width: "70px", height: "70px" }}
                                                ></lottie-player></div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2>Explore feature</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Share



