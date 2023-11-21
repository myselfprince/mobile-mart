import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ImSearch } from "react-icons/im";
import { IoIosCloseCircle } from "react-icons/io";
import { useRef } from 'react';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";


const Header = ({cart, addToCart, removeFromCart, clearCart, subTotal, showCart}) => {

  // const toggleCart = ()=>{
  //   if(ref.current.classList.contains('translate-x-full')){
  //     ref.current.classList.remove('translate-x-full')
  //     ref.current.classList.add('translate-x-0')
  //   }
  //   else if(!ref.current.classList.contains('translate-x-full')){
  //     ref.current.classList.remove('translate-x-0')
  //     ref.current.classList.add('translate-x-full')
  //   }

  // }
  const toggleCart = ()=>{
    if(ref.current.classList.contains('hidden')){
      ref.current.classList.remove('hidden')
      ref.current.classList.add('block')
    }
    else if(!ref.current.classList.contains('hidden')){
      ref.current.classList.remove('block')
      ref.current.classList.add('hidden')
    }

  }

  const ref = useRef()

  return (

    <>
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <Image height={40} width={40} src={"/logo png.png"} alt="logo"/>
      <span className="ml-3 text-xl">MobileMart</span>
    </Link>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
    <Link href={"/"}className="mr-5 hover:text-gray-900">Home</Link>
      <Link href={"/mobile"}className="mr-5 hover:text-gray-900">Mobiles</Link>
      <Link href={"/stickers"}className="mr-5 hover:text-gray-900">Stickers</Link>
      {/* <Link href={"/brands"}className="mr-5 hover:text-gray-900">Brands</Link> */}
      <Link href={"/accessories"}className="mr-5 hover:text-gray-900">Accessories</Link>
    </nav>

    

    <div className='flex items-center'>
      <Link href={"/login"}>
    <MdAccountCircle className='cursor-pointer focus:outline-none rounded text-4xl mt-4 md:mt-0 text-blue-500 mr-2'/>
      </Link>


    {/* SearchBar */}
    {/* <div className="relative mx-auto text-gray-600 border-2 rounded-xl mr-2">
            <input
              type="search"
              placeholder="Search"
              className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none border-1"
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
            <ImSearch />
            </button>
          </div> */}

         


      <button onClick={toggleCart} className="cursor-pointer inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-xl mt-4 md:mt-0 text-black">
        <AiOutlineShoppingCart />
      </button>
    </div>

    {/* transform transition-transform translate-x-full */}
    <div ref={ref} className="z-10 h-screen w-72 sideCart fixed top-0 right-0 bg-gray-200 px-8 py-10 hidden transform transition-transform max-h-screen overflow-y-auto">
      <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
      <span onClick={toggleCart} className='absolute top-2 right-2 text-xl cursor-pointer text-gray-500'><IoIosCloseCircle />
        </span>

    <ol className='list-decimal font-semibold'>

      {Object.keys(cart).length==0 && <div className='font-bold text-xl text-center text-blue-500'>No items in the cart</div>}


      {Object.keys(cart).map((k)=>{return <li key={k}> 
        <div className="item flex my-5">
        <div className='w-2/3 font-semibold'>{cart[k].name}</div>
        <div className='flex items-center justify-center w-1/3 font-semibold'><CiCircleMinus onClick={()=>{removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} className='text-xl cursor-pointer text-gray-900'/><span className='mx-2'>{cart[k].qty}</span><CiCirclePlus onClick={()=>{addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} className='text-xl cursor-pointer text-gray-900'/></div>
        </div>
      </li>})
     }
     
    </ol>
    <span className='font-bold'>Subtotal: ₹{subTotal}</span>

    <Link href={"/checkout"}><button className="flex mx-auto mt-9 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Checkout</button></Link>
    <button onClick={clearCart} className="flex mx-auto mt-2 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Clear Cart</button>

     
    </div>
  </div>
</header>
    
    
</>
  )
}

export default Header