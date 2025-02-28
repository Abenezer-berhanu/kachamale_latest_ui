"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useAdPostStore } from "@/stores/post-store";
import { useEffect, useRef, useState } from "react";
import Loading from "./Loading";

function CarPostingCarModelComponent() {
  const modelListRef = useRef(new Set<string>());
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { make, setModel, model } = useAdPostStore();

  const getCarModels = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${make}?format=json`
      );
      const json = await res.json();
      const models = json.Results.map(
        (item: { Model_Name: string }) => item.Model_Name
      );
      modelListRef.current = new Set(models);
    } catch (error) {
      if (error) {
        toast({
          variant: "destructive",
          description: "Couldn't fetch models. Please check your connection.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (make) {
      getCarModels();
    }
  }, [make]);

  // Validate selected model
  useEffect(() => {
    if (model && !modelListRef.current.has(model)) {
      setModel(null);
      toast({
        variant: "destructive",
        description: "Selected model is not available for this make.",
      });
    }
  }, [model]);

  return (
    <div className="my-2 flex flex-col gap-1.5">
      <div className="flex justify-between items-center">
        <b className="text-sm font-semibold">Car model</b>{" "}
        {loading && <Loading />}
      </div>
      <Select onValueChange={setModel} disabled={!make}>
        <SelectTrigger className="w-full">
          <SelectValue
            placeholder={
              model || (!make && "Select make ↑") || "Select Car Model"
            }
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Select Car Model</SelectLabel>
            {[...modelListRef.current].map((item, idx) => (
              <SelectItem key={idx} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default CarPostingCarModelComponent;
