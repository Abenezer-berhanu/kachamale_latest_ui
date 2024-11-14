"use client"
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface PropsInterface {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: any;
  label: string;
  link: string;
}

const DashboardSidebarCard = ({ Icon, label, link }: PropsInterface) => {
    const pathname = usePathname()
  return (
    <Link
      href={link}
      className={`flex gap-4 my-1 pl-4 items-center text-gray_text py-2 rounded-lg ${pathname == link && "text-white bg-main_blue"}`}
    >
      <Icon />
      <p className="font-bold text-lg">{label}</p>
    </Link>
  );
};

export default DashboardSidebarCard;
