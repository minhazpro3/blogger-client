/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-misused-promises */

import "aos/dist/aos.css";
import AOS from 'aos';

import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdLocationPin } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { BsDownload } from "react-icons/bs";
import { useForm, SubmitHandler } from "react-hook-form";
interface IFormInput {
  username: string;
  email:string;
  phone:number;
  message:any;

}
const Contact = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data)


  const bgImage = "https://i.ibb.co/5nJrtjr/businessman-touching-virtual-screen.jpg"

  const [showModal, setShowModal] = useState(true)

  useEffect(() => {
    AOS.init();
  });
  return (
    <div style={{backgroundImage:`url(${bgImage})`,  backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '700px',}}>
      <div
        data-aos="zoom-in-up"
        className="justify-center items-center top-0 left-0  w-full h-full outline-none  overflow-y-auto inset-0 z-50   focus:outline-none modal fade fixed "
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl ">
          <div className=" bg-indigo-950		 opacity-90 flex   ">
            <div className=" container mx-auto px-8 md:px-0 ">
             
              <div className=" grid md:grid-cols-12 gap-8 mx-8 my-4 pt-4 pb-6 ">
                <div className="md:col-span-5">
                  <div>
                  <h4 className="text-white ">Welcome to TOKEN IT Solution</h4>
 
                    <div>
                      <img
                        className=" rounded-3xl w-36"
                        src="https://i.ibb.co/St2VrKR/people-working-call-center-removebg-preview.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        className=" rounded-3xl w-36"
                        src="https://i.ibb.co/pbkmkbC/hot-line-contact-us-call-center-search-interface-removebg-preview.png"
                        alt=""
                      />
                    </div>
                    <h3 className=" text-white font-medium text-4xl">
                      MD <span className=" text-red-600">MINHAZ</span>
                    </h3>
                    <h4 className="text-white text-xl font-medium">
                      Web Developer
                    </h4>
                    <div>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/md-minhaz/"
                        className=" "
                      >
                        <i
                          style={{ color: "#2867B2" }}
                          className="fab fa-linkedin text-xl "
                        ></i>
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/minhazpro3"
                        className=" m-3"
                        style={{ color: "#ffffffff" }}
                      >
                        <i className="fab fa-github-square text-xl "></i>
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.facebook.com/minhaz.moyna/"
                        className=""
                      >
                        <i
                          className="fab fa-facebook-square text-xl "
                          style={{ color: "#4267B2" }}
                        ></i>
                      </a>
                    </div>
                    <div className="mt-3">
                      <h3 className=" text-white font-medium text-base flex items-center gap-2 opacity-70">
                        <span className=" text-red-600">
                          {" "}
                          <CgProfile />
                        </span>{" "}
                        Md Minhaz
                      </h3>
                      <p className="text-white text-base font-medium opacity-50">
                        ------------------------------------
                      </p>
                      <h3 className=" text-white font-medium text-base flex items-center gap-2 opacity-70">
                        <span className=" text-red-600">
                          {" "}
                          <MdLocationPin />
                        </span>{" "}
                        Bogura, Rajshahi
                      </h3>
                      <p className="text-white text-base font-medium opacity-50">
                        ------------------------------------
                      </p>
                      <h3 className=" text-white font-medium text-base flex items-center gap-2 opacity-70">
                        <span className=" text-red-600">
                          {" "}
                          <IoIosCall />
                        </span>{" "}
                        (+88) 01737-833726
                      </h3>
                      <p className="text-white text-base font-medium opacity-50">
                        ------------------------------------
                      </p>
                      <h3 className=" text-white font-medium mb-12 text-base flex items-center gap-2 opacity-70">
                        <span className=" text-red-600">
                          {" "}
                          <HiOutlineMail />
                        </span>{" "}
                        minhazpro1@gmail.com
                      </h3>

                      <a
                        className="rounded-full flex items-center justify-center gap-4 bg-red-600 hover:text-indigo-700 hover:bg-white font-medium text-white  py-3  "
                        href="https://drive.google.com/file/d/1Lmwgm2vYZblFfTocGtT8GgvxXJe8-GpA/view?usp=sharing"
                        target="_blank"
                      >
                        Resume <BsDownload />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-7 self-center">
                  <div className="w-full max-w-xs">
                    <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                      {/* user name input */}
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                          Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        {...register("username")}
                        id="username" type="text" placeholder="Username"  />
                      </div>
                      {/* email input */}
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                          Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        {...register("email")}
                        id="email" type="text" placeholder="Email"  />
                      </div>
                      {/* number input */}
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                          Phone
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        {...register("phone")}
                        id="phone" type="number" placeholder="Phone"  />
                      </div>
                      {/* message input */}
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                          Message
                        </label>
                        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        {...register("message")}
                        id="message"  placeholder="Message"  />
                      </div>
                     
                      <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                          Sign In
                        </button>
                         
                      </div>
                    </form>
                    <p className="text-center text-gray-500 text-xs">
                      &copy;2023 Unique gamers. All rights reserved.
                    </p>
                  </div>
                  <div className="relative">
                    <button
                      className="text-red-500 background-transparent font-bold  uppercase  py-2 text-sm outline-none focus:outline-none absolute md:right-4   mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact