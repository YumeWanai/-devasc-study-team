import * as React from "react";
import Header from "./Header";
import CardsGrid from "./CardsGrid";

function HotWheelsCatalog() {
  return (
    <div className="min-h-screen text-white">
      <Header />
      <div className="text-center pt-12">
        <h1 className="text-5xl font-extrabold text-red-500">
          Hot Wheels Collection
        </h1>
        <p className="text-lg text-gray-500">
          Explore the best models from my collection.
        </p>
      </div>
      <CardsGrid />
    </div>
  );
}

export default HotWheelsCatalog;
