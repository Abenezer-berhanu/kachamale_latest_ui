import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white flex flex-col text-footer_text p-6 sm:p-10 md:p-20">
  {/* Top Section */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    {/* Logo and Description */}
    <div className="flex flex-col gap-4 text-sm">
      <Image
        src={"/assets/footerLogo.png"}
        alt="Footer Logo"
        width={100}
        height={100}
        className="max-w-[184px] h-[44px] object-contain w-full"
      />
      <div className="max-w-[300px] flex flex-col gap-5">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <p>Lorem Ipsum lorem wamp real about lorem.</p>
      </div>
    </div>

    {/* Placeholder for Empty Columns */}
    <div className="hidden md:block"></div>
    <div className="hidden md:block"></div>

    {/* Links Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div className="flex flex-col gap-5">
        <h2 className="font-bold">About</h2>
        <ul className="flex flex-col text-sm gap-3">
          <li>
            <Link href={"#"}>How it works</Link>
          </li>
          <li>
            <Link href={"#"}>Featured</Link>
          </li>
          <li>
            <Link href={"#"}>Partnership</Link>
          </li>
          <li>
            <Link href={"#"}>Business Relation</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="font-bold">Social</h2>
        <ul className="flex flex-col text-sm gap-3">
          <li>
            <Link href={"#"}>Facebook</Link>
          </li>
          <li>
            <Link href={"#"}>Twitter</Link>
          </li>
          <li>
            <Link href={"#"}>Instagram</Link>
          </li>
          <li>
            <Link href={"#"}>LinkedIn</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>

  {/* Separator */}
  <Separator className="my-8" />

  {/* Bottom Section */}
  <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
    <p className="text-black text-sm font-semibold">
      ©2022 ET Wow. All rights reserved
    </p>
    <div className="flex gap-5">
      <p className="text-black text-sm font-semibold">
        <Link href={"#"}>Privacy & Policy</Link>
      </p>
      <p className="text-black text-sm font-semibold">
        <Link href={"#"}>Terms of Service</Link>
      </p>
    </div>
  </div>
</footer>

  );
}
