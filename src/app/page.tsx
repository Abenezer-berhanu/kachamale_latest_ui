import CarouselHome from "@/components/uiComponents/component/CarouselHome";
import HomeCarsListWrapper from "@/components/uiComponents/component/HomeCarsListWrapper";

export default function Home() {
  return (
    <main className="max-w-[1300px] mx-auto w-full px-4 min-h-screen space-y-5">
      <CarouselHome />
      <div className="flex flex-col items-center max-w-[1200px] mx-auto">
        <h2 className="text-xl font-semibold text-main_blue w-full text-start">Popular cars</h2>
        <HomeCarsListWrapper />
      </div>
    </main>
  );
}
