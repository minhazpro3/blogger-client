import React from 'react'
import { Inter, Poppins, Roboto } from 'next/font/google'
import ReviewBanner from '@/components/course-review/ReviewBanner'
const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ subsets: ['latin'], weight: "400" })
const CourseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={roboto.className}>
      <ReviewBanner/>
      <div className='w-full container mx-auto px-8 md:px-0 '>
      <div className='w-[70%]' >
        {children}

      </div>
      <div className='w-[30%]'>
        
      </div>
      </div>
    </div>
  )
}

export default CourseLayout