import React from 'react'

const Order = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">MobileMart.com</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order Id: #56461</h1>
        
        <p className="leading-relaxed mb-4">Your order has been Successfully Placed.</p>
        <div className="flex mb-4">
          {/* <span className=" text-indigo-500 border-indigo-500 py-2 text-lg px-1">Description</span>
          <span className=" border-gray-300 py-2 text-lg px-1 ml-auto">Quantity</span>
          <span className=" border-gray-300 py-2 text-lg px-1 ml-auto">Price</span> */}
          <span className="font-semibold text-indigo-500 text-lg">Description</span>
          <span className="ml-auto text-indigo-500 font-semibold text-lg">Quantity</span>
          <span className="ml-auto text-indigo-500 font-semibold text-lg">Price</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Mobile Phone 1</span>
          <span className="ml-auto text-gray-900 font-semibold">Xiomi</span>
          <span className="ml-auto text-gray-900 font-semibold">₹523</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
        <span className="text-gray-500">Mobile Phone 1</span>
          <span className="ml-auto text-gray-900 font-semibold">Xiomi</span>
          <span className="ml-auto text-gray-900 font-semibold">₹523</span>
        </div>
        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
        <span className="text-gray-500">Mobile Phone 1</span>
          <span className="ml-auto text-gray-900 font-semibold">Xiomi</span>
          <span className="ml-auto text-gray-900 font-semibold">₹523</span>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">Subtital: ₹5,899</span>
          <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Track Order</button>
        </div>
      </div>
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
    </div>
  </div>
</section>
  )
}

export default Order