import React from "react";

import Link from "next/link";
import Product from "../models/Product";
import connectDb from "../middleware/mongoose";
import mongoose from "mongoose";

const Stickers = ({products}) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {Object.keys(products).length ===0 && <p className="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400">Stickers Unavailable, New Stock Comming Soon</p>}
        {Object.keys(products).map((item)=>{ return <div key={products[item]._id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link passHref={true} href={`/products/${products[item].slug}`}>
              <div className="block flex justify-center items-center relative rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-top"
                  src={products[item].img}
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Stickers
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {products[item].title}
                </h2>
                <p className="mt-1">₹{products[item].price}</p>
              </div>
            </Link>
          </div>})}
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }


  let products = await Product.find({category: 'sticker'});
  let stickers={}

    for(let item of products){
        if(item.title in stickers){
            if(!stickers[item.title].color.includes(item.color) && item.availableQty>0){
                stickers[item.title].color.push(item.color)
            }
            if(!stickers[item.title].size.includes(item.size) && item.availableQty>0){
                stickers[item.title].size.push(item.size)
            }

        }
        else{
            stickers[item.title] = JSON.parse(JSON.stringify(item))
            if(item.availableQty>0){
                stickers[item.title].color = [item.color]
                stickers[item.title].size = [item.size]
            }
        }
    }


  return {
    props: {products: JSON.parse(JSON.stringify(stickers))},
  };
}

export default Stickers;
