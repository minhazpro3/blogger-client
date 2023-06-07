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
                        <div className="col-span-1 border-2 relative border-slate-800 sm:h-[450px] md:h-[600px] py-8 px-6">
                            
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
                            <div className="absolute bottom-7 right-6"> 
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
                        <div className="  text-white">
                            <div>
                                <div>
                                    <div>
                                        Fine details
                                    </div>
                                    <div>
                                        Encrypted Approached
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



