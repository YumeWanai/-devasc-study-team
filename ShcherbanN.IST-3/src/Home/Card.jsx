import * as React from "react";

function Card({ imgSrc, imgAlt, title }) {
  return (
    <div className="flex overflow-hidden flex-col grow items-start pt-5 pr-20 pb-11 pl-5 bg-white shadow-sm max-md:px-5 max-md:mt-5 w-full h-full rounded-[8px]">
      <div className="flex flex-col justify-center bg-zinc-300 max-md:px-5 max-md:ml-2 w-[400px] h-[400px]">
        <img
          loading="lazy"
          src={imgSrc}
          alt={imgAlt}
          className="object-fill w-full h-full"
        />
      </div>
      <div className="mt-3 text-xl font-semibold leading-snug text-black">
        {title}
      </div>
    </div>
  );
}

export default Card;
