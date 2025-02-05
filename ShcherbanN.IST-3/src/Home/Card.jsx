import * as React from "react";

function Card({ imgSrc, imgAlt, title }) {
  return (
    <div className="flex flex-col grow items-center pt-4 bg-white shadow-[2px_2px_20px_rgba(0,0,0,0.35)]  w-[18rem] h-full rounded-[8px]">
      <div className="flex flex-col justify-center items-center rounded-xl shadow-2xl w-[75%] h-[80%]">
        <img
          loading="lazy"
          src={imgSrc}
          alt={imgAlt}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="mt-3 w-full ml-[25%] text-3xl flex justify-start items-start font-bold leading-snug text-black">
        {title}
      </div>
    </div>
  );
}

export default Card;
