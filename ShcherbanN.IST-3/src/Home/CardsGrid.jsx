import * as React from "react";
import Card from "./Card";

const cardsData = [
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/244fc5d9f97b3ca286c0ebc22beecb87222bc720a67d396318bcfa883f861ad6?placeholderIfAbsent=true&apiKey=9c0ba2d1b51c47abaa8a69a9b551f7da",
    imgAlt: "Flame Racer Image",
    title: "Flame Racer",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ec73915056b6c67b43ffa9929246df50065e17260b63f42a2697fff8b270952f?placeholderIfAbsent=true&apiKey=9c0ba2d1b51c47abaa8a69a9b551f7da",
    imgAlt: "Speedster Image",
    title: "Speedster",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2c9573c729e319c4547e40b048f00b6583adc4f6506e49399834fd61f52dd4cc?placeholderIfAbsent=true&apiKey=9c0ba2d1b51c47abaa8a69a9b551f7da",
    imgAlt: "Monster Truck Image",
    title: "Monster Truck",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/244fc5d9f97b3ca286c0ebc22beecb87222bc720a67d396318bcfa883f861ad6?placeholderIfAbsent=true&apiKey=9c0ba2d1b51c47abaa8a69a9b551f7da",
    imgAlt: "Cool Cruiser Image",
    title: "Cool Cruiser",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ec73915056b6c67b43ffa9929246df50065e17260b63f42a2697fff8b270952f?placeholderIfAbsent=true&apiKey=9c0ba2d1b51c47abaa8a69a9b551f7da",
    imgAlt: "Sleek Racer Image",
    title: "Sleek Racer",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2c9573c729e319c4547e40b048f00b6583adc4f6506e49399834fd61f52dd4cc?placeholderIfAbsent=true&apiKey=9c0ba2d1b51c47abaa8a69a9b551f7da",
    imgAlt: "Future Flyer Image",
    title: "Future Flyer",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/244fc5d9f97b3ca286c0ebc22beecb87222bc720a67d396318bcfa883f861ad6?placeholderIfAbsent=true&apiKey=9c0ba2d1b51c47abaa8a69a9b551f7da",
    imgAlt: "Sportster Image",
    title: "Sportster",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ec73915056b6c67b43ffa9929246df50065e17260b63f42a2697fff8b270952f?placeholderIfAbsent=true&apiKey=9c0ba2d1b51c47abaa8a69a9b551f7da",
    imgAlt: "Classic Cruiser Image",
    title: "Classic Cruiser",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2c9573c729e319c4547e40b048f00b6583adc4f6506e49399834fd61f52dd4cc?placeholderIfAbsent=true&apiKey=9c0ba2d1b51c47abaa8a69a9b551f7da",
    imgAlt: "Unique Ride Image",
    title: "Unique Ride",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/244fc5d9f97b3ca286c0ebc22beecb87222bc720a67d396318bcfa883f861ad6?placeholderIfAbsent=true&apiKey=9c0ba2d1b51c47abaa8a69a9b551f7da",
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
