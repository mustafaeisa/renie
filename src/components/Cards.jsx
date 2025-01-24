"use client";
import { useState, useEffect } from "react";
import { gsap } from "gsap";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function Card({ autoSlide = true, items, curentId, setCurentId }) {
  gsap.to(".slide", {
    x: `-${curentId * 100}%`,
    duration: 1,
    ease: "power3.inOut",
  });

  const prev = () => setCurentId((curentId) => curentId - 1);
  const next = () =>
    setCurentId((curentId) =>
      curentId + 1 === items.length ? curentId : curentId + 1
    );
  // useEffect(() => {
  //   if (!autoSlide) return;
  //   const slideInterval = setInterval(next, 3000);
  //   return () => clearInterval(slideInterval);
  // }, []);
  return (
    <div className="overflow-hidden relative w-[300px] h-[200px]  md:h-80 md:w-96 rounded-lg">
      <div className="slide flex  h-full w-full rounded-lg">
        {items.map((card, id) => (
          <div
            key={id}
            className={
              "flex-shrink-0 relative  bg-gradient-to-tr from-[#4a61dd] to-[#c8216f]  w-full text-white  rounded-lg  p-3 mx-auto  h-full flex flex-col gap-3"
            }
          >
            <h1>step {card.id}</h1>
            <p>{card.text}</p>
            {card.id == 1 ? (
              <button className="bg-white hover:bg-cyan-200 text-black text-lg  py-1 px-2 rounded-full absolute bottom-2 right-3">
                <FiArrowRight className="  right-0" onClick={next} />
              </button>
            ) : card.id == 4 ? (
              <button className=" bg-white hover:bg-cyan-200 text-black text-lg  py-1 px-2 rounded-full absolute bottom-2 right-3">
                <FiArrowLeft onClick={prev} />
              </button>
            ) : (
              <>
                <button className=" bg-white hover:bg-cyan-200 text-black text-lg  py-1 px-2 rounded-full absolute bottom-2 right-14">
                  <FiArrowLeft onClick={prev} />
                </button>
                <button className=" hover:bg-cyan-200 bg-white text-black text-lg  py-1 px-2 rounded-full absolute bottom-2 right-3">
                  <FiArrowRight onClick={next} />
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
