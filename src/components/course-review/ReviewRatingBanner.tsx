import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import ReactStars from 'react-rating-star-with-type'
import AllReview from './AllReview'
const ReviewRatingBanner = () => {
    return (
        <div>
            <div className='text-white my-8'>
                <h2 className='text-2xl my-4'>Student Ratings & Reviews!</h2>
                <div className='border-2 border-gray-800 p-8 bg-gray-950 rounded-lg    '>
                    <div className='flex items-center gap-x-4  w-full'>

                        {/* total rating */}
                        <div className='bg-gray-800 p-8 w-56 rounded-xl shadow-xl'>
                            <div className='  flex flex-col gap-y-2 items-center'>
                                <h1 className='text-blue-800 text-4xl font-semibold  '>4.8</h1>

                                <ReactStars
                                    // onChange={onChange} 
                                    value={4.2}
                                    // edit={true}  
                                    activeColors={["yellow",]}
                                />
                                <p>Total Rating (3)</p>
                            </div>
                        </div>
                        {/* review progress */}
                        <div className='w-full flex flex-col gap-y-2'>
                            <div className='flex flex-row gap-x-2 items-center'>
                                <span>5</span>
                                <AiFillStar size={20} fill='yellow' />
                                <div className=" w-full h-[5px] bg-neutral-600">
                                    <div
                                        className="bg-yellow-400  p-0 h-[5px]   "
                                        style={{ width: "90%" }}
                                    >

                                    </div>

                                </div>
                            </div>
                            <div className='flex flex-row gap-x-2 items-center  '>
                                <span>4</span>
                                <AiFillStar size={20} fill='yellow' />
                                <div className=" w-full h-[5px] bg-neutral-600">
                                    <div
                                        className="bg-yellow-400  p-0 h-[5px]   "
                                        style={{ width: "70%" }}
                                    >

                                    </div>

                                </div>
                            </div>
                            <div className='flex flex-row gap-x-2 items-center  '>
                                <span>3</span>
                                <AiFillStar size={20} fill='yellow' />
                                <div className=" w-full h-[5px] bg-neutral-600">
                                    <div
                                        className="bg-yellow-400  p-0 h-[5px]   "
                                        style={{ width: "60%" }}
                                    >

                                    </div>

                                </div>
                            </div>
                            <div className='flex flex-row gap-x-2 items-center  '>
                                <span>2</span>
                                <AiFillStar size={20} fill='yellow' />
                                <div className=" w-full h-[5px] bg-neutral-600">
                                    <div
                                        className="bg-yellow-400  p-0 h-[5px]   "
                                        style={{ width: "50%" }}
                                    >

                                    </div>

                                </div>
                            </div>
                            <div className='flex flex-row gap-x-2 items-center  '>
                                <span>1</span>
                                <AiFillStar size={20} fill='yellow' />
                                <div className=" w-full h-[5px] bg-neutral-600">
                                    <div
                                        className="bg-yellow-400  p-0 h-[5px]   "
                                        style={{ width: "30%" }}
                                    >

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <AllReview/>
        </div>
    )
}

export default ReviewRatingBanner