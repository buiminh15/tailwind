import { ClockIcon, SearchIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import {
  ChevronDownIcon,
  CogIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "../../hooks/useOnClickOutSide";

const menu = [{ location: "test", address: "test1" }];

const DetectLocation = ({ locations }) => (
  <div className="min-h-min w-full ">
    <div className="cursor-pointer py-3 px-4 hover:bg-slate-100">
      <div className="flex items-center space-x-2 text-pink-500">
        <CogIcon className="inline-block h-5 w-5 text-pink-600" />
        <span className="text-lg font-semibold">Detect current location</span>
      </div>
      <div className="ml-7 text-sm text-gray-500">Using GPS</div>
    </div>
    <div className="w-full border-b-2" />
    {true && (
      <div>
        <div className="px-4 pt-3 text-base text-gray-600">
          Recent Locations
        </div>
        {Array(3)
          .fill(1)
          ?.map((location, index) => (
            <>
              <div
                key={`location-${index}`}
                className="flex flex-1 cursor-pointer items-center space-x-2 py-3 pl-5 pr-3 hover:bg-slate-100"
              >
                <ClockIcon className="inline-block h-5 w-5" />
                <span className="truncate">{location + Date()}</span>
              </div>
              <div className="w-full border-b-2" />
            </>
          ))}
      </div>
    )}
  </div>
);

const RestaurantItem = ({ item, ...props }) => (
  <div className="flex space-x-4 py-4 px-2 hover:bg-slate-100" {...props}>
    <div className="inline-block overflow-hidden rounded-md ">
      <img
        src="https://images.unsplash.com/photo-1644982647708-0b2cc3d910b7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074"
        alt=""
        className="h-[72px] w-[72px] rounded-md object-cover"
      />
    </div>
    <div className="flex-1 ">
      <div className="text-base font-medium">Name</div>
      <div className="flex">
        <Ranking name="dining" score="1" />
        <span className="mx-2 h-3/5 w-0.5 bg-white"></span>
        <Ranking name="delivery" score="0" />
      </div>
      <div className="truncate text-sm text-gray-400">Address</div>
      <div className="text-sm text-gray-300">Status</div>
    </div>
  </div>
);

const Ranking = ({ name, score }) => (
  <div className="inline-block flex">
    <div
      className={clsx(
        "flex min-w-[36px] items-center justify-evenly rounded-md px-1",
        Number(score) && "bg-green-500",
        !Number(score) && "bg-gray-300"
      )}
    >
      {Number(score) ? (
        <span className="text-sm text-white">{score}</span>
      ) : (
        <span className="text-sm text-white">-</span>
      )}
      <StarIcon className="inline-block h-3 w-3 text-white" />
    </div>
    <span className="ml-2 text-sm uppercase text-gray-500">{name}</span>
  </div>
);

function SearchLocation() {
  const [showDetectLocation, setShowDetectLocation] = useState(false);
  const refDectect = useRef();

  useOnClickOutside(refDectect, () => setShowDetectLocation(false));

  const handleArrowDown = () => {
    setShowDetectLocation(!showDetectLocation);
  };

  return (
    <div className="mt-8 box-border flex h-[52px] w-full rounded-md bg-white">
      <div className="relative box-border flex flex-[2_2_0%] items-center pl-3">
        <LocationMarkerIcon className="h-5 w-5 text-pink-400" />
        <input
          ref={refDectect}
          onFocus={handleArrowDown}
          type="text"
          className="box-border flex-1 px-1 py-2 outline-none"
          placeholder="Hoang Mai, Ha Noi"
        />
        <ChevronDownIcon
          className={`h-5 w-5 cursor-pointer transition-all duration-300 ease-out ${
            showDetectLocation ? "rotate-180" : "rotate-0"
          }`}
          onClick={handleArrowDown}
        />
        <span className="mx-2 h-3/5 w-0.5 bg-slate-300"></span>
        {/* absolute */}
        <div className="absolute left-0 top-16 z-50 max-h-max w-[360px] overflow-y-hidden rounded-md bg-white">
          {showDetectLocation && <DetectLocation />}
        </div>
      </div>

      <div className="relative flex flex-[3_3_0%] items-center">
        <SearchIcon className="h-5 w-5 text-pink-400" />
        <input
          type="text"
          className="box-border flex-1 px-1 py-2 outline-none"
          placeholder="Search for restaurant, cuisine or a dish"
        />

        {/* absolute */}
        <div className="absolute left-0 top-16 max-h-[514px] w-full overflow-auto rounded-md bg-white">
          {/* {Array(6)
            .fill(1)
            ?.map((item, index) => (
              <RestaurantItem item={item} key={`restaurant-item-${index}`} />
            ))} */}
        </div>
      </div>
    </div>
  );
}

export default SearchLocation;
