"use client";
import SearchSidebar from "@/components/uiComponents/component/SearchSidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import SearchPageBreadCrumb from "./SearchPageBreadCrumb";
import SearchPageBody from "./SearchPageBody";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

function SearchPage() {
  const searchParam = useSearchParams();

  useEffect(() => {
    const querys = Object.fromEntries(searchParam.entries());

    console.log(querys);
  }, [searchParam]);
  return (
    <div className="relative">
      <SidebarProvider className="">
        <SearchSidebar />
        <SidebarInset className="">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b">
            <div className="flex items-center gap-2 px-3">
              <SidebarTrigger />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <SearchPageBreadCrumb />
            </div>
          </header>
          <SearchPageBody />
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}

export default SearchPage;
