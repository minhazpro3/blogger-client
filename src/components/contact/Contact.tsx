/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";
import "aos/dist/aos.css";
import AOS from "aos";

import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdLocationPin } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
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
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const bgImage =
    "https://i.ibb.co/5nJrtjr/businessman-touching-virtual-screen.jpg";

  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    AOS.init();
  });
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "700px",
      }}
    >
      <div
        data-aos="zoom-in-up"
        className="modal fade fixed inset-0  left-0 top-0 z-50  h-full w-full items-center   justify-center overflow-y-auto outline-none focus:outline-none "
      >
        <div className="relative mx-auto my-6 w-auto max-w-3xl ">
          <div className=" flex		 bg-indigo-950 opacity-90   ">
            <div className=" container mx-auto px-8 md:px-0 ">
              <div className=" mx-8 my-4 grid gap-8 pb-6 pt-4 md:grid-cols-12 ">
                <div className="md:col-span-5">
                  <div>
                    <h4 className="text-xl text-white ">
                      Welcome to TOKEN IT Solution
                    </h4>

                    <div className="relative flex h-56  justify-center  py-6">
                      <Image
                        className=" absolute w-36 rounded-3xl"
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
                      <h3 className=" flex items-center gap-2 text-base font-medium text-white opacity-70">
                        <span className=" text-white">
                          {" "}
                          <CgProfile />
                        </span>{" "}
                        Token IT
                      </h3>

                      <h3 className=" flex items-center gap-2 text-base font-medium text-white opacity-70">
                        <span className=" text-white">
                          {" "}
                          <MdLocationPin />
                        </span>{" "}
                        East-road 1299, Jamaica
                      </h3>

                      <h3 className=" flex items-center gap-2 text-base font-medium text-white opacity-70">
                        <span className=" text-white">
                          {" "}
                          <IoIosCall />
                        </span>{" "}
                        (+88) 116-5465*245
                      </h3>

                      <h3 className=" mb-12 flex items-center gap-2 text-base font-medium text-white opacity-70">
                        <span className=" text-white">
                          {" "}
                          <HiOutlineMail />
                        </span>{" "}
                        token@contact.com
                      </h3>

                      <p className="text-center text-xs text-gray-500">
                        &copy;2023 Unique gamers. All rights reserved.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center self-end md:col-span-7">
                  <div className="w-full max-w-xs ">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"
                    >
                      {/* user name input */}
                      <div className="mb-4">
                        <label
                          className="mb-2 block text-sm font-bold text-gray-700"
                          htmlFor="username"
                        >
                          Username
                        </label>
                        <input
                          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                          {...register("username")}
                          id="username"
                          type="text"
                          placeholder="username"
                        />
                      </div>
                      {/* email input */}
                      <div className="mb-4">
                        <label
                          className="mb-2 block text-sm font-bold text-gray-700"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                          {...register("email")}
                          id="email"
                          type="text"
                          placeholder="email"
                        />
                      </div>
                      {/* number input */}
                      <div className="mb-4">
                        <label
                          className="mb-2 block text-sm font-bold text-gray-700"
                          htmlFor="phone"
                        >
                          Phone
                        </label>
                        <input
                          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                          {...register("phone")}
                          id="phone"
                          type="number"
                          placeholder="phone"
                        />
                      </div>
                      {/* message input */}
                      <div className="mb-4">
                        <label
                          className="mb-2 block text-sm font-bold text-gray-700"
                          htmlFor="message"
                        >
                          Message
                        </label>
                        <textarea
                          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                          {...register("message")}
                          id="message"
                          placeholder="message..."
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <button
                          className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                          type="submit"
                        >
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
  );
};

export default Contact;
