import React from 'react'
import { Inter, Poppins, Roboto } from 'next/font/google'
import ReviewBanner from '@/components/course-review/ReviewBanner'
import RightMenu from '@/components/course-review/right-menu/RightMenu'
const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ subsets: ['latin'], weight: "400" })
const CourseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={roboto.className}>
      <ReviewBanner />
      <div className='w-full container mx-auto px-8 md:px-0 '>
        <div className='grid grid-cols-12 gap-x-6 justify-between'>
          <div className='col-span-9' >
            {children}

          </div>
          <div className='col-span-3'>
            <div className='relative' >
              <div className='absolute -top-44 '>
                <RightMenu  />

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseLayout