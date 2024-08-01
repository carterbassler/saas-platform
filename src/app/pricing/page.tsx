import React from "react";
import PricingCard from "./PricingCard";
import HighlightedPricingCard from "./HighlightedPricingCard";

type Props = {};

function Pricing({}: Props) {
  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-between pb-20">
        <div className="relative z-20 py-10 md:pt-40">
          <h1 className="max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white text-3xl md:text-5xl md:leading-tight">
            Simple pricing for your ease
          </h1>
          <h2 className="text-sm md:text-base max-w-2xl my-4 mx-auto text-muted font-normal dark:text-muted-dark text-center">
            Every AI offers a wide range of services. You can choose the one
            that suits your needs. Select from your favourite plan and get
            started instantly.
          </h2>
        </div>
        <div className="relative">
          <div className="mx-auto mt-4 md:mt-10 grid relative z-20 grid-cols-1 gap-4 items-center  md:grid-cols-2 xl:grid-cols-3">
            <PricingCard />
            <HighlightedPricingCard />
            <PricingCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
