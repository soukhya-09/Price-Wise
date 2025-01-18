
import Image from "next/image";
import SearchBar from "@/app/components/SearchBar"
import Carouse from "@/app/components/Carousel";

import { getallproducts } from "./actions";
import ProductCard from "./components/ProductCard";
import { a } from "./images";
export default async function Home() {
  
  const products =await getallproducts()
  return (
    <div className=" w-full h-[90%] px-2">
      <h1 className="  py-2 text-red-600">Unlock the Smart Way of Shopping </h1>
       <h1 className=" sm:text-xl md:text-2xl lg:text-3xl py-5">Unleash the Power of Price Tracker <span className=" text-red-600 font-bold underline uppercase">  |PriceWise|</span></h1>
       <div>
        <h1 className=" py-2 text-lg">

       Never miss a deal again! Track prices of your favorite products across multiple platforms in real-time. Get instant alerts when prices drop, and make informed buying decisions effortlessly.
        </h1>


<ul>


<li className="py-2 text-lg"> 📊 Price History Insights: Analyze trends and make smarter purchases.</li>

<li className="py-2 text-lg"> ⭐ Wishlist Integration: Keep track of the products you love.</li>
<li className="py-2 text-lg"> 💸 Save More: Shop smart and stay within budget.</li>
</ul>
       </div>
      <SearchBar/>
      <div className=" flex justify-center">
{/* /////////////////////////////// */}
      <div className="w-full py-5 flex justify-center  h-[70%] overflow-hidden ">

      <div className=" w-3/4 pt-6">
      
      <Carouse images={a}  />
      </div>
      </div>

      <div className="w-full py-5 flex justify-center sm:block hidden  h-[70%] overflow-hidden">

<div className="  w-full  ">

<Carouse images={a}/>
</div>
</div>
      <div className="w-full py-5 flex justify-center   h-[70%] overflow-hidden ">

      <div className=" w-3/4 pt-6">

      <Carouse images={a}/>
      
      </div>
      </div>
{/* //////////////////// */}
      </div>
      <div className=" w-full grid  gap-3 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3   p-3 h-[80%]  ">
        {
          products?.map((ele,idx)=>{
            return (
             <ProductCard key={idx} product={ele}/>
            )
          })
        }
      </div>
    </div>
  );
}
