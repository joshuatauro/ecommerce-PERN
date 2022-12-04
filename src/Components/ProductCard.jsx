import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import React from 'react'

const ProductCard = ({image, price, name}) => {
  return (
    <div className="grid grid-rows-3 h-72 rounded-xl outline-1 outline outline-gray-300 ">
      <div className=" bg-[#f5f5f5] rounded-t-xl outline outline-gray-300 outline-1  row-span-2 grid  place-items-center px-5">
        <img className="object-contain h-3/4" src={image} alt="" />
      </div>
      <div className="mx-3 my-2 flex flex-col justify-between">
        <h1 className=" font-medium">{name}</h1>
        <div className="flex justify-between">
          <div className="">
            <p className="text-xs text-gray-600">Price:</p>
            <h1 className="font-bold text-lg">{price}</h1>
          </div>
          <button className="px-3 rounded-md bg-cta">
            <ShoppingCartIcon className="h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard