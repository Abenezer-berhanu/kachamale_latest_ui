import { getLikedCars } from "@/actions/car.actions";
import HomePageCard from "@/components/uiComponents/component/HomePageCard";
import React, { Suspense } from "react";
import Loading from "../loading";
import Pagination from "@/components/uiComponents/component/Pagination";

async function page({
  searchParams,
}: {
  searchParams: Promise<{ page: number }>;
}) {
  const page = (await searchParams).page;
  const data = await getLikedCars(page || 1);

  const cars = data?.cars;

  return (
    <div className="min-h-screen">
      {cars?.length && cars.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mdTab:grid-cols-3 gap-4 my-3 px-2">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {cars.map((item: any, idx: number) => (
            <HomePageCard
              name={`${item.car.make} ${item.car.model} ${item.car.yearOfManufacture}`}
              slug={item.car.slug}
              horsePower={item.car.horsePower}
              condition={item.car.condition}
              img={item.car.images[0]?.url}
              location={`${item.car.sellerCity} ${item.car.sellerStreet}`}
              price={item.car.price}
              transmission={item.car.transmission}
              key={idx}
            />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <b className="text-2xl text-center w-full text-black/50">
            You have liked no car yet
          </b>
        </div>
      )}

      {data?.totalPages && data?.totalPages > 1 && (
        <Suspense fallback={<Loading />}>
          <Pagination totalPages={data?.totalPages} siblingCount={1} />
        </Suspense>
      )}
    </div>
  );
}

export default page;
