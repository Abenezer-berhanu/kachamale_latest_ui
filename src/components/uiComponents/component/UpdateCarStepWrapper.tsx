"use client";

import { useAdUpdateStore } from "@/stores/update-store";
import UpdateCarStep1 from "./UpdateCarStep1";
import UpdateCarStep2 from "./UpdateCarStep2";
import { getSingleCar } from "@/actions/car.actions";

type SingleCarFetchResType = Awaited<ReturnType<typeof getSingleCar>>;

export default function UpdateCarStepWrapper({
  carInfo,
}: {
  carInfo: SingleCarFetchResType;
}) {
  const { step } = useAdUpdateStore();
  return (
    <>
      {step == 1 ? (
        <UpdateCarStep1 carInfo={carInfo} />
      ) : (
        <UpdateCarStep2 carInfo={carInfo} />
      )}
    </>
  );
}
