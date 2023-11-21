import React from 'react'
import Link from 'next/link'
const AccessoriesBlock = () => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href="/products/mobile-phone">
    <div className="block relative rounded overflow-hidden">
      <img alt="ecommerce" className="object-cover object-top w-full h-full block" src="https://5.imimg.com/data5/SELLER/Default/2021/8/GH/PW/MY/53210007/mobile-accessories.jpg" />
    </div>
    <div className="mt-4 text-center">
      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Accessories</h3>
      <h2 className="text-gray-900 title-font text-lg font-medium">Charger</h2>
      <p className="mt-1">₹159</p>
    </div></Link>
  </div>
  )
}

export default AccessoriesBlock