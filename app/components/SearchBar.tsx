"use client"
import React, { FormEvent, useState } from 'react'

import { url } from 'inspector'
import { scrapeproduct } from '../actions'


const SearchBar = () => {
    const [search,setsearch] = useState("")
    const [loader,setloader] = useState(false)
    const isvalidlink = (url:string) : boolean=>{
        try {
            const parsedurl = new URL(url);
            const hostname = parsedurl.hostname;
            if(hostname.includes("amazon.com") || hostname.includes("amazon.") || hostname.endsWith("amazon")){
                return true
            }
         else return false;

        } catch (error) {
            console.log(error);
            
            return false
        }
       
    }
    const submithandler = async(event:FormEvent<HTMLFormElement>)=>{
       event.preventDefault();
    const validityoflink = isvalidlink(search);
    if(validityoflink){
try {
    setloader(true);
    const product = await scrapeproduct(search);
} catch (error) {
    console.log(error);
    
}
        
    }
    else{
        console.log("Enter a valid amazon link");
        
    }
    
    }
  return (
    <div >
        
  
        <form  onSubmit={submithandler}>
            <div className=' flex justify-start gap-3'>

           
            <input onChange={(e)=>{setsearch(e.target.value); console.log(search);}
            } className=' p-2 border-2 lg:w-[80%] md:w-[80%] sm:w-[100%] border-black rounded-lg' type="text" placeholder='Enter product link' />
          

            <button disabled={search===""} className=" bg-transparent hover:bg-red-400 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-600 hover:border-transparent rounded ">
             
           {     loader?("searching...."):("search")}
             
            </button>
          
            </div>
        </form>
     
    </div>
  )
}

export default SearchBar
