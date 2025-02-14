"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PencilIcon } from "lucide-react";
import Loading from "./Loading";
import { getSingleCar } from "@/actions/car.actions";
import UpdateCarStepWrapper from "./UpdateCarStepWrapper";

export default function UpdateCarInfoDialoge({ carId }: { carId: string }) {
  type SingleCarFetchResType = Awaited<ReturnType<typeof getSingleCar>>;

  const [loading, setLoading] = useState(false);
  const [singleCar, setSignleCar] = useState<SingleCarFetchResType | null>(
    null
  );

  useEffect(() => {
    setLoading(true);
    const carInfo = async () => {
      const res = await getSingleCar(carId);
      setSignleCar(res);
    };

    carInfo();
    setLoading(false);
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>
          <PencilIcon size={20} />
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle className="text-xl font-bold tracking-wide text-slate-500">
          Update Car Information
        </DialogTitle>
        {loading ? (
          <Loading />
        ) : (
          <div className="overflow-x-auto">
            <UpdateCarStepWrapper carInfo={singleCar} />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
