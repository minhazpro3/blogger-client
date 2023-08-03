import Image from 'next/image'
import React from 'react'
import Image1 from "../../../../public/images/team-meeting-to-discuss-strategies-1024x670.jpg"
import { AiOutlineTeam,AiFillYoutube,AiFillInstagram,AiFillTwitterCircle,AiFillFacebook ,AiOutlineShareAlt} from 'react-icons/ai'
import { HiLanguage } from 'react-icons/hi2'
import { BiCategory } from 'react-icons/bi'
 



const RightMenu = () => {
    return (
        <div >
            <div className='w-72 h-[500px] bg-[#041734] p-4 border-2 rounded-md border-white'>
                <div className='relative w-full h-48'>
                    <Image src={Image1} fill alt='image1' />
                </div>
                <div className='my-2 text-white text-center'>
                    <h2 className='text-xl'>Cost: <span className='text-2xl px-2 font-bold'>$45.00</span><del>$85.00</del></h2>
                    <button className='text-base font-bold px-8 py-3 rounded-lg my-2 bg-[#043434]  hover:bg-[#042834]   '>CONTINUE THIS</button>
                </div>
                <div>
                    <h3 className='text-white'>Include This Course</h3>
                    <div className='text-white'>
                        <div>
                            <div className='flex justify-between'>
                                <span className='flex flex-row gap-x-2 items-center '><AiOutlineTeam />  Students</span>
                                <p>180+</p>
                            </div>
                        </div>

                        <div className="h-[2px]  top-8 opacity-20  bg-blue-800 w-full" > </div>
                    </div>
                    <div className='text-white'>
                        <div>
                            <div className='flex justify-between'>
                                <span className='flex flex-row gap-x-2 items-center '><HiLanguage />  Laguage</span>
                                <p>English</p>
                            </div>
                        </div>

                        <div className="h-[2px]  top-8 opacity-20  bg-blue-800 w-full" > </div>
                    </div>
                    <div className='text-white'>
                        <div>
                            <div className='flex justify-between'>
                                <span className='flex flex-row gap-x-2 items-center '><BiCategory />  Category</span>
                                <p>Develop</p>
                            </div>
                        </div>

                        <div className="h-[2px]  top-8 opacity-20  bg-blue-800 w-full" > </div>
                    </div>
                    <div>
                        <div className='my-3 text-white opacity-75'>
                         <div className='flex justify-between'>
                         <span className='flex gap-x-2 items-center '> <AiOutlineShareAlt/> Share</span>
                         <span className='flex gap-x-2 items-center'>
                            <AiFillFacebook/> <AiFillInstagram/> <AiFillTwitterCircle/> <AiFillYoutube/>
                         </span>
                         </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightMenu