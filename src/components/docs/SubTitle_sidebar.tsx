import { IoIosArrowForward } from "react-icons/io";



export default function SubtitleHome() {

    return (
        <div>
            <div className="my-8">

                <div className='grid grid-rows-4 gap-y-1 justify-center'>
                    <p className="my-1 p-0 m-0 self-center text-indigo-200 ">On this page</p>
                    <div className="group mt-1" >
                        <h4 className="mb-2 group-hover:text-indigo-400  group-focus:text-indigo-400 ">Basic usage</h4>
                        <button className="flex justify-center items-center  text-sm focus:text-indigo-400">
                            <span><IoIosArrowForward /></span>
                            Setting the font size</button>
                        <button className="flex justify-center items-center   text-sm focus:text-indigo-400">
                            <span><IoIosArrowForward /></span>
                            Setting the line-hight</button>

                    </div>
                    <div className="group mt-1">
                        <h4 className="mb-2 group-hover:text-indigo-400 group-focus:text-indigo-400 ">Applying conditionally</h4>
                        <button className="flex justify-center items-center  text-sm focus:text-indigo-400">
                            <span><IoIosArrowForward /></span>
                            Hover, focus, and other states</button>
                        <button className="flex justify-center items-center   text-sm focus:text-indigo-400">
                            <span><IoIosArrowForward /></span>
                            Breakpoints and media</button>

                    </div>
                    <div className="group mt-1">
                        <h4 className="mb-2 group-hover:text-indigo-400 group-focus:text-indigo-400 ">Using custom values</h4>
                        <button className="flex justify-center items-center  text-sm focus:text-indigo-400">
                            <span><IoIosArrowForward /></span>
                            Customizing your theme</button>
                        <button className="flex justify-center items-center   text-sm focus:text-indigo-400">
                            <span><IoIosArrowForward /></span>
                            Arbitrary values</button>

                    </div>
                </div>
            </div>
        </div>
    )
}