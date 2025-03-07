import {
  getSingleCarBySlug,
  incrementCarViewCount,
} from "@/actions/car.actions";
import DetailPageContactInfo from "@/components/uiComponents/component/DetailPageContactInfo";
import DetailPageDetailInfoCard from "@/components/uiComponents/component/DetailPageDetailInfoCard";
import DetailPageDetailTable from "@/components/uiComponents/component/DetailPageDetailTable";
import DetailPageImageCarousel from "@/components/uiComponents/component/DetailPageImageCarousel";
import FeatureList from "@/components/uiComponents/component/KeyFeaturesList";
import Image from "next/image";
import React from "react";
import CarLike from "./CarLike";

export default async function DetailPageWrapper({ slug }: { slug: string }) {
  type CarReturnType = Awaited<ReturnType<typeof getSingleCarBySlug>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: CarReturnType = await getSingleCarBySlug(slug);

  //@ts-expect-error because we expects the error
  if (!data?.error && data?.id) {
    await incrementCarViewCount(data?.id);
  }

  const name = String(
    data?.make + " " + data?.model + " " + data?.yearOfManufacture
  );

  const location = String(data?.sellerCity + " " + data?.sellerStreet);

  //@ts-expect-error because we expects the error
  return data?.error ? (
    <div className="flex items-center">
      <p className="text-2xl font-bold text-blue-500 opacity-50 mt-10 text-center"></p>
    </div>
  ) : data ? (
    <div className="px-2">
      <div className="mb-3 w-full flex border justify-center max-h-[200px] tablet:hidden">
        <Image
          src={"/assets/adImage.png"}
          width={400}
          height={400}
          className="object-contain"
          alt="adImage"
        />
      </div>
      <div className="tablet:hidden w-full max-w-[600px] mx-auto my-4">
        <DetailPageImageCarousel imageArray={data?.images} noPreview={true} />
      </div>
      <main className="min-h-screen w-full max-w-[1300px] my-3 gap-3 mx-auto grid mdTab:grid-cols-4 px-4">
        <section className="mdTab:col-span-3 h-full w-full grid tablet:grid-cols-2 p-2 gap-2">
          {/* left side descriptions */}
          <div className="w-full h-fit tablet:h-full flex flex-col gap-2">
            <span className="flex items-center justify-between">
              <h1 className="text-2xl font-bold max-w-[350px]">{name}</h1>
              <CarLike
                isLiked={data.like && data?.like.length ? true : false}
                carId={data.id}
              />
            </span>
            <h1 className="text-2xl font-bold text-main_blue">
              ETB {data?.price?.toLocaleString()}
            </h1>
            <span className="flex items-center gap-2">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 3.5C6 2.67157 6.67157 2 7.5 2C8.32843 2 9 2.67157 9 3.5C9 4.32843 8.32843 5 7.5 5C6.67157 5 6 4.32843 6 3.5ZM8 5.94999C9.14112 5.71836 10 4.70948 10 3.5C10 2.11929 8.88071 1 7.5 1C6.11929 1 5 2.11929 5 3.5C5 4.70948 5.85888 5.71836 7 5.94999V13.5C7 13.7761 7.22386 14 7.5 14C7.77614 14 8 13.7761 8 13.5V5.94999Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
              <small className="line-clamp-1">{location}</small>
            </span>

            <div className="w-full my-3 grid grid-cols-2 gap-2">
              <DetailPageDetailInfoCard title="Make" value={data?.make || ""} />
              <DetailPageDetailInfoCard
                title="Model"
                value={data?.model || ""}
              />
              <DetailPageDetailInfoCard
                title="Condition"
                value={data.condition || ""}
              />
              <DetailPageDetailInfoCard
                title="Transmission"
                value={data.transmission || ""}
              />
              <DetailPageDetailInfoCard
                title="Horse Poser"
                value={data.horsePower?.toString() || ""}
              />
              <DetailPageDetailInfoCard
                title="Engine Size"
                value={data.engineSize + " cc" || ""}
              />
            </div>

            <p className="text-gray_text">{data.description}</p>
          </div>
          {/* right side carousel */}
          <div className="max-tablet:hidden w-full h-fit">
            <DetailPageImageCarousel imageArray={data.images} />
          </div>

          {/* description bottom */}
          <div className="w-full h-full p-2 grid mdTab:grid-cols-11 gap-2 tablet:col-span-2 mt-5">
            <div className="h-full w-full mdTab:col-span-4">
              <FeatureList features={data.keyFeatures} />
            </div>
            <div className="h-full w-full mdTab:col-span-7">
              <DetailPageDetailTable
                category={data?.category}
                negotiation={
                  data.negotiationAvailable ? "Negotiable" : "Unavailable"
                }
                yearOfManufacture={data.yearOfManufacture || ""}
                seats={data.seats || ""}
                color={data.color || ""}
                interiorColor={data.interiorColor || ""}
                bodyType={data.body || ""}
                fuel={data.fuel || ""}
                mileAge={data.mileage || ""}
                numberOfCylinders={data.numberOfCylinders || ""}
              />
            </div>
          </div>
        </section>
        <section className="h-full w-full flex flex-col gap-3">
          <DetailPageContactInfo
            phone={data.phoneNumber || ""}
            user={data.author}
          />
          {/* ad will be put here */}
          <div className="max-tablet:hidden">
            <Image
              src={"/assets/adImage.png"}
              width={400}
              height={400}
              className="w-full"
              alt="adImage"
            />
          </div>
        </section>
      </main>
    </div>
  ) : (
    ""
  );
}
