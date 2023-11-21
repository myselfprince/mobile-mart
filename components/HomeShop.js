import React from 'react'
import Link from 'next/link'
const HomeShop = () => {
  return (
    <section className="text-gray-600 body-font mx-10">
  <div className="container px-5 py-12 mx-auto">

  <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900 text-center">SHOP FROM YOUR WIDE RANGE OF PRODUCTS</h1>
   
    <div className="flex flex-wrap justify-around -m-4 mt-5">


      <div className="xl:w-1/4 md:w-1/2 p-4">
        <Link href="/mobiles">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-[350px] rounded w-full object-cover object-center mb-6" src="/images/mobile.jpg" alt="content" />
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SHOP</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">MOBILE PHONES</h2>
          <p className="leading-relaxed text-base">Discover the latest smartphones, blending style and innovation for seamless connectivity on the go.</p>
        </div></Link>
      </div>
     

      <div className="xl:w-1/4 md:w-1/2 p-4">
        <Link href="/stickers">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-[350px] rounded w-full object-cover object-center mb-6" src="/images/stickers.jpg" alt="content" />
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SHOP</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">STICKERS & SKINS</h2>
          <p className="leading-relaxed text-base">Personalize your smartphone with our collection of stickers, adding a touch of style and individuality to your device</p>
        </div></Link>
      </div>


      <div className="xl:w-1/4 md:w-1/2 p-4">
        <Link href="/accessories">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-[350px] rounded w-full object-cover object-center mb-6" src="/images/accessories.jpg" alt="content" />
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SHOP</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">ACCESSORIES</h2>
          <p className="leading-relaxed text-base">"Enhance your mobile experience with our collection of accessories, adding functionality and style to your smartphone.</p>
        </div></Link>
      </div>
     
      
      <div className="flex flex-wrap w-full mt-10 mx-24">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Mobile Mart: Elevate Your Shopping Experience On-The-Go!</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Welcome to our mobile e-commerce hub! Discover a curated selection of trendy products, from fashion to electronics. Our user-friendly interface ensures a seamless and secure checkout experience. Enjoy personalized recommendations and exclusive deals on-the-go. Elevate your shopping with style and convenience, right at your fingertips. Welcome to the future of mobile retail!</p>
    </div>
     
      

      


     
    </div>
  </div>
</section>
  )
}

export default HomeShop