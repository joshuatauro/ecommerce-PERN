import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({image, price, name, id}) => {
  return (
    <div className="grid grid-rows-3 h-72 rounded-xl outline-1 outline outline-gray-300 ">
      <Link className="bg-secondary rounded-t-xl outline outline-gray-300 outline-1  row-span-2 grid  place-items-center px-5">
        <img className="object-contain h-3/4" src={image} alt="" />
      </Link>
      <div className="mx-3 my-2 flex flex-col justify-between">
        <Link to="">
          <h1 className=" font-medium">{name}</h1>
        </Link>
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