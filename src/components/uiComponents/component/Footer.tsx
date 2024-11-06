import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white flex flex-col md:p-20 text-footer_text">
      <div className="grid grid-cols-4">
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
            <p>Lorem Ipsume lorem wamp real about lorem.</p>
          </div>
        </div>
        <div></div>
        <div></div>
        <div className="grid grid-cols-2">
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
                <Link href={"#"}>Bussiness Relation</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="font-bold">Social</h2>
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
                <Link href={"#"}>Bussiness Relation</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Separator className="my-8" />
      <div className="flex justify-between">
        <p className="text-black text-sm font-semibold w-fit">
          ©2022 ET Wow. All rights reserved
        </p>
        <div className="w-fit flex gap-5">
          <p className="text-black text-sm font-semibold">
            <Link href={"#"}>Privacy & Policy</Link>
          </p>
          <p className="text-black text-sm font-semibold">
            <Link href={"#"}>Privacy & Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
