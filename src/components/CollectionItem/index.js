import { ChevronRightIcon } from '@heroicons/react/outline'
import React from 'react'

const imgUrl =
  'https://images.unsplash.com/photo-1653260137243-2b3daabf9aab?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=383'

function CollectionItem({ img, url, collectionName, number, ...props }) {
  return (
    <a
      {...props}
      href={'https://www.zomato.com/'}
      className='relative h-[320px] min-h-[80px] w-3 flex-1 overflow-hidden rounded-xl shadow'
    >
      <img src={imgUrl} className='object-cover backdrop-blur-3xl' alt='test' />
      <div className='absolute inset-0 h-full w-full bg-gradient-to-b from-purple-500 to-pink-800 opacity-70'></div>
      <div className='absolute left-5 bottom-10 text-xl text-white'>
        1aaaaaaa
      </div>
      <div className='text-md absolute left-5 bottom-3 text-white'>
        58 Places
        <ChevronRightIcon className='ml-2 inline-block h-4 w-4' />
      </div>
    </a>
  )
}

export default CollectionItem
