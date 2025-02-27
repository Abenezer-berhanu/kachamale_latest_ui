"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Slider } from "@/components/ui/slider";
import React, { useEffect, useState, useCallback } from "react";
import { getMaxPrice, getMinPrice } from "@/actions/car.actions";

function SearchPagePriceFilter() {
  const [activePrice, setActivePrice] = useState(1000000);
  const [maxPrice, setMaxPrice] = useState(10000000);
  const [minPrice, setMinPrice] = useState(200000);
  
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    let isMounted = true;
    const getMaxAndMinPrice = async () => {
      try {
        const [mxp, mip] = await Promise.all([getMaxPrice(), getMinPrice()]);
        if (isMounted) {
          setMaxPrice(mxp?._max.price || 10000000);
          setMinPrice(mip?._min.price || 200000);
        }
      } catch (error) {
        console.error("Failed to fetch price range:", error);
      }
    };

    getMaxAndMinPrice();
    
    return () => {
      isMounted = false; // Prevents updating state if unmounted
    };
  }, []);

  useEffect(() => {
    if (searchParams.has("price")) {
      setActivePrice(Number(searchParams.get("price")));
    }
  }, [searchParams]); // Runs only when searchParams change

  // Debounced URL update to prevent excessive updates while sliding
  const handleSliderChange = useCallback((e: number[]) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("price", e[0].toString());
    
    setActivePrice(e[0]); // Update state first
    replace(`${pathname}?${newParams.toString()}`); // Update URL
  }, [searchParams, replace, pathname]);

  return (
    <div className="flex flex-col gap-3 mx-5 my-5 border-b pb-5">
      <p className="font-semibold">Price</p>
      <div className="w-full flex justify-between">
        <span className="text-xs font-semibold">
          {minPrice.toLocaleString()}
        </span>
        <span className="text-xs font-semibold">
          {activePrice.toLocaleString()}
        </span>
      </div>
      <Slider
        value={[activePrice]}
        max={maxPrice}
        step={10000}
        min={minPrice} // Ensure dynamic min
        onValueChange={handleSliderChange}
      />
    </div>
  );
}

export default SearchPagePriceFilter;
