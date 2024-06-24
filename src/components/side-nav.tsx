"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";
import { Link } from "next-view-transitions";
import React from "react";
import { File, Notebook, Phone, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

type Props = {};

function SideNav({}: Props) {
  const pathname = usePathname();
  return (
    <div className="flex flex-col border border-[#e7e7e7] bg-[#fafafa] w-48 py-4 px-2 space-y-6">
      <div className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1 relative z-20">
        <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm"></div>
        <span className="font-medium text-md text-black dark:text-white">
          Insight Leads
        </span>
      </div>
      <div className="flex flex-col space-y-1">
        <Link
          className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
          href="/dashboard"
        >
          <Notebook
            className={`h-4 w-4 ${pathname == "/dashboard" ? "text-black" : "text-muted"}`}
          />
          <span
            className={`${
              pathname == "/dashboard" ? "text-black" : "text-muted"
            } text-sm text-black dark:text-white hover:text-black`}
          >
            Dashboard
          </span>
        </Link>
        <Link
          className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
          href="/calls"
        >
          <Phone
            className={`h-4 w-4 ${pathname == "/calls" ? "text-black" : "text-muted"}`}
          />
          <span
            className={`${
              pathname == "/calls" ? "text-black" : "text-muted"
            } text-sm text-black dark:text-white hover:text-black`}
          >
            New Call Burst
          </span>
        </Link>
        <Link
          className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
          href="/upload"
        >
          <File
            className={`h-4 w-4 ${pathname == "/upload" ? "text-black" : "text-muted"}`}
          />
          <span
            className={`${
              pathname == "/upload" ? "text-black" : "text-muted"
            } text-sm text-black dark:text-white hover:text-black`}
          >
            Upload Files
          </span>
        </Link>
        <Link
          className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
          href="/settings"
        >
          <Settings className={`h-4 w-4 ${ pathname == "/settings" ? "text-black" : "text-muted"}`} />
          <span
            className={`${
              pathname == "/settings" ? "text-black" : "text-muted"
            } text-sm text-black dark:text-white hover:text-black`}
          >
            Settings
          </span>
        </Link>
      </div>
      {/* <Link
        className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
        href="/contact"
      >
        <BadgeHelp className="h-4 w-4" />
        <span className="text-sm text-muted dark:text-white">Contact Us</span>
      </Link> */}
    </div>
  );
}

export default SideNav;
