import React, { useRef } from "react";

export default function HomeBanner() {
    const ref = useRef(null);
    React.useEffect(() => {
        import("@lottiefiles/lottie-player");
    });
    return (
        <div className="container mx-auto px-8 md:px-0 ">
            <div className="flex justify-around items-center gap-6 my-10">
                <div className="flex justify-center">

                    <div>
                        <h2 className="text-white text-5xl">Main feature
                            <br />
                            of Brainwave
                        </h2>
                        <h6 className="text-white text-base my-3 md:my-5 opacity-75">Here are some of  the core feature of <br />Brainwave that make it stand out form <br /> other chat application</h6>
                        <button className="bg-indigo-900 px-6 py-2 text-white rounded-tr-lg">Learn more</button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <lottie-player
                        id="firstLottie"
                        ref={ref}
                        autoplay
                        loop
                        mode="normal"
                        src="https://assets9.lottiefiles.com/packages/lf20_KCYk5H7cJP.json"
                        style={{ width: "550px", height: "400px" }}
                    ></lottie-player>
                    {/* <Image src="" alt="" fill /> */}
                    {/* https://assets9.lottiefiles.com/packages/lf20_rI827y2g0K.json
        https://assets2.lottiefiles.com/packages/lf20_HF41OKnIK9.json
        https://assets6.lottiefiles.com/packages/lf20_6WBFSD.json
        https://assets5.lottiefiles.com/packages/lf20_orznphcd.json
        https://assets3.lottiefiles.com/packages/lf20_X53TyG4jhE.json
        

        */}
                </div>
            </div>
        </div>
    )
}