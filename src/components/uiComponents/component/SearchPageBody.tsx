"use client";
import { useToast } from "@/hooks/use-toast";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import Loading from "./Loading";
import { debounce } from "lodash";
import { getFilteredCars } from "@/actions/car.actions";

function SearchPageBody() {
  const searchParam = useSearchParams();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

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
    <div>
      {loading && <Loading />}
      <p>Results: {data.length}</p>
    </div>
  );
}

export default SearchPageBody;
