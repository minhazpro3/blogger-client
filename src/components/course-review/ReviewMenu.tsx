'use client'
import React,{useState} from 'react'

const ReviewMenu = () => {
    const [value,setValue]=useState("")
  return (
    <div className=" container mx-auto px-8 md:px-0">
    <div className="mt-14 mb-6 relative">
      <div className="flex gap-x-8">
        <button onClick={()=>setValue("details")} className={`${ value ==="details" ? "text-xl border-b-2 text-white  px-4 ":"text-blue-800 text-xl px-4 "}`}>Details</button>
        <button onClick={()=>setValue("review")} className={`${ value ==="review" ?"text-xl border-b-2 text-white  px-4 ":"text-blue-800 text-xl px-4 "}`}>Review</button>
      </div>
      <div className="h-[2px] absolute top-[28px] -z-10 bg-blue-800 w-full" > </div>
    </div>
  </div>
  )
}

export default ReviewMenu