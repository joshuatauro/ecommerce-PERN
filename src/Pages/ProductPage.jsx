import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import React from 'react'

const ProductPage = () => {
  return (
    <div className="w-[95%] mx-auto">
      <div className="grid grid-cols-12 min-h-screen">
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
        <div className="col-span-10 mt-5 ml-5 mb-12 ">
          <div className="grid grid-cols-2 gap-x-5">
            <div className="h-full w-full grid grid-rows-6 gap-y-3 place-items-center rounded-md">
              <div className="bg-[#f5f5f5] row-span-5 h-full w-full rounded-md grid place-items-center">
                <img className=" object-contain h-3/4" src="https://res.cloudinary.com/dvjlrqrlx/image/upload/v1662871150/ecom/airm2_sry0gq.png" alt="" />
              </div>
              <div className="row-span-2 grid grid-cols-3 gap-3 h-full w-full">
                <div className="h-full w-full bg-[#f5f5f5] rounded-md grid place-items-center">
                  <img className="object-contain w-2/3 max-h-3/4 " src="https://res.cloudinary.com/dvjlrqrlx/image/upload/v1666685767/ecom/61Er61SxBhL._SL1500__cxg7mq.png" alt="" />
                </div>
                <div className="h-full w-full bg-[#f5f5f5] rounded-md grid place-items-center">
                  <img className="object-contain w-2/3 max-h-3/4 " src="https://res.cloudinary.com/dvjlrqrlx/image/upload/v1662871150/ecom/airm1_u0jzzu.png" alt="" />
                </div>
                <div className="h-full w-full bg-[#f5f5f5] rounded-md grid place-items-center">
                  <img className="object-contain w-2/3 max-h-3/4 " src="https://res.cloudinary.com/dvjlrqrlx/image/upload/v1662875080/ecom/zdrjztfo3u8ftvdjb0v3_el3eaf.png" alt="" />
                </div>
              </div>
            </div>
            <div className="">
              <h1 className="text-3xl font-bold">Macbook Air M1</h1>
              <p className="font-normal text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, pariatur amet, reiciendis laborum tempora qui dignissimos iste saepe ab sed veritatis aspernatur et. Totam nam sapiente quaerat vitae ex fugit?</p>
              <p className="font-normal text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, pariatur amet, reiciendis laborum tempora qui dignissimos iste saepe ab sed veritatis aspernatur et. Totam nam sapiente quaerat vitae ex fugit?</p>
              <p className="font-normal text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, pariatur amet, reiciendis laborum tempora qui dignissimos iste saepe ab sed veritatis aspernatur et. Totam nam sapiente quaerat vitae ex fugit?</p>
              <h1 className="mt-3 mb-2 text-xl font-semibold">Product Description</h1>
              <ul>
                <li className="text-sm font-normal text-gray-500 mb-2"> STRIKINGLY THIN DESIGN – The redesigned MacBook Air is more portable than ever and weighs just 1.24 kg (2.7 pounds). It’s the ultra-capable laptop that lets you work, play or create just about anything — anywhere.
                </li>
                <li className="text-sm font-normal text-gray-500 mb-2">
                  SUPERCHARGED BY M2 – Get more done faster with a next-generation 8-core CPU, up to 10-core GPU and up to 24GB of unified memory.
                </li>
                <li className="text-sm font-normal text-gray-500 mb-2">
                  UP TO 18 HOURS OF BATTERY LIFE – Go all day and into the night, thanks to the power-efficient performance of the Apple M2 chip.
                </li>
                <li className="text-sm font-normal text-gray-500 mb-2">
                  BIG, BEAUTIFUL DISPLAY – The 34.46-centimetre (13.6-inch) Liquid Retina display features over 500 nits of brightness, P3 wide colour and support for one billion colours for vibrant images and incredible detail. 
                </li>
                <li className="text-sm font-normal text-gray-500 mb-2">
                  ADVANCED CAMERA AND AUDIO – Look sharp and sound great with a 1080p FaceTime HD camera, three-mic array and four-speaker sound system with Spatial Audio. 
                </li>
                <li className="text-sm font-normal text-gray-500 mb-2">
                  VERSATILE CONNECTIVITY – MacBook Air features a MagSafe charging port, two Thunderbolt ports and a headphone jack. 
                </li>
              </ul>

              <div className="flex mt-5">
                <button className="px-6 flex items-center text-sm font-medium outline outline-1 outline-cta hover:bg-cta hover:text-white duration-200 transition-all text-cta rounded-md py-4 bg-primary">
                  Add to cart
                  <ShoppingCartIcon className='h-5 ml-1' />
                </button>
                <button className="px-6 ml-3 flex items-center text-sm bg-secondary text-gray-600 outline outline-1 rounded-md outline-gray-400">
                  Wishlist
                  <HeartIcon className='h-5 ml-1' />
                </button>
              </div>
            </div>
          </div>
          <h1 className="mt-12 text-xl font-semibold">Product Reviews</h1>
          <p className="text-sm text-gray-500">Read the product reviews from people all over the world who have brought this product from us!</p>
        </div>
      </div>
    </div>
  )
}

export default ProductPage