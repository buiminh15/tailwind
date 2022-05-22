import { SearchIcon } from '@heroicons/react/outline'
import { ChevronDownIcon, LocationMarkerIcon } from '@heroicons/react/solid'
import React from 'react'

const menu = [{ location: 'test', address: 'test1' }]

const LocationItem = ({ location, address, ...props }) => (
  <div {...props} className='h-28 max-h-max w-full py-3 px-4'>
    <div className='text-lg'>{location}</div>
    <div className='text-gray-500'>{address}</div>
    <div className='mt-3 w-full border-b-2'></div>
  </div>
)

function SearchLocation() {
  return (
    <div className='mx-2 mt-8 box-border flex h-[52px] w-full rounded-md bg-white'>
      <div className='relative box-border flex flex-[2_2_0%] items-center pl-3'>
        <LocationMarkerIcon className='h-5 w-5 text-pink-400' />
        <input
          type='text'
          className='box-border flex-1 px-1 py-2 outline-none'
          placeholder='text1'
        />
        <ChevronDownIcon className='h-5 w-5' />
        <span className='mx-2 h-3/5 w-0.5 bg-slate-300'></span>
        {/* absolute */}
        <div className='absolute left-0 top-16 h-[152px] w-[120%] overflow-y-scroll rounded-md bg-white'>
          {menu.map((item, index) => (
            <LocationItem
              key={`list-item-${index}`}
              location={item.location}
              address={item.address}
            />
          ))}
        </div>
      </div>

      <div className='flex flex-[3_3_0%] items-center'>
        <SearchIcon className='h-5 w-5 text-pink-400' />
        <input
          type='text'
          className='box-border px-1 py-2 outline-none'
          placeholder='text1'
        />
      </div>
    </div>
  )
}

export default SearchLocation
