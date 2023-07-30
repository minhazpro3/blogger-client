'use client'
import React from 'react'
import Image from "next/image"
import instroctor from "../../../public/images/course_author02.png"
import { BiTime } from 'react-icons/bi'
import ReactStars from 'react-rating-star-with-type'

const ReviewBanner = () => {
  return (
    <div>
         <div className="relative w-full h-[400px] bg-blue-950">
        <div className='container mx-auto md:px-0 px-8'>
          <div className="absolute top-12">
            <h4 className=" inline-block px-3 text-white py-1 font-medium rounded-full text-base bg-pink-700">
              Easy to mastery
            </h4>
            <h1 className=" text-4xl font-semibold text-white mt-2 mb-4">
              Essential Beginners To Advanced Javascript Core <br /> Course For You 2023
            </h1>
            <p className=" font-medium text-white">Javascript tutorial will help you learn quickly and thoroughly orem ipsumor lipsum as it is sometime</p>
            <div className="my-6 flex gap-4">
              <div className="flex gap-x-3 items-center">
                <div>
                  <Image src={instroctor} alt="" />
                </div>
                <small className='text-white'>Asadulla Hil</small>
              </div>
              <div className="flex gap-x-3 items-center">
                <div className='text-white'>
                  <BiTime size={25} />
                </div>
                <small className='text-white'>30 min</small>
              </div>
              <div className="flex gap-x-3 items-center">
                <div>
                  <ReactStars
                    // onChange={onChange} 
                    value={4.2}
                    // edit={true}  
                    activeColors={["yellow",]}
                  />
                </div>
                <small className='text-white'>(4.6)</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewBanner