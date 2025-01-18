"use client"
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
interface Props {
    images:string[]
}
const Carouse = ({images}:Props) => {
   
  return (
    <div className='  w-full h-full  '>
       <Carousel 
       showStatus={false}
       showArrows={false} 
      showThumbs={false} 
      infiniteLoop={true} 
      autoPlay={true} 
      interval={1500} 
      showIndicators={false}
      stopOnHover={true} 
      dynamicHeight={true} 
      emulateTouch={true}>
                {
                    images.map((link,idx)=>{
                        return (
                            <div className=' p-2 w-full border-4 border-black h-full overflow-hidden ' key={idx} >
                                <img src={link}   alt='image'  className=" container h-2/3  w-3/4 rounded-lg " />
                                
                            </div>
                        )
                    })
                }
                
            </Carousel>
    </div>
  )
}

export default Carouse
