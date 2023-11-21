
import Image from 'next/image';
import HomeShop from '../components/HomeShop';

export default function Home() {
  return (
    <>
    

    <div className="w-11/12 m-auto rounded-xl">
    <Image
      src="/images/banner.jpg"
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
