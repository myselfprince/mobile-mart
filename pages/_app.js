import '../styles/globals.css'
import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Ref } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {useRouter} from 'next/router'


function MyApp({ Component, pageProps }) {

  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)

  const router = useRouter()

  useEffect(()=>{
    console.log("Hello I am useEffect")

    try {
      if(localStorage.getItem("cart")){
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }
  
    } catch (error) {
      console.error(error)
      localStorage.clear();
      
    }

  },[])

  const saveCart=(myCart)=>{
    localStorage.setItem("cart", JSON.stringify(myCart))
    let subt = 0;
    let keys = Object.keys(myCart);
    for(let i=0; i<keys.length;i++){
      subt+=myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subt)
  }
  const clearCart =()=>{
    setCart({})
    saveCart({})
  }

  const addToCart=(itemCode, qty, price, name, size, variant)=>{

    toast.success('Added to cart', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    let newCart = cart;
    if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    }
    else{
      newCart[itemCode] = {qty:1, price, name, size, variant}
    }

    setCart(newCart)
    saveCart(newCart)

  }

  const buyNow=(itemCode, qty, price, name, size, variant)=>{

    

    let newCart = {itemCode: {qty:1, price, name, size, variant}};
    

    setCart(newCart)
    saveCart(newCart)

    // addToCart(slug, 1, 499, product.title)
    router.push('/checkout')

  }

  
  const removeFromCart=(itemCode, qty, price, name, size, variant)=>{
    let newCart = JSON.parse(JSON.stringify(cart));
    if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }

    if(newCart[itemCode]["qty"]<=0){
      delete newCart[itemCode]
    }

    setCart(newCart)
    saveCart(newCart)

  }
  

  return (
    <>
    <Head>
      <title>MobileMart - Mobile Phones Ecommerce Website</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="//faviconsafari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    
    <Header  cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
    <Component domain={"https://mobile-mart-nine.vercel.app"} cart={cart} buyNow={buyNow} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
    <Footer />
    </>
  
  
  )
}

export default MyApp
