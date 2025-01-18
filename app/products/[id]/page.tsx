

import React from 'react'
import { getproductbyId } from '@/app/actions'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import Carouse from '@/app/components/Carousel'
type Props={
params:{id:string}
}
const page =async ({params}:Props) => {
    const {id} = await params
    const product = await getproductbyId(id);
    if(!product) redirect('/');

   
    

  return (
    <div className=' w-full h-screen p-2'>
        <div className=' w-full h-[50%] overflow-y-scroll'>
        <Carouse images={product.moreimages[0]}/>
        </div>
      <h1 className=' font-bold text-xl text-center'>{product.title}</h1>
        <div className=' w-full h-1/2 grid grid-cols-2 grid-rows-2 '>
            <div className=' w-full h-full'>
                   <h1>{product.lowestprice}</h1>
            </div>
            <div className=' w-full h-full'>
                   <h1>{product.highestprice}</h1>
            </div>
            <div className=' w-full h-full'>
                   <h1>{product.averageprice}</h1>
            </div>
            //Built an Advanced Price Tracker with Web Scraping to Monitor Price Trends
            <div className=' w-full h-full'>
                   <h1>{product.lowestprice}</h1>
            </div>
        </div>
    </div>
  )
}

export default page
