import React from "react";

type Props = {};

function PricingCard({}: Props) {
  return (
    <div className="bg-white dark:bg-black rounded-lg px-6 py-8 sm:mx-8 lg:mx-0 h-full flex flex-col justify-between">
      <div className="">
        <h3
          id="tier-hobby"
          className="text-muted dark:text-muted-dark text-base font-semibold leading-7"
        >
          Hobby
        </h3>
        <p className="mt-4">
          <span
            className="text-4xl font-bold tracking-tight inline-block text-neutral-900 dark:text-neutral-200"
            style={{opacity: 1, transform: 'none'}}
          >
            $4/mo
          </span>
        </p>
        <p className="text-neutral-600 dark:text-neutral-300 mt-6 text-sm leading-7 h-12 md:h-12 xl:h-12">
          Best for developers trying to use the platform.
        </p>
        <ul
          role="list"
          className="text-neutral-600 dark:text-neutral-300 mt-8 space-y-3 text-sm leading-6 sm:mt-10"
        >
          <li className="flex gap-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="none"
              className="tabler-icon tabler-icon-circle-check-filled text-muted dark:text-muted-dark h-6 w-5 flex-none"
              aria-hidden="true"
            >
              <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"></path>
            </svg>
            5 API requests per day
          </li>
          <li className="flex gap-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="none"
              className="tabler-icon tabler-icon-circle-check-filled text-muted dark:text-muted-dark h-6 w-5 flex-none"
              aria-hidden="true"
            >
              <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"></path>
            </svg>
            Access to basic API endpoints
          </li>
          <li className="flex gap-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="none"
              className="tabler-icon tabler-icon-circle-check-filled text-muted dark:text-muted-dark h-6 w-5 flex-none"
              aria-hidden="true"
            >
              <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"></path>
            </svg>
            Email support within 48 hours
          </li>
          <li className="flex gap-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="none"
              className="tabler-icon tabler-icon-circle-check-filled text-muted dark:text-muted-dark h-6 w-5 flex-none"
              aria-hidden="true"
            >
              <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"></path>
            </svg>
            Community forum access
          </li>
          <li className="flex gap-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="none"
              className="tabler-icon tabler-icon-circle-check-filled text-muted dark:text-muted-dark h-6 w-5 flex-none"
              aria-hidden="true"
            >
              <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"></path>
            </svg>
            Monthly newsletter
          </li>
        </ul>
      </div>
      <div>
        <button
          className="bg-neutral-900 relative z-10 hover:bg-black/90 border border-transparent text-white md:text-sm transition duration-200 items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] mt-8 rounded-full py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full"
          aria-describedby="tier-hobby"
        >
          Browse Components
        </button>
      </div>
    </div>
  );
}

export default PricingCard;
