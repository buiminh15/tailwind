import clsx from 'clsx'
import React from 'react'
import { ViewGridIcon } from '@heroicons/react/outline'
import SearchLocation from '../SearchLocation'

const menu = [
  { label: 'Investor Relations', url: '#' },
  { label: 'Add Restaurant', url: '#' },
  { label: 'Log In', url: '#' },
  { label: 'Sign Up', url: '#' },
]

function Header() {
  return (
    <div className='flex h-[420px] flex-col bg-gray-800'>
      <nav className='flex h-[72px] w-full justify-between py-4'>
        <div className='h-full'>
          <a
            className='flex h-full cursor-pointer items-center space-x-1'
            href='#'
            rel='noopener noreferrer'
          >
            <ViewGridIcon className='m-0 h-4 w-4 p-0 text-white' />
            <span className='text-base font-semibold text-white'>
              Get the App
            </span>
          </a>
        </div>
        <ul className='flex list-none'>
          {menu.map((item, index) => (
            <li
              className={clsx('ml-5 cursor-pointer p-2')}
              key={`menu-${index}`}
            >
              <a
                className=' 
                text-lg
                text-white
                '
                href={item.url}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className='mx-auto h-full w-[766px] bg-slate-600'>
        <div className='text-center text-6xl font-bold uppercase italic text-white'>
          zomato
        </div>
        <div className='mt-8 text-center text-4xl text-white'>
          Discover the best food & drinks in{' '}
          <span className='text-4xl font-semibold tracking-wider'>
            Delhi NCR
          </span>
        </div>
        <SearchLocation />
      </div>
    </div>
  )
}

export default Header
