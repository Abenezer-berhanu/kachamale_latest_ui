import React, { Suspense } from "react";
import HomePageCard from "./HomePageCard";
import Pagination from "./Pagination";
import Loading from "./Loading";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function HomeCarsListWrapper({ cars, totalPages }: any) {
  return cars?.error ? (
    <div className="w-full">
      <p className="text-2xl font-bold mt-12 text-center w-full text-blue-500 opacity-50">
        Something went wrong couldn&rsquo;t get car <br /> please check you
        connection
      </p>
    </div>
  ) : (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mdTab:grid-cols-3 gap-4 my-3">
        {cars.map((item: CarType, idx: number) => (
          <HomePageCard
            like={item._count?.like || 0}
            view={item._count?.carSeenCount || 0}
            name={`${item.make} ${item.model} ${item.yearOfManufacture}`}
            slug={item.slug}
            horsePower={item.horsePower}
            condition={item.condition}
            img={item.images[0]?.url}
            location={`${item.sellerCity} ${item.sellerStreet}`}
            price={item.price}
            transmission={item.transmission}
            key={idx}
          />
        ))}
      </div>
      {totalPages > 1 && (
        <Suspense fallback={<Loading />}>
          <Pagination totalPages={totalPages} siblingCount={1} />
        </Suspense>
      )}
    </div>
  );
}
