import React from 'react'
import ProductCard from '../Components/ProductCard'
const Landing = () => {
  return (
    <div className="w-[95%] mx-auto">
      <div className="grid grid-cols-12">
        <div className="col-span-2 pt-5 border-r-2">
          <div className="w-full ">
            <h1 className="font-manrope  font-bold">Category</h1>
            <ul className=" w-10/12 mx-auto mt-2 text-sm font-semibold text-gray-500">
              <li className="mb-3 ">Laptops</li>
              <li className="mb-3 text-cta">Mechanical Keyboards</li>
              <li className="mb-3">Mobile Phones</li>
              <li className="mb-3">Headphones</li>
              <li className="mb-3">Stuffs and accessories</li>
            </ul>
          </div>
          <div className="w-full mt-10">
            <h1 className="font-manrope  font-bold">Category</h1>
            <ul className=" w-10/12 mx-auto mt-2 text-sm font-semibold text-gray-500">
              <li className="mb-3 ">Laptops</li>
              <li className="mb-3 text-cta">Mechanical Keyboards</li>
              <li className="mb-3">Mobile Phones</li>
              <li className="mb-3">Headphones</li>
              <li className="mb-3">Stuffs and accessories</li>
            </ul>
          </div>
        </div>
        <div className="col-span-10 grid grid-cols-4 mt-5 gap-5 ml-5 ">
          <ProductCard image={"https://res.cloudinary.com/dvjlrqrlx/image/upload/v1662871150/ecom/airm1_u0jzzu.png"} price={1500} name="Macbook Air M2" />
          <ProductCard image={"https://res.cloudinary.com/dvjlrqrlx/image/upload/v1666678804/ecom/61KeIxmldLL._SL1500__r8hm98.png"} price={800} name="iPhone 13 Pro"/>
          <ProductCard image={"https://res.cloudinary.com/dvjlrqrlx/image/upload/v1662875080/ecom/zdrjztfo3u8ftvdjb0v3_el3eaf.png"} price={150} name="Keychron K2V2"/>
          <ProductCard image={"https://res.cloudinary.com/dvjlrqrlx/image/upload/v1662876102/ecom/51xxA_6E_xL._SX679__phcayy.png"} price={1500} name="Macbook Air M2"/>
          <ProductCard image={"https://res.cloudinary.com/dvjlrqrlx/image/upload/v1666678804/ecom/61KeIxmldLL._SL1500__r8hm98.png"} price={1500} name="Macbook Air M2"/>

        </div>
      </div>
    </div>
  )
}

export default Landing