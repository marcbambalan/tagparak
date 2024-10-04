"use client";

import { QueryResultRow } from "@vercel/postgres";
import { TileView } from "devextreme-react";

const RentalImage = (data: QueryResultRow) => (
  <div
    className="group block flex h-full w-full items-center justify-center rounded-lg bg-cover bg-cover bg-center bg-blend-normal transition ease-in-out hover:bg-yellow-600 hover:bg-blend-darken"
    style={{
      backgroundImage: `url(${data.imgsrc})`,
    }}
  >
    <div className="max-w-[240px]">
      <span className="mb-2 hidden rounded-full bg-yellow-300 p-2 px-4 text-center group-hover:block">
        {data.name}
      </span>

      <div className="hidden text-center text-white group-hover:block">
        {data.description}
      </div>
    </div>
  </div>
);

const shapeData = (rentals: QueryResultRow[]) =>
  rentals.map((rental) => {
    switch (rental.name) {
      case "Kayak":
        return {
          ...rental,
          heightRatio: 6,
        };
      case "Banana boat":
        return {
          ...rental,
          widthRatio: 2,
          heightRatio: 4,
        };
      case "Salbabida":
        return {
          ...rental,
          heightRatio: 3,
        };
      case "Tents":
        return {
          ...rental,
          heightRatio: 6,
        };
      case "Life vests":
        return {
          ...rental,
          widthRatio: 2,
          heightRatio: 2,
        };
      default:
        return { ...rental, heightRatio: 3 };
    }
  });

export default function RentalsTileView({
  rentals,
}: {
  rentals: QueryResultRow[];
}) {
  const modifiedRentals = shapeData(rentals);

  return (
    <TileView
      items={modifiedRentals}
      itemRender={RentalImage}
      height={670}
      width="100%"
      baseItemHeight={98}
      baseItemWidth={400}
      itemMargin={10}
      direction="horizontal"
    />
  );
}
