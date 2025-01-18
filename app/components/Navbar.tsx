

import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
const a = [<IoSearch size={20}/>,<IoPersonOutline size={20}/>,<FaRegHeart size={20}/>];
const Navbar = () => {
  return (
    <div className=' w-full p-2 flex justify-around gap-5  h-[10%] bg-slate-400'>
        <div className=' p-2  flex justify-start gap-2'>
        <Link href={""}> <Image 
         src={"/logo.jpg"}
         alt='logo'
         height={50}
         width={50}
         className="rounded-full"
         />
         </Link>
         <Link href={""}>
             <span className=' text-red-600 font-bold sm:text-sm md:text-lg lg:text-2xl'>Tracker</span>
         </Link>
        </div>
        <div className=' flex justify-end gap-8  p-4'>

      {
        a.map((icon,idx)=>{
             return (
                <Link key={idx} href={""}>
                {icon}
              </Link>
             )
        })
      }
        </div>
    </div>
  )
}

export default Navbar
