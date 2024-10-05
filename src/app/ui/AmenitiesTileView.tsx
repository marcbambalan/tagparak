"use client";

import { QueryResultRow } from "@vercel/postgres";
import { TileView } from "devextreme-react";
import { ContentReadyEvent } from "devextreme/ui/tile_view";
import { useCallback, useMemo } from "react";

const AmenityImage = (amenity: QueryResultRow) => (
  <div
    className="group block flex h-full w-full items-center justify-center bg-cover bg-cover bg-center bg-blend-normal transition ease-in-out hover:bg-yellow-600 hover:bg-blend-darken"
    style={{
      backgroundImage: `url(${amenity.imgsrc})`,
    }}
  >
    <div className="max-w-[240px]">
      <span className="mb-2 hidden rounded-full bg-yellow-300 p-2 px-4 text-center group-hover:block">
        {amenity.name}
      </span>

      <div className="hidden text-center text-white group-hover:block">
        {amenity.description}
      </div>
    </div>
  </div>
);

const AmenitiesTileView = ({
  amenities,
  height,
}: {
  amenities: QueryResultRow[];
  height: number | string;
}) => {
  const shapeData = useMemo(
    () =>
      amenities.map((amenity) => ({
        ...amenity,
        heightRatio: amenity.height_ratio,
        widthRatio: 1,
      })),
    [screen.width],
  );

  // Change baseItemWidth based on the window's width
  const handleContentReady = useCallback((e: ContentReadyEvent) => {
    let baseItemWidth = 760;

    if (window.innerWidth < 768) {
      baseItemWidth = window.innerWidth;
    }

    if (window.innerWidth >= 768 && window.innerWidth < 1536) {
      baseItemWidth = window.innerWidth / 2 - 10;
    }

    e.component.option({
      baseItemWidth,
    });
  }, []);

  return (
    <TileView
      items={shapeData}
      itemRender={AmenityImage}
      width="100%"
      height={height}
      baseItemHeight={240}
      itemMargin={0}
      direction="vertical"
      onContentReady={handleContentReady}
    />
  );
};

export default AmenitiesTileView;
