import React from 'react'
import PopularLocation from '../components/PopularLocation'
import SeeMore from '../components/PopularLocation/SeeMore'

function PopularLocalities() {
  const arr = Array(9).fill(1)
  let slicedArr
  if (arr.length > 8) {
    slicedArr = arr.slice(0, 8)
  } else {
    slicedArr = arr
  }
  return (
    <div className='mt-20 text-5xl'>
      Popular localities in and around{' '}
      <span className='font-semibold'>Delhi NCR</span>
      <div className='mt-10 grid grid-cols-3 gap-4'>
        {slicedArr.map((i, idx) => (
          <PopularLocation key={`popular-location-${idx}`} />
        ))}
        <SeeMore />
      </div>
    </div>
  )
}

export default PopularLocalities
