import React, { useEffect, useState } from "react";
import PopularLocation from "../components/PopularLocation";
import { SeeMore, SeeLess } from "../components/PopularLocation/SeeMore";

// test
function PopularLocalities() {
  const [showMore, setShowMore] = useState(false);
  const [showLess, setShowLess] = useState(false);
  const [slicedArr, setSlicedArr] = useState();

  const arr = Array(4).fill(1);
  const len = arr.length;

  useEffect(() => {
    handleArr();
  }, []);

  const handleArr = () => {
    if (len >= 9) {
      setSlicedArr(arr.slice(0, 8));
      setShowMore(true);
    } else if (len >= 6) {
      setSlicedArr(arr.slice(0, 5));
      setShowMore(true);
    } else if (len >= 3) {
      setSlicedArr(arr.slice(0, 2));
      setShowMore(true);
    } else {
      setSlicedArr(arr);
    }
  };

  const handleSeeMore = () => {
    setShowMore(false);
    setSlicedArr(arr);
    setShowLess(true);
  };
  const handleSeeLess = () => {
    setShowLess(false);
    handleArr();
  };

  return (
    <div className="my-20 text-5xl">
      Popular localities in and around{" "}
      <span className="font-semibold">Delhi NCR</span>
      <div className="mt-10 grid grid-cols-3 gap-4">
        {slicedArr?.map((i, idx) => (
          <PopularLocation key={`popular-location-${idx}`} />
        ))}
        {showMore && <SeeMore handleSeeMore={handleSeeMore} />}
        {showLess && <SeeLess handleSeeLess={handleSeeLess} />}
      </div>
    </div>
  );
}

export default PopularLocalities;
