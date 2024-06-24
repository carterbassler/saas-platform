"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

const pathnameToHeader: { [key: string]: string } = {
  "/dashboard": "Dashboard",
  "/calls": "New Call Burst",
  "/upload": "Upload Files",
  "/settings": "Settings",
};

function TopNav({}: Props) {
  const pathname = usePathname();
  const headerName = pathnameToHeader[pathname] || "Miscellaneous";
  return (
    <div className="flex w-full py-4 border border-[#e7e7e7] bg-[#fafafa]">
      <div className="flex flex-row container justify-between">
        <h1 className="font-medium">{headerName}</h1>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

export default TopNav;
