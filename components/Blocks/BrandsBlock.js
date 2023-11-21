import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const BrandsBlock = () => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href="/products/mobile-phone">
    <div className="block relative rounded overflow-hidden">
      <Image height={50} width={50} alt="ecommerce" className="object-cover object-top w-full h-full block" src="/images/applebrand.png" />
    </div>
    <div className="mt-4 text-center">
      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Brand</h3>
      <h2 className="text-gray-900 title-font text-lg font-medium">Apple</h2>
      {/* <p className="mt-1">₹699</p> */}
    </div></Link>
  </div>
  )
}

export default BrandsBlock