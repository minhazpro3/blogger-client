import React, { useRef,useEffect } from "react";

export default function HomeGrowYou() {
    const ref = useRef(null);
    React.useEffect(() => {
      import("@lottiefiles/lottie-player");
    });
  

    return (
        <div className="container mx-auto px-8 md:px-0">
 
            <div className="grid grid-cols-4  gap-4">
                <div className="col-span-3 bg-blue-900 p-4 bg-opacity-30 rounded-lg relative">
                    <h2 className="text-white text-4xl ">Grow your business with<br /> Beautiful And Unique Design</h2>
                    <p className="text-white text-base my-3">We strongly believe in user-centric services. hence We have successfully built a significant space in the market. <br /> And our motto in full fill customer demand by making them satisfied with growing their business.</p>
                    <button className="text-white  px-12 py-2 rounded-full absolute left-4 mb-1">Get Started</button>
                    <div className="flex justify-center absolute -bottom-2 left-4 -z-10" >
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
                <div className="col-span-1 text-white bg-blue-900 bg-opacity-30 rounded-lg p-4">
                    <ul className="py-1 my-1 text-center hover:cursor-pointer hover:bg-cyan-950 rounded-md  bg-cyan-800">
                        <button>Menu</button>
                    </ul>
                    <ul className="py-1 my-1 text-center hover:cursor-pointer hover:bg-cyan-950 rounded-md  bg-cyan-800">
                        <button>Services</button>
                    </ul>
                    <ul className="py-1 my-1 text-center hover:cursor-pointer hover:bg-cyan-950 rounded-md  bg-cyan-800">
                        <button>Solution</button>
                    </ul>
                    <ul className="py-1 my-1 text-center hover:cursor-pointer hover:bg-cyan-950 rounded-md  bg-cyan-800">
                        <button>About us </button>
                    </ul>
                    <ul className="py-1 my-1 text-center hover:cursor-pointer hover:bg-cyan-950 rounded-md  bg-cyan-800">
                        <button>Blogs </button>
                    </ul>
                    <ul className="py-1 my-1 text-center hover:cursor-pointer hover:bg-cyan-950 rounded-md  bg-cyan-800">
                        <button className="">Contact us </button>
                    </ul>
                </div>
            </div>


            <div className="sm:flex justify-between my-8 p-2">
                <div className="w-full">
                </div>
                <div className="w-full flex justify-center gap-3">
                    <div className="w-full border-2 border-gray-600 rounded-md p-3">
                    <div>  <lottie-player
                            id="firstLottie"
                            ref={ref}
                            autoplay
                            loop
                            mode="normal"
                            src="https://assets9.lottiefiles.com/private_files/lf30_uo4w38uo.json"
                            style={{ width: "50px", height: "50px" }}
                        ></lottie-player></div>
                        <h3 className="text-white text-xl">Experimental Ceam</h3>
                        <p className="text-white">Our designer before in offering the services that charces off action oftion the eye and creats great impact on the mind.</p>
                    </div>
                    <div className="w-full border-2 border-gray-600 rounded-md p-3">
                    <div>  <lottie-player
                            id="firstLottie"
                            ref={ref}
                            autoplay
                            loop
                            mode="normal"
                            src="https://assets10.lottiefiles.com/packages/lf20_VN4Cyr7rjC.json"
                            style={{ width: "50px", height: "50px" }}
                        ></lottie-player></div>
                        <h3 className="text-white text-xl">Stragic Solution</h3>
                        <p className="text-white">Our designer before in offering the services that charces off action oftion the eye and creats great impact on the mind.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}