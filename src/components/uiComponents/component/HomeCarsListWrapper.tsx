import { mockCar } from "@/lib/data";
import React from "react";
import HomePageCard from "./HomePageCard";

export default function HomeCarsListWrapper() {
  return (
    <div className="grid mdMob:grid-cols-2 tablet:grid-cols-3 mdTab:grid-cols-4 gap-4 my-3">
      {mockCar.map((item, idx) => (
        <HomePageCard
          name={String(
            item?.make +
              " " +
              item?.model +
              " " +
              item?.color +
              " " +
              item?.yearOfManufacture
          )}
          slug={item.slug}
          horsePower={item.horsePower}
          condition={item.condition}
          img={item.images[0]}
          location={String(item.sellerCity + " " + item.sellerStreet)}
          price={item.price}
          transmission={item.transmission}
          key={idx}
        />
      ))}
    </div>
  );
}
