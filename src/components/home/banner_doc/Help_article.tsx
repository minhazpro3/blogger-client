import React, { useEffect } from "react"
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Help_article() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div data-aos="fade-up" data-aos-duration="2000" className=" group  h-[300px] sm:h-[260px] lg:h-[310px]  w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 my-4 rounded-tr-3xl rounded-tl-[1px]">

            <div className="bg-slate-950 shadow-base rounded-md drop-shadow-lg shadow-indigo-700 px-5 sm:px-3 md:px-5 lg:px-6 py-6 sm:py-6 md:py-6 lg:py-7  rounded-tr-3xl rounded-tl-[1px]  h-[300px] lg:h-[310px] md:h-[300px] sm:h-[260px] ">
                <h2 className="text-2xl sm:text-xl md:text-2xl font-medium text-white    md:pt-2">Getting started with the API</h2>
                <p className="text-base sm:text-sm md:text-base text-white my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolore odio reiciendis hic eum numquam laudantium quo asperiores repellendus natus.</p>
                <button className="text-blue-800 group-hover:translate-x-1 group-hover:duration-75 ease-in group-hover:bg-gradient-to-r from-indigo-500 to-purple-500  rounded-md group-hover:text-white   px-6   my-2 py-2 ">Read more &#8594;</button>
            </div>
        </div>
    )
}