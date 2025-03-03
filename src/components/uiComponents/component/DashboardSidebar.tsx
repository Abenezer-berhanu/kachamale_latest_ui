/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import DashboardSidebarCard from "./DashboardSidebarCard";
import { Camera, Clock5, Plus, User } from "lucide-react";
import CustomeButton from "./CustomeButton";
import { useClerk } from "@clerk/nextjs";

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

function DashboardSidebar({ user }: { user: any }) {
  const { signOut } = useClerk();

  return (
    <div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger className="w-12 h-fit border-r flex items-start justify-center">
            <HumbergerMenu />
          </SheetTrigger>
          <SheetTitle></SheetTitle>
          <SheetContent className="px-0">
            <div className="w-full h-full flex flex-col border">
              <DashboardSidebarCard
                label="My Ads/Posts"
                link="/ad/posts"
                Icon={Camera}
              />
              <DashboardSidebarCard
                label="Last Ads/Posts"
                link="/ad/last-5-ads"
                Icon={Clock5}
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
              {user?.success && user.message.role.toLowerCase() == "admin" && (
                <>
                  <DashboardSidebarCard
                    label="CHPC"
                    smallText="create home page carousel"
                    link="/ad/chpc"
                    Icon={User}
                  />
                  <DashboardSidebarCard
                    label="CPA"
                    smallText="create promotion Ad"
                    link="/ad/cpa"
                    Icon={User}
                  />
                </>
              )}
              <CustomeButton
                onClick={signOut}
                title="Log out"
                className="py-[8px] mt-auto w-fit px-3"
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="w-[240px] py-3 shadow-md h-[700px] rounded-lg px-5 flex flex-col max-md:hidden">
        <DashboardSidebarCard
          label="My Ads/Posts"
          link="/ad/posts"
          Icon={Camera}
        />
        <DashboardSidebarCard
          label="Last Ads/Posts"
          link="/ad/last-5-ads"
          Icon={Clock5}
        />
        <DashboardSidebarCard
          label="Post New AD"
          link="/ad/new-ad"
          Icon={Plus}
        />
        <DashboardSidebarCard label="Profile" link="/ad/profile" Icon={User} />
        {user?.success && user.message.role.toLowerCase() == "admin" && (
          <>
            <DashboardSidebarCard
              label="CHPC"
              smallText="create home page carousel"
              link="/ad/chpc"
              Icon={User}
            />
            <DashboardSidebarCard
              label="CPA"
              smallText="create promotion Ad"
              link="/ad/cpa"
              Icon={User}
            />
          </>
        )}
        <CustomeButton
          onClick={signOut}
          title="Log out"
          className="py-[8px] mt-auto w-fit px-3"
        />
      </div>
    </div>
  );
}

export default DashboardSidebar;
