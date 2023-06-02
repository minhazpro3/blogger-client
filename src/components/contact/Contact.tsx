/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-misused-promises */
"use client"
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
import Image from "next/image";
interface IFormInput {
  username: string;
  email: string;
  phone: number;
  message: any;

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
    <div style={{
      backgroundImage: `url(${bgImage})`, backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '700px',
    }}>
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
                    <h4 className="text-white text-xl ">Welcome to TOKEN IT Solution</h4>

                    <div className="flex justify-center py-6  h-56  relative">
                      <Image
                        className=" rounded-3xl w-36 absolute"
                        src="https://i.ibb.co/St2VrKR/people-working-call-center-removebg-preview.png"
                        fill
                        alt=""
                      />
                    </div>


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
                        <span className=" text-white">
                          {" "}
                          <CgProfile />
                        </span>{" "}
                        Token IT
                      </h3>

                      <h3 className=" text-white font-medium text-base flex items-center gap-2 opacity-70">
                        <span className=" text-white">
                          {" "}
                          <MdLocationPin />
                        </span>{" "}
                        East-road 1299, Jamaica
                      </h3>

                      <h3 className=" text-white font-medium text-base flex items-center gap-2 opacity-70">
                        <span className=" text-white">
                          {" "}
                          <IoIosCall />
                        </span>{" "}
                        (+88) 116-5465*245
                      </h3>

                      <h3 className=" text-white font-medium mb-12 text-base flex items-center gap-2 opacity-70">
                        <span className=" text-white">
                          {" "}
                          <HiOutlineMail />
                        </span>{" "}
                        token@contact.com
                      </h3>

                      <p className="text-center text-gray-500 text-xs">
                        &copy;2023 Unique gamers. All rights reserved.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-7 self-end flex justify-center">
                  <div className="w-full max-w-xs ">
                    <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                      {/* user name input */}
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                          Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          {...register("username")}
                          id="username" type="text" placeholder="username" />
                      </div>
                      {/* email input */}
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                          Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          {...register("email")}
                          id="email" type="text" placeholder="email" />
                      </div>
                      {/* number input */}
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                          Phone
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          {...register("phone")}
                          id="phone" type="number" placeholder="phone" />
                      </div>
                      {/* message input */}
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                          Message
                        </label>
                        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          {...register("message")}
                          id="message" placeholder="message..." />
                      </div>

                      <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                          Send
                        </button>

                      </div>
                    </form>

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