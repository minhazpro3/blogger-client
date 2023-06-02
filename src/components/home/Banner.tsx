import React, { useRef,useEffect } from "react";

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HomeBanner() {
    useEffect(() => {
        AOS.init();
      }, [])
    const ref = useRef(null);
    React.useEffect(() => {
        import("@lottiefiles/lottie-player");
    });
    return (
        <div className="container mx-auto px-8 md:px-0 ">
            <div className="relative md:my-16">
                <div   className="md:flex justify-around items-center gap-6 my-10">
                    <div data-aos="fade-up" data-aos-duration="2000" className="flex justify-center">
                        <div>
                            <h2 className="text-white text-5xl sm:text-6xl md:text-5xl lg:text-6xl">Main feature
                                <br />
                                of <span className="text-fuchsia-600 font-semibold font-base ">Brainwave</span>
                            </h2>
                            <h6 className="text-white text-base md:text-xl my-3 md:my-5 opacity-50">Here are some of  the core feature of <br />Brainwave that make it stand out form <br /> other chat application</h6>
                            <button className="bg-indigo-900 px-6 py-2 hover:translate-x-2 transition-all duration-500 text-white rounded-tr-lg hover:bg-white hover:text-fuchsia-800">Learn more <span >&#8594;</span></button>
                        </div>
                    </div>
                    {/* banner right main image */}
                    <div data-aos="fade-up" data-aos-duration="2000" className="flex justify-center my-16 md:my-0">
                     <div className="lg:w-[600px] md:w-[300px] w-[450px] lg:h-[450px] md:h-[300px] h-[300px]">
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
                </div >
                 {/* bounce ball left */}
                <div className="absolute -top-3 md:top-16 left-[33%] md:left-[25%] w-[50px] h-[50px]">
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
                <div className="absolute right-[40%] bottom-12">
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
                <div className="absolute right-[16%] bottom-24">
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
                <div className="absolute top-20 left-0 sm:left-12 sm:top-28 md:top-28 lg:top-56 md:-left-10 lg:left-2 -z-10 w-[300px] sm:w-[350px] md:w-[400px]  h-[300px] md:[400px]  ">
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
                <div className="absolute right-4 md:right-10 -bottom-4 md:-bottom-2 w-[250px] md:w-[400px] h-[200px] md:h-[400px] -z-10  ">
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
    )
}