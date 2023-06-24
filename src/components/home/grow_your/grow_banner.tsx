"use client";
import React, { useRef, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { type IconType } from "react-icons/lib";
interface Menu {
  icon: IconType;
  name: string;
}
const menus: Menu[] = [
  {
    icon: AiFillHome,
    name: "Menu",
  },
  {
    icon: AiFillHome,
    name: "Services",
  },
  {
    icon: AiFillHome,
    name: "Solution",
  },
  {
    icon: AiFillHome,
    name: "About us",
  },
  {
    icon: AiFillHome,
    name: "Blogs",
  },
  {
    icon: AiFillHome,
    name: "Contact",
  },
];

export default function GrowBanner() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  const [active, setActive] = useState<Menu | undefined>(menus[0]);

  return (
    <div className="container mx-auto px-8 md:px-0">
      <div className="grid grid-cols-4  gap-4">
        <div className="col-span-3 rounded-lg bg-blue-900 bg-opacity-30 p-4">
          <h2 className="text-4xl text-white ">
            Grow your business with
            <br /> Beautiful And Unique Design
          </h2>
          <p className="my-3 text-base text-white">
            We strongly believe in user-centric services. hence We have
            successfully built a significant space in the market. <br /> And our
            motto in full fill customer demand by making them satisfied with
            growing their business.
          </p>
          <div className="relative flex h-[80px] w-[140px] items-center justify-center">
            <button className="absolute top-2/4 -translate-y-2/4 rounded-full text-white">
              Get Started
            </button>
            <div className="absolute top-0 -z-10 flex h-full w-full justify-center">
              <lottie-player
                className="!h-full !w-full"
                id="firstLottie"
                ref={ref}
                autoplay
                loop
                mode="normal"
                src="https://assets4.lottiefiles.com/packages/lf20_uOFWvo.json"
                style={{ width: "180px", height: "140px" }}
              ></lottie-player>
            </div>
          </div>
        </div>
        <div className="col-span-1 rounded-lg bg-blue-900 bg-opacity-30">
          <ul>
            {menus.map((menu, index) => {
              return (
                <li key={index}>
                  <button
                    onClick={() => setActive(menus[index])}
                    className={`flex w-full items-center justify-center gap-2 rounded py-4 text-center text-white ${
                      active?.name === menu.name
                        ? "bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600"
                        : ""
                    }`}
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-purple-600">
                      {<menu.icon size={28} />}
                    </span>
                    {menu.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
