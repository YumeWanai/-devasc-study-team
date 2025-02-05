import * as React from "react";
import Card from "./Card";
import truck1 from "../../public/HOTWHEELS/hot1.jpg";
import truck2 from "../../public/HOTWHEELS/hot2.jpg";
import truck3 from "../../public/HOTWHEELS/photo_1_2025-02-05_23-11-28.jpg";
import truck4 from "../../public/HOTWHEELS/photo_2_2025-02-05_23-11-28.jpg";
import truck5 from "../../public/HOTWHEELS/photo_3_2025-02-05_23-11-28.jpg";
import truck6 from "../../public/HOTWHEELS/photo_4_2025-02-05_23-11-28.jpg";
import truck7 from "../../public/HOTWHEELS/photo_5_2025-02-05_23-11-28.jpg";
import truck8 from "../../public/HOTWHEELS/photo_6_2025-02-05_23-11-28.jpg";
import truck9 from "../../public/HOTWHEELS/photo_7_2025-02-05_23-11-28.jpg";
import truck10 from "../../public/HOTWHEELS/photo_8_2025-02-05_23-11-28.jpg";

const cardsData = [
  {
    imgSrc: truck1,
    imgAlt: "Flame Racer Image",
    title: "Monster Truck",
  },
  {
    imgSrc: truck2,
    imgAlt: "Speedster Image",
    title: "Ford F-150",
  },
  {
    imgSrc: truck3,
    imgAlt: "Monster Truck Image",
    title: "Monster Truck",
  },
  {
    imgSrc: truck4,
    imgAlt: "Cool Cruiser Image",
    title: "Cool Cruiser",
  },
  {
    imgSrc: truck5,
    imgAlt: "Sleek Racer Image",
    title: "Sleek Rapist",
  },
  {
    imgSrc: truck6,
    imgAlt: "Future Flyer Image",
    title: "Future Flyer",
  },
  {
    imgSrc: truck7,
    imgAlt: "Sportster Image",
    title: "Sportster",
  },
  {
    imgSrc: truck8,
    imgAlt: "Classic Cruiser Image",
    title: "Classic Cruiser",
  },
  {
    imgSrc: truck9,
    imgAlt: "Unique Ride Image",
    title: "Unique Ride",
  },
  {
    imgSrc: truck10,
    imgAlt: "Vibrant Racer Image",
    title: "Vibrant Racer",
  },
];

function CardsGrid() {
  return (
    <div className="flex flex-col px-5 mt-0 w-full-5 max-md:mt-10 max-md:max-w-full">
      {Array.from({ length: 3 }).map((_, rowIndex) => (
        <div className="mt-5 max-md:max-w-full" key={rowIndex}>
          <div className="flex gap-5 max-md:flex-col">
            {cardsData
              .slice(rowIndex * 3, rowIndex * 3 + 3)
              .map((card, index) => (
                <div
                  className={`flex flex-col w-[33%] ${index > 0 ? "ml-5" : ""} max-md:ml-0 max-md:w-full`}
                  key={card.title}
                >
                  <Card
                    imgSrc={card.imgSrc}
                    imgAlt={card.imgAlt}
                    title={card.title}
                  />
                </div>
              ))}
          </div>
        </div>
      ))}
      <div className="flex overflow-hidden flex-col items-start pt-5 pr-20 pb-11 pl-5 mt-5 max-w-full bg-white rounded shadow-sm w-[415px] max-md:px-5">
        <div className="flex flex-col justify-center px-11 py-20 bg-zinc-300 max-md:px-5 max-md:ml-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/244fc5d9f97b3ca286c0ebc22beecb87222bc720a67d396318bcfa883f861ad6?placeholderIfAbsent=true&apiKey=9c0ba2d1b51c47abaa8a69a9b551f7da"
            alt="Vibrant Racer Image"
            className="object-contain aspect-[5.99] w-[180px]"
          />
        </div>
        <div className="mt-3 text-xl font-semibold leading-snug text-black">
          Vibrant Racer
        </div>
      </div>
    </div>
  );
}

export default CardsGrid;
