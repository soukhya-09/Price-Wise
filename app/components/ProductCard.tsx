import React from 'react'
import {Product} from '@/types/index'

import Image from 'next/image'
import Link from 'next/link'

interface Props {
  product :Product
}
const ProductCard = ({product} :Props) => {
 
  
  return (
    <Link href={`/products/${product._id}`} className=' rounded-2xl lg:w-full lg:h-full md:w-full  md:h-full  sm:w-full  h-full  border border-blue-700 p-2'>

      <h1 className=' text-center text-lg'>{product.title.substring(0,35)}....</h1>
      <div>

      <div className=' w-full flex justify-center'>

    <Image className=' rounded-lg' src={(product.image) || null} alt='image'  width={100} height={100}/>
      </div>
      <div>
        <h1 className= 'text-center font-semibold text-lg'>
         <span className=' text-green-800 font-extrabold text-lg'>{product.currency }</span> {product.currentprice}
        </h1>
        <h1 className={`text-center font-semibold text-lg ${product.isoutofstock? 'text-red-500':'text-green-800'} `}>
          {
            product.isoutofstock?("Out of Stock"):('Available')
            
          }
        </h1>
        <h1 className= 'text-center  text-sm'>
   {
    product.title.substring(0,100)
   }
   ....
        </h1>
      </div>
      </div>

    </Link>
  )
}

export default ProductCard
