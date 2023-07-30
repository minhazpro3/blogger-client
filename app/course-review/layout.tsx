import React from 'react'
import { Inter, Poppins, Roboto } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ subsets: ['latin'], weight: "400" })
const CourseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={roboto.className}>
      <div>

      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default CourseLayout