"use client";
import { useToast } from "@/hooks/use-toast";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import Loading from "./Loading";
import { debounce } from "lodash";
import { getFilteredCars } from "@/actions/car.actions";
import HomePageCard from "./HomePageCard";

function SearchPageBody() {
  const searchParam = useSearchParams();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<[CarType] | []>([]);

  // Optimized API call with debounce
  const fetchFilteredCars = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    debounce(async (filters: any) => {
      setLoading(true);
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const res: any = await getFilteredCars(filters);
        if (res.error) {
          toast({
            variant: "destructive",
            description: res.message, // Use the correct error message
          });
        } else {
          setData(res.cars);
        }
      } catch (error) {
        if (error) {
          toast({
            variant: "destructive",
            description: "Something went wrong. Please try again.",
          });
        }
      } finally {
        setLoading(false);
      }
    }, 500),
    []
  );

  // Fetch cars when params change
  useEffect(() => {
    const queries = Object.fromEntries(searchParam.entries());
    fetchFilteredCars(queries);
  }, [searchParam, fetchFilteredCars]);

  return (
    <div className="min-h-svh">
      {loading ? (
        <Loading />
      ) : data.length > 0 ? (
        <div className="grid mdMob:grid-cols-2 mdTab:grid-cols-3 gap-4 my-3 px-4">
          {data.map((item: CarType, idx: number) => (
            <HomePageCard
              key={idx}
              name={String(
                item?.make + " " + item?.model + " " + item?.yearOfManufacture
              )}
              slug={item.slug}
              horsePower={item.horsePower}
              transmission={item.transmission}
              condition={item.condition}
              img={item.images[0]?.url}
              location={String(item.sellerCity + " " + item.sellerStreet)}
              price={item.price}
            />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <p className="font-bold text-2xl text-center text-black/50"></p>
        </div>
      )}
    </div>
  );
}

export default SearchPageBody;
