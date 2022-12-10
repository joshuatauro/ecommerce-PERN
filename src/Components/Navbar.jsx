import React from 'react'
import { MagnifyingGlassIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
const Navbar = () => {
  return (
    <nav className="h-24 border-b-2 font-primary">
      <div className="w-[95%] mx-auto h-full grid grid-cols-16">
        <div className="w-full h-full flex items-center border-r-2 col-span-2 ">
          <h1 className=" font-primary font-extrabold text-2xl"> AMAZON</h1>
        </div>
        <div className="ml-5 flex items-center col-span-14 justify-between">
          <div className="flex">
            <div className="h-12 px-2 flex items-center rounded-md bg-secondary">
              <MagnifyingGlassIcon className="h-5 text-[#9CA3AF]" />
            </div>
            <input type="text" placeholder='Search among 100+ products' className="placeholder:text-sm focus:outline-none w-96 h-12 bg-secondary rounded-md text-sm text-gray-500" />
          </div>
          <div className="flex">
            <div className="h-12 flex items-center  bg-primary px-5 rounded-md text-cta">
              <h1 className='text-sm text-cta mr-2'>Wishlist</h1>
              <HeartIcon className='h-5' />
            </div>
            <div className="h-12 flex items-center  bg-primary px-5 rounded-md text-cta mx-2">
              <h1 className='text-sm text-cta mr-2'>Cart</h1>
              <ShoppingCartIcon className='h-5' />
            </div>
            <div className="h-12 flex items-center justify-center w-12 border rounded-full">
              <img className='h-9 rounded-full' src="https://img.freepik.com/premium-vector/people-happy-face-man-icon_24640-19226.jpg?w=2000" alt="" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar