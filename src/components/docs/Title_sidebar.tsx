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
            <h2 className='text-2xl flex items-center my-2'> <span className='mr-2'><BiUnite/> </span> Wave Doc !</h2>
            {/* dashboard section */}
           <div className='my-2'> 
            <h3 className='text-sm my-2 uppercase'>Dashboard</h3>
            <div className='grid grid-rows-4 gap-2 justify-start'>
                <ul className='text-white flex gap-2 justify-start items-center hover:bg-gray-700 active:bg-gray-700 bg-indigo-950   w-50 px-8  hover:cursor-pointer py-2 rounded-lg shadow-md '>
                    <span className='text-xl'>
                        <IoIosHome />
                    </span>
                    <h4 className='font-medium text-base'>Overview</h4>
                    <span className='text-base ml-3'><IoIosArrowForward/></span>
                </ul>
                <ul className='text-white flex gap-2 justify-start items-center hover:bg-gray-700 active:bg-gray-700 bg-indigo-950   w-50 px-8  hover:cursor-pointer py-2 rounded-lg shadow-md '>
                    <span className='text-xl'>
                        <HiDocumentText />
                    </span>
                    <h4 className='font-medium text-base'>Documentation</h4>
                    <span className='text-base ml-3'><IoIosArrowForward/></span>
                </ul>
                <ul className='text-white flex gap-2 justify-start hover:bg-gray-700 active:bg-gray-700 bg-indigo-950   w-50 px-8  hover:cursor-pointer py-2 rounded-lg shadow-md '>
                    <span className='text-xl'>
                        <AiTwotoneProject />
                    </span>
                    <h4 className='font-medium text-base'>Current Projects <span className='ml-4'>10</span></h4>
                </ul>
            </div>
            </div>
            {/* Editor section */}
           <div className='my-2'> 
            <h3 className='text-sm my-2 uppercase'>Editor</h3>
            <div className='grid grid-rows-4 gap-2 justify-start'>
                <ul className='text-white flex gap-2 justify-start items-center hover:bg-gray-700 active:bg-gray-700 bg-indigo-950   w-50 px-8  hover:cursor-pointer py-2 rounded-lg shadow-md '>
                    <span className='text-xl'>
                        <CgIfDesign />
                    </span>
                    <h4 className='font-medium text-base'>Designer</h4>
                    <span className='text-base ml-3'><IoIosArrowForward/></span>
                </ul>
                <ul className='text-white flex gap-2 justify-start items-center hover:bg-gray-700 active:bg-gray-700 bg-indigo-950   w-50 px-8  hover:cursor-pointer py-2 rounded-lg shadow-md '>
                    <span className='text-xl'>
                        <HiColorSwatch />
                    </span>
                    <h4 className='font-medium text-base'>Color System</h4>
                    <span className='text-base ml-3'><IoIosArrowForward/></span>
                </ul>
                <ul className='text-white flex gap-2 justify-start items-center hover:bg-gray-700 active:bg-gray-700 bg-indigo-950   w-50 px-8  hover:cursor-pointer py-2 rounded-lg shadow-md '>
                    <span className='text-xl'>
                        <HiArrowUpOnSquare />
                    </span>
                    <h4 className='font-medium text-base'>Upload Now  </h4>
                    <span className='text-base ml-3'><IoIosArrowForward/></span>
                </ul>
            </div>
            </div>
            {/* report section */}
           <div className='my-2'> 
            <h3 className='text-sm my-2 uppercase'>Report</h3>
            <div className='grid grid-rows-4 gap-2 justify-start'>
                <ul className='text-white flex gap-2 justify-start items-center hover:bg-gray-700 active:bg-gray-700 bg-indigo-950   w-50 px-8  hover:cursor-pointer py-2 rounded-lg shadow-md '>
                    <span className='text-xl'>
                        <BsStopwatchFill />
                    </span>
                    <h4 className='font-medium text-base'>Scheduled  </h4>
                    <span className='text-base ml-3'><IoIosArrowForward/></span>
                </ul>
                <ul className='text-white flex gap-2 justify-start items-center hover:bg-gray-700 active:bg-gray-700 bg-indigo-950   w-50 px-8  hover:cursor-pointer py-2 rounded-lg shadow-md '>
                    <span className='text-xl'>
                        <AiFillPropertySafety />
                    </span>
                    <h4 className='font-medium text-base'>Perform  </h4>
                    <span className='text-base ml-3'><IoIosArrowForward/></span>
                </ul>
                 
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