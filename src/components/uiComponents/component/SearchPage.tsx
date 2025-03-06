import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import SearchSidebar from "./SearchSidebar";
import SearchPageBreadCrumb from "./SearchPageBreadCrumb";
import SearchPageBody from "./SearchPageBody";
import { Suspense } from "react";
import Loading from "./Loading";

function SearchPage() {
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
          <Suspense fallback={<Loading />}>
            <SearchPageBody />
          </Suspense>
        </SidebarInset>
        
      </SidebarProvider>
    </div>
  );
}

export default SearchPage;
