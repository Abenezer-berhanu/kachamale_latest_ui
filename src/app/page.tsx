import { getCarsForHomePage } from "@/actions/car.actions";
import CarouselHome from "@/components/uiComponents/component/CarouselHome";
import HomeCarsListWrapper from "@/components/uiComponents/component/HomeCarsListWrapper";
import Loading from "@/components/uiComponents/component/Loading";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cars: any = await getCarsForHomePage(Number(searchParams.page || 1));
  return (
    <main className="max-w-[1300px] mx-auto w-full px-4 min-h-screen space-y-5">
      <CarouselHome />
      <div className="flex flex-col items-center max-w-[1200px] mx-auto">
        <h2 className="text-xl font-semibold text-main_blue w-full text-start">
          Popular cars
        </h2>
        <Suspense fallback={<Loading />}>
          <HomeCarsListWrapper cars={cars.cars} totalPages={cars.totalPages} />
        </Suspense>
      </div>
    </main>
  );
}
