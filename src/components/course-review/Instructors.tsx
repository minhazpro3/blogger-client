import Image from 'next/image'
import React from 'react'
import { AiOutlineTeam } from "react-icons/ai"
import ReactStars from 'react-rating-star-with-type'


const Instructors = () => {

    interface teacherType {
        id: number;
        name: string;
        title: string;
        students: number;
        review: number;
        profilePic: string;
        desc: string
    }

    const teachers: teacherType[] = [
        {
            id: 1,
            name: "Robert Jhon",
            title: "Software Engineer",
            students: 2522,
            review: 4.5,
            profilePic: "https://i.ibb.co/xSDcP0R/details-instructors01.jpg",
            desc: "Donald Logan has more than 15 years’ experience as a project management consultant, educator, technology consultant, business know."
        },
        {
            id: 2,
            name: "Adelide Emille",
            title: "Web Developer",
            students: 1245,
            review: 4.7,
            profilePic: "https://i.ibb.co/JvTmk06/details-instructors02.jpg",
            desc: "Donald Logan has more than 15 years’ experience as a project management consultant, educator, technology consultant, business know."
        },
    ]


    return (
        <div>
            <div className='relative'>

                <h2 className='text-2xl'>Your Instructors!</h2>
                <div className="h-[2px] absolute top-8 opacity-20  bg-blue-800 w-full" > </div>
            </div>
            <div className='flex flex-col gap-y-3 my-6'>
                {teachers.map((teacher, index) => (<div>
                    <div className='flex flex-row gap-x-3'>
                        <div className='relative w-[250px]  h-[220px] '>
                            <Image className='rounded-lg' fill src={teacher.profilePic} alt='instructors' />
                        </div>
                        <div>
                            <h2 className='text-xl'>{teacher.name}</h2>
                            <h5>{teacher.title}</h5>
                            <div className='flex flex-row gap-x-2'>
                                <span className='flex flex-row gap-x-2 items-center'><AiOutlineTeam /> {teacher.students} Students</span>

                                <div className='flex flex-row gap-x-2'>
                                    <ReactStars
                                        // onChange={onChange} 
                                        value={4.2}
                                        // edit={true}  
                                        activeColors={["yellow",]}
                                    /> ({teacher.review})
                                </div>
                            </div>
                            <div className=' '>
                                <div className="h-[2px] my-4 opacity-20  bg-blue-800 w-full" > </div>
                            </div>
                            <div className='relative'>
                                <p>{teacher.desc}</p>
                                <button className='border-2 my-4 hover:border-blue-900 hover:bg-white bg-blue-950 text-white border-white hover:text-blue-900 font-2xl hover:first-letter:bg-opacity-50 rounded-md px-4 py-2'>Details &#8658;</button>
                            </div>
                        </div>
                    </div>
                </div>))}
            </div>
        </div>
    )
}

export default Instructors