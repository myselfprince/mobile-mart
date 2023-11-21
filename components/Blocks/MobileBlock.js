import React from 'react'
import Link from 'next/link'

const MobileBlock = (props) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href="/products/mobile-phone">
    <div className="block relative rounded overflow-hidden">
      <img alt="ecommerce" className="object-cover object-top w-full h-full block" src="https://m.media-amazon.com/images/I/41PMrVjsowL._SX300_SY300_QL70_FMwebp_.jpg" />
    </div>
    <div className="mt-4 text-center">
      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Mobile</h3>
      <h2 className="text-gray-900 title-font text-lg font-medium">{props.item}</h2>
      <p className="mt-1">₹699</p>
    </div></Link>
  </div>
  )
}

export default MobileBlock