import { ChevronRightIcon } from '@heroicons/react/solid'
import React from 'react'

function PopularLocation({ ...props }) {
  return (
    <a
      href='https://www.zomato.com/'
      {...props}
      className='flex items-center justify-between rounded-md bg-white p-3 shadow'
    >
      <div className='flex-1'>
        <div className='text-2xl'>aa</div>
        <div className='text-base text-gray-500'>bb</div>
      </div>
      <ChevronRightIcon className='inline-block h-5 w-5' />
    </a>
  )
}

export default PopularLocation
