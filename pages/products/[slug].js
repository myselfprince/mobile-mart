import { useRouter } from "next/router"
import { useState } from "react"
 import mongoose from "mongoose";
 import Product from "../../models/Product";
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Page({buyNow, addToCart, product, variants}) {
  const router = useRouter();
  const {slug} = router.query;
  const [pin, setPin] = useState();
  const [service, setService] = useState();
  const [cartAdd, setCartAdd] = useState(false);
  


  const checkServiceability= async()=>{
    
    let pins = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/pincode`)
    let pinJson = await pins.json()
    if(pinJson.includes(parseInt(pin))){
      setService(true)
      toast.success('Pincode Available', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    else{
      setService(false)
      toast.error('Pincode Delivery Not Available', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }

  }

  const onChangePin=(e)=>{
    setPin(e.target.value)
  }

  const [color, setColor] = useState(product.color)
  const [size, setSize] = useState(product.size)

  

  return <>
    <section className="text-gray-600 body-font overflow-hidden">

    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />

  <div className="container px-5 py-24 mx-auto">
    <div className="sm:w-3/6 w-4/5 lg:w-3/4 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto xl:w-5/12 object-cover object-center rounded" src={product.img} />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">Mobile</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </span>
          
        </div>
        <p className="leading-relaxed">{product.desc}</p>




        
        <div className="flex border-t-2 border-gray-100 mt-10">
          <div className="flex mt-5">
          <span className="title-font font-medium text-2xl text-gray-900 my-auto">₹{product.price}</span>
          <button onClick={()=>{buyNow(slug, 1, product.price, product.title, size, color)}} className="flex ml-2 sm:ml-10 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Buy Now</button>
          <button onClick={()=>{addToCart(slug, 1, product.price, product.title,size,color)}} className="flex ml-2 sm:ml-10 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add to Cart</button>
          {/* <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button> */}

          </div>
        </div>
        

        {cartAdd && <div className="font-regular mt-3 block rounded-lg bg-green-500 p-4 text-base leading-5 text-white opacity-100">
                  Successfully Added to Cart!
                    </div>}
        <div className="mt-9 w-2/4 text-gray-600 flex items-center justify-start">
            <input
              onChange={onChangePin}
              type="search"
              placeholder="Check Pincode"
              className="bg-white h-8 px-3 text-sm focus:outline-none border-2"

            />
            
         
            <button onClick={checkServiceability} type="button" className="flex ml-3 text-white py-1 px-3 bg-indigo-500 border-0 focus:outline-none hover:bg-indigo-600 rounded">
           Check
            </button>

            </div>
            <div className='mt-3'>
              {(!service && service!=null) && <p className='text-red-600'>We cant deliver to this pincode</p>}
              {(service && service!=null) &&<p className='text-green-600'>Pincode Delivery Available</p>}
            </div>
           
            



      </div>


      
    </div>
  </div>
         
</section>
  </>
}


export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("HEllo",process.env.MONGO_URI)
  }


  let product = await Product.findOne({slug: context.query.slug});
  let variants = await Product.find({title:product.title, category: product.category})
  let colorSizeSlug = {}

  for(let item of variants){
    if(Object.keys(colorSizeSlug).includes(item.color)){
      colorSizeSlug[item.color][item.size] = {slug: item.slug}
    }
    else{
      colorSizeSlug[item.color] = {}
      colorSizeSlug[item.color][item.size] = {slug: item.slug}

    }

  }




  return {
    props: {product: JSON.parse(JSON.stringify(product)),variants: JSON.parse(JSON.stringify(colorSizeSlug))},
  };
}
