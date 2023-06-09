import React from 'react'
import { HiDocumentText } from "react-icons/hi";
import { IoIosHome } from "react-icons/io";
import { AiTwotoneProject } from "react-icons/ai";

const Title_sidebar = () => {
    return (
        <div className='my-8'>
            <h2 className='text-2xl'>Wave Doc !</h2>
           <div className='my-4'> 
            <h3 className='text-sm my-2 uppercase'>Dashboard</h3>
            <div className='grid grid-rows-4 gap-2 justify-start'>
                <ul className='text-white flex gap-2 justify-start hover:bg-gray-700 active:bg-gray-700 bg-indigo-950   w-50 px-8  hover:cursor-pointer py-2 rounded-lg shadow-md '>
                    <span className='text-xl'>
                        <IoIosHome />
                    </span>
                    <h4 className='font-medium text-base'>Overview</h4>
                </ul>
                <ul className='text-white flex gap-2 justify-start hover:bg-gray-700 active:bg-gray-700 bg-indigo-950   w-50 px-8  hover:cursor-pointer py-2 rounded-lg shadow-md '>
                    <span className='text-xl'>
                        <HiDocumentText />
                    </span>
                    <h4 className='font-medium text-base'>Documentation</h4>
                </ul>
                <ul className='text-white flex gap-2 justify-start hover:bg-gray-700 active:bg-gray-700 bg-indigo-950   w-50 px-8  hover:cursor-pointer py-2 rounded-lg shadow-md '>
                    <span className='text-xl'>
                        <AiTwotoneProject />
                    </span>
                    <h4 className='font-medium text-base'>Current Projects <span className='ml-4'>10</span></h4>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Title_sidebar