import React, { Suspense } from "react";
import { FilterIcon } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarRail,
} from "@/components/ui/sidebar";
import FilterCheckbox from "./FilterCheckBox";
import { carFilteringData, carMakeAndModel } from "@/lib/data";
import SearchSidebarModelList from "./SearchSidebarModelList";
import Loading from "./Loading";
import SearchPagePriceFilter from "./SearchPagePriceFilter";
function SearchSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} className="absolute py-5 bg-white">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <FilterIcon className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Filter by</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent
        className="bg-white [&::-webkit-scrollbar]:w-4
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
      >
        <Suspense fallback={<Loading />}>
          <SearchPagePriceFilter />
        </Suspense>
        <SidebarGroup>
          <SidebarMenu>
            {carFilteringData.map((item) => (
              <SidebarMenuItem
                key={item.title}
                className="relative max-h-[200px] overflow-y-auto mb-4 bg-white [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
              >
                <SidebarMenuButton
                  asChild
                  key={item.title}
                  className="sticky bg-white top-0 z-10"
                >
                  <p className="font-semibold text-[16px]">{item.title}</p>
                </SidebarMenuButton>
                <div className="py-2">
                  {/* Add padding to push content below the title */}
                  {item.items?.length ? (
                    <SidebarMenuSub>
                      <Suspense fallback={<Loading />}>
                        {item.items.map((itm, idx) => (
                          <div key={idx}>
                            <FilterCheckbox
                              icon={React.createElement(itm.icon, { size: 16 })}
                              title={itm.title}
                              paramKey={item.title
                                .toLowerCase()
                                .replace(
                                  /(?:^\w|[A-Z]|\b\w)/g,
                                  (match, index) =>
                                    index === 0
                                      ? match.toLowerCase()
                                      : match.toUpperCase()
                                )
                                .replace(/\s+/g, "")}
                            />
                          </div>
                        ))}
                      </Suspense>
                    </SidebarMenuSub>
                  ) : null}
                </div>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>

          <SidebarMenu>
            <SidebarMenuItem className="relative max-h-[200px] overflow-y-auto bg-white">
              <SidebarMenuButton asChild className="sticky bg-white top-0 z-10">
                <p className="font-semibold text-[16px] my-1">Make</p>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <div
              className="max-h-[400px] overflow-y-auto [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
            >
              <Suspense fallback={<Loading />}>
                {carMakeAndModel.map((item, idx: number) => (
                  <SidebarMenuSub key={idx}>
                    <FilterCheckbox
                      icon={React.createElement(item.icon, { size: 16 })}
                      title={item.title}
                      dependentKey="model"
                      paramKey={item.paramKey
                        .toLowerCase()
                        .replace(/(?:^\w|[A-Z]|\b\w)/g, (match, index) =>
                          index === 0
                            ? match.toLowerCase()
                            : match.toUpperCase()
                        )
                        .replace(/\s+/g, "")}
                    />
                  </SidebarMenuSub>
                ))}
              </Suspense>
            </div>
          </SidebarMenu>

          <Suspense fallback={<Loading />}>
            <SearchSidebarModelList />
          </Suspense>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

export default SearchSidebar;
