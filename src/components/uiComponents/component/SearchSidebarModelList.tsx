"use client";
import React, { Suspense } from "react";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "@/components/ui/sidebar";
import FilterCheckbox from "./FilterCheckBox";
import { useToast } from "@/hooks/use-toast";
import { ShieldMinus } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Loading from "./Loading";

interface ModelResType {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

function SearchSidebarModelList() {
  const [models, setModels] = React.useState([]);
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    const make = searchParams.get("make");
    const getCarModels = async () => {
      try {
        const res = await fetch(
          `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${make}?format=json`
        );
        const json = await res.json();
        setModels(json.Results);
      } catch (error) {
        if (error) {
          toast({
            variant: "destructive",
            description: "couldn't find models please check you connection",
          });
        }
      } finally {
        setLoading(false);
      }
    };

    getCarModels();
  }, [searchParams]);

  return (
    <SidebarMenu>
      <SidebarMenuItem className="relative max-h-[200px] overflow-y-auto bg-white">
        <SidebarMenuButton asChild className="sticky bg-white top-0 z-10">
          <p className="font-semibold text-[16px]">Model</p>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <div className="max-h-[400px] overflow-y-auto">
        {models.length > 0 ? (
          <Suspense fallback={<Loading />}>
            {models.map((item: ModelResType, idx: number) => (
              <SidebarMenuSub key={idx}>
                <FilterCheckbox
                  icon={<ShieldMinus size={16} />}
                  title={item.Model_Name}
                  paramKey={"model"}
                />
              </SidebarMenuSub>
            ))}
          </Suspense>
        ) : loading ? (
          <div>
            <Loading />
          </div>
        ) : (
          <SidebarMenuSub>No make is found</SidebarMenuSub>
        )}
      </div>
    </SidebarMenu>
  );
}

export default SearchSidebarModelList;
