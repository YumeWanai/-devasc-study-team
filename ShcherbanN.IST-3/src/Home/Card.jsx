import * as React from "react";

function Card({ imgSrc, imgAlt, title }) {
  return (
    <div className="flex overflow-hidden flex-col grow items-start pt-5 pr-20 pb-11 pl-5 w-full bg-white rounded shadow-sm max-md:px-5 max-md:mt-5">
      <div className="flex flex-col justify-center px-16 py-20 bg-zinc-300 max-md:px-5 max-md:ml-2">
        <img
          loading="lazy"
          src={imgSrc}
          alt={imgAlt}
          className="object-contain aspect-[5.99] w-[180px]"
        />
      </div>
      <div className="mt-3 text-xl font-semibold leading-snug text-black">
        {title}
      </div>
    </div>
  );
}

export default Card;
