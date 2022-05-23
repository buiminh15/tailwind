import { ChevronDownIcon } from '@heroicons/react/solid'
import React from 'react'

function SeeMore({ ...props }) {
  return (
    <div
      {...props}
      className='flex min-h-[80px] items-center justify-center space-x-2 rounded-md bg-white p-3 shadow'
    >
      <div className='text-2xl'>see more</div>
      <ChevronDownIcon className='inline-block h-5 w-5' />
    </div>
  )
}

export default SeeMore
