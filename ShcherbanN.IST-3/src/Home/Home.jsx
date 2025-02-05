import * as React from "react";
import Header from "./Header";
import CardsGrid from "./CardsGrid";

function HotWheelsCatalog() {
  const [selectedPage, setSelectedPage] = React.useState(1);

  const totalPages = 5;

  return (
    <div className="flex flex-col">
      <Header />
      <div className="pt-12 flex flex-col justify-start items-start">
        <div className="text-4xl">Welcome to the Hot Wheels Car Catalog</div>
        <div className="text-2xl">Discover the coolest Hot Wheels cars.</div>
      </div>
      <CardsGrid />
      <div className="flex justify-center gap-4 text-2xl mt-6">
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;
          return (
            <div
              key={pageNumber}
              onClick={() => setSelectedPage(pageNumber)}
              className={`cursor-pointer px-3 py-1 rounded-md transition-colors ${
                selectedPage === pageNumber
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {pageNumber}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HotWheelsCatalog;
