
import Image from 'next/image';
import HomeShop from '../components/HomeShop';


export default function Home() {

  console.log("env ",process.env.MONGO_URI)
  console.log("env ",process.env.HELLO_ME)

  
  return (
    <>
    

    <div className="w-11/12 m-auto rounded-xl">
    <Image
      src="/website banner2.png"
      width={1200}
      height={480}
      alt="Mobile Mart Banner"

      className="w-full h-[450px] rounded-xl"
    />
    </div>

    <HomeShop />

    

    
     
    </>
  );
}
