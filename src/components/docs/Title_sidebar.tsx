import React from 'react'
import { HiDocumentText } from "react-icons/hi";
import { IoIosHome } from "react-icons/io";
import { AiTwotoneProject } from "react-icons/ai";
import { CgIfDesign } from "react-icons/cg";
import { BiUnite } from "react-icons/bi";
import { HiColorSwatch } from "react-icons/hi";
import { HiArrowUpOnSquare } from "react-icons/hi2";
import { BsStopwatchFill } from "react-icons/bs";
import { AiFillPropertySafety } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

const Title_sidebar = () => {
    return (
        <div className='my-8'>
            <h2 className='text-2xl flex items-center my-2'>
                 <span className='mr-2'><BiUnite/> </span> Wave Doc !</h2>
            {/* dashboard section */}
           <div className='mt-2'> 
            <h3 className='text-sm my-2 uppercase'>Dashboard</h3>
            <div className='grid grid-rows-4 gap-y-1 justify-start'>
                <button className='text-white flex gap-x-2 justify-start items-center py-0  w-50 px-8  hover:cursor-pointer  focus:text-indigo-400 focus:border-l-2 focus:border-indigo-400   hover:text-indigo-200 '>
                    <span className='text-base'>
                        <IoIosHome />
                    </span>
                    <h4 className='font-medium text-sm'>Overview</h4>
                    <span className='text-sm ml-3'><IoIosArrowForward/></span>
                </button>
                <button className='text-white flex gap-x-2 justify-start items-center py-0  w-50 px-8  hover:cursor-pointer  focus:text-indigo-400 focus:border-l-2 focus:border-indigo-400   hover:text-indigo-200 '>
                    <span className='text-base'>
                        <HiDocumentText />
                    </span>
                    <h4 className='font-medium text-sm'>Documentation</h4>
                    <span className='text-sm ml-3'><IoIosArrowForward/></span>
                </button>
                <button className='text-white flex gap-x-2 justify-start items-center py-0  w-50 px-8  hover:cursor-pointer  focus:text-indigo-400 focus:border-l-2 focus:border-indigo-400   hover:text-indigo-200'>
                    <span className='text-base'>
                        <AiTwotoneProject />
                    </span>
                    <h4 className='font-medium text-sm'>Current Projects <span className='ml-4'>10</span></h4>
                </button>
            </div>
            </div>
            {/* Editor section */}
           <div className='my-2'> 
            <h3 className='text-sm my-2 uppercase'>Editor</h3>
            <div className='grid grid-rows-4 gap-y-1 justify-start'>
                <button className='text-white flex gap-x-2 justify-start items-center py-0  w-50 px-8  hover:cursor-pointer  focus:text-indigo-400 focus:border-l-2 focus:border-indigo-400   hover:text-indigo-200'>
                    <span className='text-base'>
                        <CgIfDesign />
                    </span>
                    <h4 className='font-medium text-sm'>Designer</h4>
                    <span className='text-sm ml-3'><IoIosArrowForward/></span>
                </button>
                <button className='text-white flex gap-x-2 justify-start items-center py-0  w-50 px-8  hover:cursor-pointer  focus:text-indigo-400 focus:border-l-2 focus:border-indigo-400   hover:text-indigo-200'>
                    <span className='text-base'>
                        <HiColorSwatch />
                    </span>
                    <h4 className='font-medium text-sm'>Color System</h4>
                    <span className='text-sm ml-3'><IoIosArrowForward/></span>
                </button>
                <button className='text-white flex gap-x-2 justify-start items-center py-0  w-50 px-8  hover:cursor-pointer  focus:text-indigo-400 focus:border-l-2 focus:border-indigo-400   hover:text-indigo-200 '>
                    <span className='text-base'>
                        <HiArrowUpOnSquare />
                    </span>
                    <h4 className='font-medium text-sm'>Upload Now  </h4>
                    <span className='text-sm ml-3'><IoIosArrowForward/></span>
                </button>
            </div>
            </div>
            {/* report section */}
           <div className='mb-2'> 
            <h3 className='text-sm my-2 uppercase'>Report</h3>
            <div className='grid grid-rows-4 gap-y-1 justify-start'>
                <button className='text-white flex gap-x-2 justify-start items-center py-0  w-50 px-8  hover:cursor-pointer  focus:text-indigo-400 focus:border-l-2 focus:border-indigo-400   hover:text-indigo-200 '>
                    <span className='text-base'>
                        <BsStopwatchFill />
                    </span>
                    <h4 className='font-medium text-sm'>Scheduled  </h4>
                    <span className='text-sm ml-3'><IoIosArrowForward/></span>
                </button>
                <button className='text-white flex gap-x-2 justify-start items-center py-0  w-50 px-8  hover:cursor-pointer  focus:text-indigo-400 focus:border-l-2 focus:border-indigo-400   hover:text-indigo-200'>
                    <span className='text-base'>
                        <AiFillPropertySafety />
                    </span>
                    <h4 className='font-medium text-sm'>Perform  </h4>
                    <span className='text-sm ml-3'><IoIosArrowForward/></span>
                </button>
                 
            </div>
            </div>

            {/* setting button */}
            <button className='text-white flex gap-2 justify-start items-center bg-gray-700 active:bg-gray-700     w-50 px-8  hover:cursor-pointer py-2 rounded-lg shadow-md '> 
            <span className='mr-2 text-xl'><AiFillSetting/></span>
             Settings   <span className='text-base ml-3'><IoIosArrowForward/></span></button>
             

        </div>
    )
}

export default Title_sidebar