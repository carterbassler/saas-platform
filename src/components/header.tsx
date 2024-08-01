"use client";

import { Sign } from "crypto";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
// import Link from "next/link";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";

export function Header() {
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const showBar = document.getElementById("showBar");
      if (showBar) {
        if (window.scrollY > 0) {
          showBar.classList.add("opacity-100");
          showBar.classList.remove("opacity-0");
        } else {
          showBar.classList.add("opacity-0");
          showBar.classList.remove("opacity-100");
        }
      }
    };

    // Call handleScroll immediately to set the initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="max-w-7xl  fixed top-4  mx-auto inset-x-0 z-50 w-[95%] lg:w-full">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="hidden lg:block w-full"
      >
        <div className="w-full flex relative justify-between px-4 py-2 rounded-full bg-transparent transition duration-200">
          <div
            id="showBar"
            className="absolute inset-0 h-full w-full bg-neutral-100 dark:bg-neutral-800 pointer-events-none mask-image-gradient-to-b-white-transparent-white rounded-full opacity-0 transition-opacity duration-300"
          ></div>
          <div className="flex flex-row gap-2 items-center">
            <Link
              className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
              href="/"
            >
              <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm"></div>
              <span className="font-medium text-black dark:text-white">
                Insight Leads
              </span>
            </Link>
            <div className="flex items-center gap-1.5 z-10">
              <SignedOut>
                <a
                  className={`${
                    pathname == "/pricing" ? "bg-gray-100" : "bg-transparent"
                  } flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-[#F5F5F5] dark:hover:bg-neutral-800 hover:text-black dark:text-muted-dark bg-gray-100 dark:bg-neutral-800 text-muted`}
                >
                  <Link href="/pricing">Pricing</Link>
                </a>
                <a
                  className={`${
                    pathname == "/contact" ? "bg-gray-100" : "bg-transparent"
                  } flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-[#F5F5F5] dark:hover:bg-neutral-800 hover:text-black dark:text-muted-dark bg-gray-100 dark:bg-neutral-800 text-muted`}
                >
                  <Link href="/contact">Contact</Link>
                </a>
              </SignedOut>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            {/* <ModeToggle /> */}
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <div className="relative z-10 bg-transparent hover:bg-gray-100 border border-transparent text-black text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center dark:text-white dark:hover:bg-neutral-800 dark:hover:shadow-xl">
                <SignInButton>Login</SignInButton>
              </div>
              <div className="bg-neutral-900 relative z-10 hover:bg-black/90 border border-transparent text-white text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset]">
                <SignUpButton />
              </div>
            </SignedOut>
          </div>
        </div>
      </motion.div>
      <div className="flex h-full w-full items-center lg:hidden">
        <div className="flex justify-between bg-white dark:bg-neutral-900 items-center w-full rounded-full px-2.5 py-1.5 transition duration-200">
          <a
            className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
            href="/"
          >
            <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm"></div>
            <span className="font-medium text-black dark:text-white">
              Insight Leads
            </span>
          </a>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            className="text-black dark:text-white h-6 w-6"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"></path>
          </svg>
        </div>
      </div>
    </nav>
  );
}
