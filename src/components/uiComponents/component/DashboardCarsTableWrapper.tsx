"use client";
import { useEffect, useState } from "react";
import DashboardCarTable from "./DashboardCarTable";
import { fetchMyCars } from "@/actions/dashboardActions";
import { useToast } from "@/hooks/use-toast";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CustomeButton from "./CustomeButton";

export default function DashboardCarsTableWrapper() {
  const { toast } = useToast();

  const searchParam = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const [page, setPage] = useState(1);

  const params = new URLSearchParams(searchParam);

  const handlePaginationClick = () => {
    if (searchParam.has("page")) {
      const pageNumber = searchParam.get("page")
      params.set("page", String(Number(pageNumber!) + 1));
      replace(`${pathname}?${params}`);
      setPage(Number(pageNumber!) + 1)
    } else {
      params.set("page", "2");
      replace(`${pathname}?${params}`);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [cars, setCars]: any = useState([]);
  const [totalCars, setTotalCars] = useState(0)

  useEffect(() => {
    const featchOwnerCars = async () => {
      const carList = await fetchMyCars(Number(page));
      if (!carList?.success) {
        toast({
          variant: "destructive",
          title: "oops",
          description: carList.error,
        });
      }
      setCars(carList?.cars);
      setTotalCars(carList.totalCars! || 1)
    };

    featchOwnerCars();
  }, [page]);
  console.log(totalCars)


  return (
    <div>
      <DashboardCarTable cars={cars} />
      <CustomeButton title="See more" onClick={handlePaginationClick} className="w-fit px-4 py-2 my-5" disabled={totalCars < 8}/>
    </div>
  );
}
