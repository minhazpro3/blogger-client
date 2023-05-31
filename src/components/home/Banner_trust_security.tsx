import React, { useRef, useEffect } from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function HomeTrustSecurity() {
    useEffect(() => {
        AOS.init();
      }, [])
    const ref = useRef(null);
    React.useEffect(() => {
        import("@lottiefiles/lottie-player");
    });

    return (
        <div className="container mx-auto px-8 md:px-0 my-12">
            <div className="flex justify-center">


                <div className="sm:flex justify-evenly md:justify-around items-center">
                    <div data-aos="fade-up" data-aos-duration="2000" className="flex items-center gap-4  px-4 md:6 rounded-md ">

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
                        <h4 className="text-white text-xl sm:text-sm">Advanced Integration</h4>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000" className="flex items-center gap-4  px-4 md:6 rounded-md my-2 sm:my-0 ">

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
                        <h4 className="text-white text-xl sm:text-sm">Customizable Branding</h4>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000" className="flex items-center gap-4  px-4 md:6 rounded-md ">
                        <div>  <lottie-player
                            id="firstLottie"
                            ref={ref}
                            autoplay
                            loop
                            mode="normal"
                            src="https://assets1.lottiefiles.com/packages/lf20_MbebXrwitI.json"
                            style={{ width: "50px", height: "50px" }}
                        ></lottie-player></div>
                        <h4 className="text-white text-xl sm:text-sm">Enhanced Security</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}