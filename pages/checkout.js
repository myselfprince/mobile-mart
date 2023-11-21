import React from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import Link from 'next/link';
import { IoBagCheck } from "react-icons/io5";

const Checkout = ({cart, subTotal, addToCart, removeFromCart}) => {
  return (
    <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Checkout</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Your journey from cart to doorstep starts here!</p>
    </div>

    {/* cdsbch */}
    <div className='lg:w-1/2 md:w-2/3 mx-auto'>
    <h1 className="sm:text-xl text-xl font-medium title-font mb-4 text-gray-900">Delivery Details</h1>
    <div className="">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>

        <div class="p-2 w-full">
          <div class="relative">
            <label htmlFor="address" class="leading-7 text-sm text-gray-600">Address</label>
            <textarea id="address" name="address" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-12 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Phone</label>
            <input type="number" id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
            <input type="text" id="city" name="city" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>

        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
            <input type="text" id="state" name="state" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
            <input type="number" id="pincode" name="pincode" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>


        {/* <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Checkout</button>
        </div> */}
       
      </div>
    </div>
    <div className='my-10'>
      <h1 className="sm:text-xl text-xl font-medium title-font mb-4 text-gray-900">Review Your Cart</h1>
      <div className="sideCart bg-gray-200 px-8 py-5 ">

    <ol className='list-decimal font-semibold'>
      {Object.keys(cart).length==0 && <div className='font-bold text-xl text-center text-blue-500'>No items in the cart</div>}
      {Object.keys(cart).map((k)=>{return <li key={k}> 
        <div className="item flex my-5 justify-start">
        <div className='w-fit font-semibold'>{cart[k].name}</div>
        <div className='flex items-center justify-center w-1/3 font-semibold'><CiCircleMinus onClick={()=>{removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} className='text-xl cursor-pointer text-gray-900'/><span className='mx-2'>{cart[k].qty}</span><CiCirclePlus onClick={()=>{addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} className='text-xl cursor-pointer text-gray-900'/></div>
        </div>
      </li>})
     }
     
    </ol>
    <span className='font-bold'>Subtotal: ₹{subTotal}</span>
     
    </div>
     <div className="p-2 mt-3 w-full">
          <button className="flex items-center justify-between text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg"><IoBagCheck className='mr-1 text-xl'/>Pay Now</button>
        </div>
      
     </div>

      
    </div>
  </div>
</section>
  )
}

export default Checkout