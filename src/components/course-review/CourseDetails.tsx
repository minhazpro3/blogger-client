import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import Instructors from './Instructors'
const CourseDetails = () => {
  return (
    <div className='text-white my-12'>
    <p>This tutorial will help you learn quickly and thoroughly. Lorem ipsum, or lipsum as it is sometimes known, iaws dumm text used in laying out print, graphic or web designs. Lorem ipsum dolor sit amet, consectetuer adipiscingawr elit onec odio. Quisque volutpat mattis eros.</p>
    <p className='my-4'>This tutorial will help you learn quickly and thoroughly. Lorem ipsum, or lipsum as it is sometimes known, iaws dumm text used in laying out print, graphic or web designs. Lorem ipsum dolor sit amet, consectetuer adipiscingawr elit onec odio. Quisque volutpat mattis eros.</p>
    <div className='my-8 relative'>
        <h2 className='text-2xl'>What Will You Learn?</h2>
        <div className="h-[2px] absolute top-8 opacity-20  bg-blue-800 w-full" > </div>
        <h2 className='mt-8'>This tutorial will help you learn quickly and thoroughly. Lorem ipsum, or lipsum as it is sometimes known, iaws dumm text used in laying out print, graphic or web designsm dolor sit amet.</h2>
        <div className='mt-6 flex justify-start gap-x-12'>
            <div className='  flex flex-col gap-3'>
                <span className='  flex gap-x-2 items-center'><AiFillCheckCircle className=' text-blue-800 bg-white rounded-full' size={25} /> Become a Javascript Developer.</span>
                <span className='  flex gap-x-2 items-center'><AiFillCheckCircle className=' text-blue-800 bg-white rounded-full' size={25} /> You will be able to add JS Developer.</span>
                <span className='  flex gap-x-2 items-center'><AiFillCheckCircle className=' text-blue-800 bg-white rounded-full' size={25} /> Build & test a full website.</span>
                <span className='  flex gap-x-2 items-center'><AiFillCheckCircle className=' text-blue-800 bg-white rounded-full' size={25} /> Create your first Js brief & persona.</span>
                <span className='  flex gap-x-2 items-center'><AiFillCheckCircle className=' text-blue-800 bg-white rounded-full' size={25} /> How to use Third party kits.</span>
                <span className='  flex gap-x-2 items-center'><AiFillCheckCircle className=' text-blue-800 bg-white rounded-full' size={25} /> Develop your soft skills and guidelines</span>
                <span className='  flex gap-x-2 items-center'><AiFillCheckCircle className=' text-blue-800 bg-white rounded-full' size={25} /> All the techniques used by Full Stack professionals</span>
            </div>
            <div className=' flex flex-col gap-3'>
                <span className='  flex gap-x-2 items-center'><AiFillCheckCircle className=' text-blue-800 bg-white rounded-full' size={25} /> Become a Javascript Developer.</span>
                <span className='  flex gap-x-2 items-center'><AiFillCheckCircle className=' text-blue-800 bg-white rounded-full' size={25} /> You will be able to add JS Developer.</span>
                <span className='  flex gap-x-2 items-center'><AiFillCheckCircle className=' text-blue-800 bg-white rounded-full' size={25} /> Build & test a full website.</span>
                <span className='  flex gap-x-2 items-center'><AiFillCheckCircle className=' text-blue-800 bg-white rounded-full' size={25} /> Create your first Js brief & persona.</span>
                <span className='  flex gap-x-2 items-center'><AiFillCheckCircle className=' text-blue-800 bg-white rounded-full' size={25} /> How to use Third party kits.</span>
                <span className='  flex gap-x-2 items-center'><AiFillCheckCircle className=' text-blue-800 bg-white rounded-full' size={25} /> Develop your soft skills and guidelines</span>
            </div>

        </div>
    </div>
    <div className='my-16 relative'>
        <h2 className='text-2xl'>Requirements!</h2>
        <div className="h-[2px] absolute top-8 opacity-20  bg-blue-800 w-full" > </div>
        <h2 className='my-8'>This tutorial will help you learn quickly and thoroughly. Lorem ipsum, or lipsum as it is sometimes
        </h2>
        <div className='mt-6 flex justify-start gap-x-12'>
            <div className='  flex flex-col gap-3'>
                <span className='  flex gap-x-2 items-center'><AiFillCheckCircle className=' text-blue-800 bg-white rounded-full' size={25} /> Become a Javascript Developer.</span>
                <span className='  flex gap-x-2 items-center'><AiFillCheckCircle className=' text-blue-800 bg-white rounded-full' size={25} /> You will be able to add JS Developer.</span>
                <span className='  flex gap-x-2 items-center'><AiFillCheckCircle className=' text-blue-800 bg-white rounded-full' size={25} /> Build & test a full website.</span>

            </div>
            <div className=' flex flex-col gap-3'>
                <span className='  flex gap-x-2 items-center'><AiFillCheckCircle className=' text-blue-800 bg-white rounded-full' size={25} /> Become a Javascript Developer.</span>
                <span className='  flex gap-x-2 items-center'><AiFillCheckCircle className=' text-blue-800 bg-white rounded-full' size={25} /> You will be able to add JS Developer.</span>

            </div>

        </div>
    </div>
    <Instructors/>
</div>
  )
}

export default CourseDetails