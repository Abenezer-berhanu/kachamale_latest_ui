import React from "react";
import HomePageCard from "./HomePageCard";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function HomeCarsListWrapper({ cars }: any) {
  return cars?.error ? (
    <div className="w-full">
      <p className="text-2xl font-bold mt-12 text-center w-full text-blue-500 opacity-50">
        Something went wrong couldn&rsquo;t get car <br /> please check you
        connection{" "}
      </p>
    </div>
  ) : (
    <div className="grid mdMob:grid-cols-2 tablet:grid-cols-3 mdTab:grid-cols-4 gap-4 my-3">
      {cars.map((item: CarType, idx: number) => (
        <HomePageCard
          name={String(
            item?.make + " " + item?.model + " " + " " + item?.yearOfManufacture
          )}
          slug={item.slug}
          horsePower={item.horsePower}
          condition={item.condition}
          img={item.images[0].url}
          location={String(item.sellerCity + " " + item.sellerStreet)}
          price={item.price}
          transmission={item.transmission}
          key={idx}
        />
      ))}
    </div>
  );
}
