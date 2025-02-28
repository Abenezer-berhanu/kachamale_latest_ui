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
import { useEffect, useRef, useState } from "react";
import { useAdUpdateStore } from "@/stores/update-store";

function CarUpdateCarModelComponent() {
  const modelListRef = useRef(new Set<string>());
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { make, setModel, model } = useAdUpdateStore();

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
  }, [model, make]);

  return (
    <Select
      onValueChange={(value) => setModel(value)}
      disabled={loading || !make}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder={model || !make && "Select make ↑" || "Select Car Model"} />
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
  );
}

export default CarUpdateCarModelComponent;
