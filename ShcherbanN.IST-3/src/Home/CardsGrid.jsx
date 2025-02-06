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
  { imgSrc: truck1, imgAlt: "Flame Racer Image", title: "Monster Truck" },
  { imgSrc: truck2, imgAlt: "Speedster Image", title: "Ford F-150" },
  { imgSrc: truck3, imgAlt: "Monster Truck Image", title: "Monster Truck" },
  { imgSrc: truck4, imgAlt: "Cool Cruiser Image", title: "Cool Cruiser" },
  { imgSrc: truck5, imgAlt: "Sleek Racer Image", title: "Sleek Racer" },
  { imgSrc: truck6, imgAlt: "Future Flyer Image", title: "Future Flyer" },
  { imgSrc: truck7, imgAlt: "Sportster Image", title: "Sportster" },
  { imgSrc: truck8, imgAlt: "Classic Cruiser Image", title: "Classic Cruiser" },
  { imgSrc: truck9, imgAlt: "Unique Ride Image", title: "Unique Ride" },
  { imgSrc: truck10, imgAlt: "Vibrant Racer Image", title: "Vibrant Racer" },
];

const ITEMS_PER_PAGE = 6;

function CardsGrid() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil(cardsData.length / ITEMS_PER_PAGE);

  const currentCards = cardsData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 gap-y-16 p-10 bg-white text-black">
        {currentCards.map((card, index) => (
          <div
            key={`${card.title}-${index}`}
            className="transform h-[24rem] transition duration-300 hover:scale-105"
          >
            <Card
              imgSrc={card.imgSrc}
              imgAlt={card.imgAlt}
              title={card.title}
            />
          </div>
        ))}
      </div>

      <div className="flex gap-3 mt-6">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className={`px-4 py-2 rounded-md transition-colors ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"

          }`}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 cursor-pointer rounded-md transition-colors ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black hover:bg-gray-400"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className={`px-4 py-2 rounded-md transition-colors ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-red-500 cursor-pointer text-white hover:bg-red-700"
          }`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CardsGrid;
