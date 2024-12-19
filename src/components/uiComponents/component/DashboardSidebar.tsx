"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import DashboardSidebarCard from "./DashboardSidebarCard";
import { Camera, House, Plus, User } from "lucide-react";
import CustomeButton from "./CustomeButton";

const HumbergerMenu = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-align-justify"
    >
      <path d="M3 12h18" />
      <path d="M3 18h18" />
      <path d="M3 6h18" />
    </svg>
  );
};

function DashboardSidebar() {
  return (
    <div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger className="w-12 h-fit border-r flex items-start justify-center">
            <HumbergerMenu />
          </SheetTrigger>
          <SheetContent className="px-0">
            <SheetHeader className="mb-2">
              <SheetTitle>Get Your Best Fit</SheetTitle>
              <SheetDescription>
                If you have a car to sell click Post New AD
              </SheetDescription>
            </SheetHeader>
            <div className="w-full h-full flex flex-col border">
              <DashboardSidebarCard
                label="Dashboard"
                link="/ad/dashboard"
                Icon={House}
              />
              <DashboardSidebarCard
                label="My Ads/Posts"
                link="/ad/posts"
                Icon={Camera}
              />

              <DashboardSidebarCard
                label="Post New AD"
                link="/ad/new-ad"
                Icon={Plus}
              />
              <DashboardSidebarCard
                label="Profile"
                link="/ad/profile"
                Icon={User}
              />
              <CustomeButton
                title="Log out"
                className="py-[8px] mt-auto w-fit px-3"
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="w-[240px] py-3 shadow-md h-[700px] rounded-lg px-5 flex flex-col max-md:hidden">
        <DashboardSidebarCard
          label="Dashboard"
          link="/ad/dashboard"
          Icon={House}
        />
        <DashboardSidebarCard
          label="My Ads/Posts"
          link="/ad/posts"
          Icon={Camera}
        />

        <DashboardSidebarCard
          label="Post New AD"
          link="/ad/new-ad"
          Icon={Plus}
        />
        <DashboardSidebarCard label="Profile" link="/ad/profile" Icon={User} />
        <CustomeButton
          title="Log out"
          className="py-[8px] mt-auto w-fit px-3"
        />
      </div>
    </div>
  );
}

export default DashboardSidebar;
