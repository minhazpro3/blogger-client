import Image from 'next/image'
import React from 'react'
import profStudent from "../../../public/images/comment01.png"
import ReactStars from 'react-rating-star-with-type'
const AllReview = () => {
    return (
        <div className=''>
            <div className='relative'>
                <h2 className='text-2xl text-white'>Reviews (01)
                </h2>
                <div className="h-[2px] absolute top-8 opacity-20  bg-blue-800 w-full" > </div>
            </div>
            <div className='flex gap-x-3 my-8'>
                <div className='w-[80px] h-[80px] relative'>
                    <Image src={profStudent} alt='' fill />
                </div>
                <div className='flex flex-col gap-y-1'>
                    <ReactStars
                        // onChange={onChange} 
                        value={4.2}
                        // edit={true}  
                        activeColors={["yellow",]}
                    />
                    <span className='text-blue-600 text-xl '>Shipon Roy <small className='text-sm opacity-50 text-white'>Aug 5, 2023</small></span>
                    <p className='text-white'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiu meature areawtyt totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                </div>
            </div>
        </div>
    )
}

export default AllReview