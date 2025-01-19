

import React from 'react'
import { FaRegSave } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { getproductbyId } from '@/app/actions'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import Carouse from '@/app/components/Carousel'
import Link from 'next/link'
import FormDialog from '@/app/components/Modal';

type Props={
params:{id:string}
}
const page =async ({params}:Props) => {
    const {id} = await params
    const product = await getproductbyId(id);
    if(!product) redirect('/');

   

  return (
    <div className=' w-full h-screen p-2  '>
       <div className='w-full h-fit  p-2  md:flex justify-center gap-3 '>

        <div className=' w-full  md:h-full sm:h-[40%] overflow-y-scroll  scrollbar-hide  '>
        <Carouse images={product.moreimages[0]}/>
        </div>
      <div className=' w-full h-full'>
      <h1 className=' font-bold text-xl '>{product.title}</h1>
       <div className=' w-full h-full'>
       <Link href={product.url} target="_blank" ><span className=' text-gray-500'>Visit Product</span></Link>
       <div className=' flex  gap-2 w-full '>
              <div className=' w-fit bg-pink-400 flex gap-1 p-1 rounded-3xl font-semibold'>
              
                   <CiHeart size={25}/>
                   {product.reviewscount}
                   
              </div>
              <div className=' pt-1'>
              <Link href={""}>
              <FaRegSave size={20}/>
              </Link>
              </div>
       </div>
       <div>
              <h1 className=' text-lg'>Discount Rate <span className=' text-red-500'> -{product.discountrate}%</span> </h1>
       </div>
       <div>
       {
                     product?.isoutofstock?(<h1 className=' text-xl text-red-600'>Out of stock </h1>):(<h1 className=' text-xl text-green-600'>In stock </h1>)
              }
       </div>
       </div>
       <div className=' w-full h-full '>

        <div className='  w-full h-1/2 grid grid-cols-2 grid-rows-2 mx-auto  gap-3 pt-3 '>
            <div className=' w-full h-3/4 p-2  border-2 bg-green-200 border-cyan-700 rounded-2xl  flex justify-center items-center flex-col'>
              <h1 className=' sm:text-base md:text-lg lg:text-xl  text-center'>
                     Lowest Price
              </h1>
                   <h1 className=' sm:text-base md:text-lg lg:text-xl  text-center'>{product.currency}{product.lowestprice}</h1>
            </div>
            <div className=' w-full h-3/4  border-2 border-green-500 bg-cyan-200 rounded-2xl  flex justify-center items-center flex-col'>
              <h1 className=' sm:text-base md:text-lg lg:text-xl  text-center'>
                     Highest Price
              </h1>
                   <h1 className=' sm:text-base md:text-lg lg:text-xl  text-center'>{product.currency}{product.highestprice}</h1>
            </div>
            <div className=' w-full h-3/4  border-2 bg-cyan-200  border-green-500 rounded-2xl  flex justify-center items-center flex-col'>
            <h1 className=' sm:text-base md:text-lg lg:text-xl  text-center'>
                     Average Price
              </h1>
                   <h1 className=' sm:text-base md:text-lg lg:text-xl  text-center'>{product.currency}{product.averageprice}</h1>
            </div>
            
            <div className=' w-full p-2 h-3/4 border-2 bg-green-200 border-cyan-700 rounded-2xl  flex justify-center items-center flex-col'><h1 className=' sm:text-base md:text-lg lg:text-xl  text-center'>
                     Current Price Price
              </h1>
                   <h1 className=' sm:text-base md:text-lg lg:text-xl  text-center'> {product.currency}{product.currentprice}</h1>
            </div>
        </div>
        <div className=' w-full flex justify-center'>
           
              <FormDialog/>
        </div>
       </div>
       
      </div>
       </div>
    <div className=' pt-10'>
       {
           <p>  { product.description.substr(0,2000)}</p> 
       }
    </div>
    </div>
  )
}

export default page
