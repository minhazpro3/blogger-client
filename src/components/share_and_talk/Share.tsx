import React from 'react'

const Share = () => {
    return (
        <div>

            <div className='container mx-auto px-8 md:px-0'>
                <div className='w-full group relative h-[300px] bg-transparent border-2 border-slate-800 rounded-lg py-12 px-10'>
                    <h2 className='text-white text-xl'>Community</h2>
                    <h1 className='text-white text-3xl sm:absolute bottom-12 my-5 sm:my-0 '>Share here, There <br /> and anywhere</h1>
                    <button className='text-white bg-purple-700 rounded-md py-2 px-6 sm:absolute bottom-12 w-36 sm:right-10'>Expo <span className='group-hover:pl-3 transition-all duration-150 ml-4 ' >&#8594;</span></button>
                </div>
            </div>
        </div>
    )
}

export default Share