"use server"

import { revalidatePath } from "next/cache";
import Product from "../models/product.model";
import { scrapeproductamazon } from "../scraper";
import { connectDB } from "../utils/mongoose";
import { getaverageprice, gethighestprice, getlowestprice } from "../utils/utils";

export async function  scrapeproduct
(producturl:string) {
    
if(!producturl){
    return;
}
try {
    connectDB();
    const scrapedproduct = await scrapeproductamazon(producturl);
    //console.log(scrapedproduct);
    
    if(!scrapedproduct)return ;
    let product:any = scrapedproduct;
    console.log(product);
    
    const existingproduct = await Product.findOne({url:producturl})
    if(existingproduct){
        const updatedPriceHistory =[
            ...existingproduct.pricehistory,
            {price:scrapedproduct.currentprice}
        ]
        const updatedImages = [
          ...new Set([...existingproduct.moreimages||[], ...scrapedproduct.moreimages])
        ];
       
        product = {
          ...scrapedproduct,
          pricehistory: updatedPriceHistory,
          lowestprice: getlowestprice(updatedPriceHistory),
          highestprice: gethighestprice(updatedPriceHistory),
          averageprice: getaverageprice(updatedPriceHistory),
          moreimages: updatedImages 
        };
        

    }
  
    const newproduct = await Product.findOneAndUpdate(
        { url:producturl},
         product,
        
         {upsert:true,new:true}
     )
revalidatePath(`/products/${newproduct._id}`)
    
} catch (error:any) {
    throw new Error(`failed to get product ${error.message}`)
}

}


export async function getproductbyId(id:string) {
  try {
    connectDB();
    const product = await Product.findOne({_id:id});
    if(!product)return null;
    return product
  } catch (error) {
    console.log(error);
    
  } 

}

export async function getallproducts() {
    try {
      connectDB();
      const product = await Product.find();
      if(!product)return null;
      return product
    } catch (error) {
      console.log(error);
      
    } 
  
  }
