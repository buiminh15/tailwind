import { ChevronRightIcon } from '@heroicons/react/solid'
import React from 'react'
import CollectionItem from '../components/CollectionItem'

function CollectionContainer() {
  return (
    <div className='mt-20'>
      <div className='mb-3 text-5xl font-semibold'>Collections</div>
      <div className='flex items-center justify-between'>
        <span className='text-lg'>
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Delhi NCR, based on trends
        </span>
        <a href='https://www.zomato.com/' className='text-lg text-pink-400'>
          All collections in Delhi NCR
          <ChevronRightIcon className='ml-2 inline-block h-4 w-4' />
        </a>
      </div>
      <div className='mt-8 flex space-x-3'>
        {Array(4)
          .fill(1)
          .map((item, idx) => (
            <CollectionItem key={`collection-item-${idx}`} />
          ))}
      </div>
    </div>
  )
}

export default CollectionContainer
