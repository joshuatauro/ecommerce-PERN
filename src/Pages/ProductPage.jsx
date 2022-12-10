import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useEffect } from 'react'
import ProductCard from '../Components/ProductCard'
import ReviewCard from '../Components/ReviewCard'
import axios from 'axios'
import { useState } from 'react'
const ProductPage = () => {

  const [prodDetails, setProdDetails] = useState()

  useEffect(() => {
    const details = async() => {
      const {data} = await axios.get("http://localhost:5000/api/products/8a55b57e-8c0c-4068-8811-bdadfb2a2419")
      setProdDetails(data.prodDetails)
      console.log(data)
    }
    details()
  }, [])

  return (
    <div className="w-[95%] mx-auto">
      <div className="grid grid-cols-16 min-h-screen">
        <div className="col-span-2 pt-5 border-r-2">
          <div className="w-full ">
            <h1 className="font-manrope  font-bold">Overview</h1>
            <ul className=" w-10/12 mx-auto mt-2 text-sm font-semibold text-gray-500">
              <li className="mb-3 text-cta">Product Details</li>
              <li className="mb-3 ">Reviews</li>
              <li className="mb-3">More products</li>
            </ul>
          </div>
        </div>
        <div className="col-span-14 mt-5 ml-5 mb-12 ">
          <div className="grid grid-cols-5 gap-x-5">
            <div className="h-full w-full col-span-2 grid grid-rows-6 gap-y-3 place-items-center rounded-md">
              <div className="bg-secondary row-span-5 h-full w-full rounded-md grid place-items-center">
                <img className=" object-contain h-3/4" src={prodDetails?.images[0]} alt="" />
              </div>
              <div className="row-span-2 grid grid-cols-3 gap-3 h-full w-full">
                <div className="h-full w-full bg-secondary rounded-md grid place-items-center">
                  <img className="object-contain w-2/3 max-h-3/4 " src={prodDetails?.images[1]} alt="" />
                </div>
                <div className="h-full w-full bg-secondary rounded-md grid place-items-center">
                  <img className="object-contain w-2/3 max-h-3/4 " src={prodDetails?.images[2]} alt="" />
                </div>
                <div className="h-full w-full bg-secondary rounded-md grid place-items-center">
                  <img className="object-contain w-2/3 max-h-3/4 " src={prodDetails?.images[3]} alt="" />
                </div>
              </div>
            </div>
            <div className="col-span-3">
              <h1 className="text-3xl font-bold">{prodDetails?.title}</h1>
              <p className="font-medium text-sm text-gray-500">{prodDetails?.about}</p>
              
              <h1 className="mt-3 text-xl font-semibold">Product Description</h1>
              <ul>
                {
                  prodDetails?.details.map(body => {
                    return(
                      <li className="text-sm font-medium text-gray-500 mb-2"> {body}
                    </li>
                    )
                  })
                }
              </ul>

              <div className="flex mt-5">
                <button className="px-6 flex items-center text-sm font-semibold  hover:bg-cta hover:text-white duration-200 transition-all text-cta rounded-md py-4 bg-primary">
                  Add to cart
                  <ShoppingCartIcon className='h-5 ml-1' />
                </button>
                <button className="px-6 ml-3 flex items-center text-sm font-semibold rounded-md outline-red-500 bg-secondary text-gray-800">
                  Wishlist
                  <HeartIcon className='h-5 ml-1' />
                </button>
              </div>
            </div>
          </div>
          <h1 className="mt-12 text-xl font-semibold">Product Reviews</h1>
          <p className="text-sm text-gray-500">Read the product reviews from people all over the world who have brought this product from us!</p>
          <button className="text-sm py-4 rounded-md px-5 bg-primary text-cta font-semibold my-5">Sort by: Highest Rating</button>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <h1 className="mt-12 text-xl font-semibold">More Products like this</h1>
          <div className="grid grid-cols-4 gap-5 mt-3">
            <ProductCard image={"https://res.cloudinary.com/dvjlrqrlx/image/upload/v1662871150/ecom/airm1_u0jzzu.png"} price={1500} name="Macbook Air M2" />
            <ProductCard image={"https://res.cloudinary.com/dvjlrqrlx/image/upload/v1666678804/ecom/61KeIxmldLL._SL1500__r8hm98.png"} price={800} name="iPhone 13 Pro"/>
            <ProductCard image={"https://res.cloudinary.com/dvjlrqrlx/image/upload/v1662875080/ecom/zdrjztfo3u8ftvdjb0v3_el3eaf.png"} price={150} name="Keychron K2V2"/>
            <ProductCard image={"https://res.cloudinary.com/dvjlrqrlx/image/upload/v1662876102/ecom/51xxA_6E_xL._SX679__phcayy.png"} price={1500} name="Macbook Air M2"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage