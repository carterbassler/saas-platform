"use client";

import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  useSession,
} from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import Image from "next/image";
import { api } from "../../convex/_generated/api";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowRightIcon,
  BellIcon,
  CalendarIcon,
  Code,
  FileAudio,
  FileTextIcon,
  GlobeIcon,
  Share2Icon,
} from "lucide-react";
import { Link } from "next-view-transitions";
import { delay, motion, useAnimation, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import Globe from "@/components/magicui/globe";
import Marquee from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { InputIcon } from "@radix-ui/react-icons";
import { AnimatedBeamMultipleOutputDemo } from "@/components/animated-tree";
import { AnimatedListDemo } from "@/components/animated-data";
import { IconCloudDemo } from "@/components/icon-cloud";
import { FeaturesSection } from "@/components/magicui/info-cards";

const files = [
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "finances.xlsx",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "logo.svg",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "Save your Calls",
    description:
      "We automatically save your call batches, so you can review them later",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: FileAudio,
    name: "Call Transcription",
    description: "Each call is transcribed and saved for you.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Integrations",
    description:
      "Supporting BlandAI integration as an extremely powerful AI tool to make multiples of calls at once",
    href: "https://www.bland.ai/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: Code,
    name: "Technology",
    description: "Powered by the cutting edge technologies",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute top-0 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]">
        <IconCloudDemo />
      </div>
    ),
  },
];

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const thirdRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-96 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-md font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-sm font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-md">{body}</blockquote>
    </figure>
  );
};

export default function Home() {
  const { isSignedIn } = useSession();
  const ref = useRef(null);
  const isInView = useInView(ref);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 3 }, delay: 1 },
  };

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex min-h-screen flex-col items-center justify-between">
        <div className="flex flex-col min-h-screen pt-20 md:pt-40 relative overflow-hidden space-y-24">
          {/* <div className="z-10 flex items-center justify-center">
            <div
              className={cn(
                "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ Introducing Insights Leads</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>
          </div> */}
          <div className="flex flex-col">
            <motion.h1
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-2xl md:text-4xl lg:text-7xl font-semibold max-w-6xl mx-auto text-center mt-6 relative z-10"
            >
              Automate Cold Calling to find Real Estate Wholesaling Leads
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-center mt-6 text-base md:text-xl text-muted dark:text-muted-dark max-w-3xl mx-auto relative z-10"
            >
              The best platform out there to help automate your search for
              leads. Simple as inputting the list of phone numbers to cold call
              and we will do the rest.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex items-center gap-4 justify-center mt-6 relative z-10"
            >
              <button className="bg-neutral-900 relative z-10 hover:bg-black/90 border border-transparent text-white text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset]">
                Get Started
              </button>
              <Link
                className="relative z-10 bg-transparent hover:bg-gray-100 border border-transparent text-black text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 justify-center dark:text-white dark:hover:bg-neutral-800 dark:hover:shadow-xl flex space-x-2 items-center group"
                href="/contact"
              >
                <span>Contact us</span>
                <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
            <div className="hidden md:flex flex-row justify-center space-x-12 items-center">
              <motion.h1
                className="text-4xl font-medium"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={variants}
              >
                Make Calls All
              </motion.h1>
              <Globe />
              <motion.h1
                className="text-4xl font-medium"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={variants}
              >
                Over the World
              </motion.h1>
            </div>
          </div>

          <div className="py-2 px-0.5 flex flex-col space-y-12">
            <div>
              <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
                Packed with tons of features
              </h4>
              <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
                From Image generation to video generation, Everything AI has
                APIs for literally everything. It can even create this website
                copy for you.
              </p>
            </div>
            {/* x padding is temporary fix for bento grid */}
            <BentoGrid>
              {features.map((feature, idx) => (
                <BentoCard key={idx} {...feature} />
              ))}
            </BentoGrid>
          </div>
          {/* <FeaturesSection/> */}
          <div className="flex flex-col space-y-12">
            <div>
              <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
                Loved by people everywhere
              </h4>
              <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
                Here's a little subsection for the reviews portion of the main
                page. Need to figure out what to write in here.
              </p>
            </div>
            <div className="relative grid h-[500px] w-full grid-cols-2 md:grid-cols-3 items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
              <Marquee vertical className="[--duration:20s]">
                {firstRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
              <Marquee reverse vertical className="[--duration:20s]">
                {secondRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
              <Marquee vertical className="hidden md:flex [--duration:20s]">
                {thirdRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
