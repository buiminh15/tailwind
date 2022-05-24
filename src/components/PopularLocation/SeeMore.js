import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import React from "react";

export function SeeMore({ handleSeeMore, ...props }) {
  return (
    <div
      {...props}
      onClick={handleSeeMore}
      className="flex min-h-[80px] cursor-pointer items-center justify-center space-x-2 rounded-md bg-white p-3 shadow select-none"
    >
      <div className="text-2xl">see more</div>
      <ChevronDownIcon className="inline-block h-5 w-5" />
    </div>
  );
}

export function SeeLess({ handleSeeLess, ...props }) {
  return (
    <div
      {...props}
      onClick={handleSeeLess}
      className="flex min-h-[80px] cursor-pointer items-center justify-center space-x-2 rounded-md bg-white p-3 shadow select-none"
    >
      <div className="text-2xl">see less</div>
      <ChevronUpIcon className="inline-block h-5 w-5" />
    </div>
  );
}

