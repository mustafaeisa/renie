import React from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/src/all";
const btns = [
  <button className=" absolute top-0 left-3 bg-white text-black rounded-full px-3 py-0.5">
    step 1
  </button>,
  <button className=" absolute top-[30%] left-[25%] bg-white text-black rounded-full px-3 py-0.5">
    step 2
  </button>,
  <button className=" absolute top-[59%] left-[60%] bg-white text-black rounded-full px-3 py-0.5">
    step 3
  </button>,
  <button className=" absolute bottom-3 left-3 bg-white text-black rounded-full px-3 py-0.5">
    step 4
  </button>,
];

function Transform({ items, curentId }) {
  gsap.registerPlugin(MotionPathPlugin);

  gsap.to("#rect", {
    duration: 10,
    repeat: 12,
    repeatDelay: 3,

    motionPath: {
      path: "#path",
      align: "#path",
      autoRotate: true,
      alignOrigin: [0.5, 0.5],
    },
  });
  // GSDevTools.create({ animation: amimtae });
  return (
    <div className=" relative w-[300px] md:w-[500px]  bg-gradient-to-br from-white to-[#4a61dd]  rounded-xl overflow-hidden ">
      <div className=" absolute h-full w-full">
        {btns.map((btn, i) => (
          <div key={i} className=" bg-white">
            {btn}
          </div>
        ))}
      </div>
      <svg
        height="auto"
        viewBox="-10 -10 479 380"
        fill="none"
        className="path  w-full h-full "
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="path"
          d="M57.9231 1.02979H401.077C432.515 1.02979 458 26.5151 458 57.9529C458 89.3907 432.515 114.876 401.077 114.876L57.9231 114.069C26.4854 114.069 1 139.554 1 170.992C1 202.43 26.4854 227.915 57.9232 227.915L401.077 227.108C432.515 227.108 458 252.593 458 284.031C458 315.468 432.515 340.954 401.077 340.954H57.9232"
          stroke="url(#paint0_linear_2265_4150)"
          strokeWidth="1.61484"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_2265_4150"
            x1="128.169"
            y1="1.02978"
            x2="508.706"
            y2="241.902"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4765E6"></stop>
            <stop offset="0.46" stopColor="#5C4099"></stop>
            <stop offset="1" stopColor="#E31662"></stop>
          </linearGradient>
        </defs>

        <g id="rect" data-name="Mover Truck">
          <path
            className="cls-1"
            d="M31,28v4H2a1,1,0,0,1-1-1V28Z"
            fill="#7c7d7d"
          />
          <path
            className="cls-2"
            d="M31,28v2H4a1,1,0,0,1-1-1V28Z"
            fill="#919191"
          />
          <path
            className="cls-3"
            d="M31,12V28H1V13a1,1,0,0,1,1-1Z"
            fill="#dad7e5"
          />
          <path
            className="cls-4"
            d="M31,12V26H6a3,3,0,0,1-3-3V12Z"
            fill="#edebf2"
          />
          <path
            className="cls-5"
            d="M15,32a4,4,0,1,1-5.64-3.64A4,4,0,0,1,15,32Z"
            fill="#374f68"
          />
          <path
            className="cls-6"
            fill="#425b72"
            d="M14.64,33.64a4,4,0,0,1-5.28-5.28A4,4,0,0,1,14.64,33.64Z"
          />
          <path
            className="cls-3"
            fill="#dad7e5"
            d="M47,26.62V31a1,1,0,0,1-1,1H31V16h7.61a2,2,0,0,1,1.88,1.3L43,24C46.58,25.78,47,25.79,47,26.62Z"
          />
          <path
            className="cls-4"
            d="M47,26.62V30H36a3,3,0,0,1-3-3V16h5.61a2,2,0,0,1,1.88,1.3L43,24C46.55,25.77,47,25.79,47,26.62Z"
            fill="#edebf2"
          />
          <path
            className="cls-4"
            d="M11,33a1,1,0,1,1,1-1A1,1,0,0,1,11,33Z"
            fill="#edebf2"
          />
          <path
            className="cls-3"
            d="M39,16H31V12h4A4,4,0,0,1,39,16Z"
            fill="#dad7e5"
          />
          <path
            className="cls-4"
            d="M38.46,14H35a2,2,0,0,1-2-2C34.91,12,37.13,11.69,38.46,14Z"
            fill="#edebf2"
          />
          <path
            className="cls-7"
            d="M43,24H37a1,1,0,0,1-1-1V21a1,1,0,0,1,1-1h4.5Z"
          />
          <path
            className="cls-8"
            d="M42.25,22H39a1,1,0,0,1-1-1V20h3.5Z"
            fill="#b2e5fb"
          />
          <circle className="cls-5" cx="39" cy="32" r="4" fill="#374f68" />
          <path
            className="cls-6"
            d="M42.64,33.64a4,4,0,0,1-5.28-5.28A4,4,0,0,1,42.64,33.64Z"
            fill="#425b72"
          />
          <path
            className="cls-4"
            d="M38.26,31.29a1,1,0,0,1,1.42,1.42A1,1,0,0,1,38.26,31.29Z"
            fill="#edebf2"
          />
        </g>
      </svg>
    </div>
  );
}

export default Transform;
