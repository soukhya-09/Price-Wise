import axios from "axios";
import * as cheerio  from "cheerio";
import { extractcurrency, extractdescription, extractprice } from "../utils/utils";

// curl -i --proxy brd.superproxy.io:33335 --proxy-user brd-customer-hl_16834966-zone-price:s3usrqp0ebzs -k "https://geo.brdtest.com/welcome.txt?product=unlocker&method=native"

export async function scrapeproductamazon(url:string) {
    
    if(!url)return ;
    const username =String(process.env.BRIGHT_D_USERNAME);
    const password= String(process.env.BRIGHT_D_PASSWORD);
    const port = 33335;
    const session_id = (1000000*Math.random()) | 0;
    const options ={
        auth:{
            username:`${username}-session-${session_id}`,
            password
        },
        host:"brd.superproxy.io",
        port,
        rejectUnauthorized:false
    }

    try {
     const response = await axios.get(url,options)
     const $ = cheerio.load(response.data)
   
        
     const title = $("#productTitle").text().trim();

     const currentprice = extractprice(
        $(".priceToPay span.a-price-whole "),
        $("a.size.base.a-color-price"),
        $(".a-button-selected .a-color-base"),
     )


     const originalprice = extractprice(
        $("#priceblock_ourprice"),
        $(".a-price.a-text-price span.a-offscreen"),
        $("#listPrice"),
        $("#priceblock_dealprice"),
        $(".a-size-base.a-color-price"),
     )
     let isoutofstock=false;
    const isoutofstock1 = $("#availability span").text().trim().toLowerCase()==='currently unavailable'
    const isoutofstock2 =( $("span.a-size-medium.a-color-success").text().trim().toLowerCase()==='currently unavailable')||( $("span.a-size-medium.a-color-success").text().trim().toLowerCase()==='currently unavailable.')
    
    isoutofstock = isoutofstock1 || isoutofstock2
    
console.log(isoutofstock);


    const images =$("#imgBlkFront").attr('data-a-dynamic-image') || $("#landingImage").attr('data-a-dynamic-image') || '{}'
    const imageurls = Object.keys(JSON.parse(images))||[]
  
     
     const currency = extractcurrency($(".a-price-symbol"));
   const discountrate = $(".savingsPercentage").text().replace(/[-%]/g,"");
const description = extractdescription($);

   const data={
    url,
    currency:currency||'$',
    image:imageurls[0],
    title,
    moreimages:imageurls,
    currentprice:Number(currentprice) || Number(originalprice),
    originalprice:Number(originalprice)||Number(currentprice),
    pricehistory:[],
    discountrate:Number(discountrate),
    category:'category',
    reviewscount:100,
    stars:4.5,
    isoutofstock:isoutofstock,
    description:description,
    lowestprice:Number(originalprice)||Number(currentprice),
    highestprice:Number(originalprice)||Number(currentprice),
    averageprice:Number(originalprice)||Number(currentprice)
   }
   // console.log(data.moreimages);
    

   console.log(isoutofstock2);
   return data;
    } catch (error) {
        console.log(error);
        
    }

}