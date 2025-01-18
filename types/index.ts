export type PriceHistoryItem ={
    price:number
};
export type User={
    email:string,
}

export type Product={
    _id?:string;
    url:string;
 
    currency:string;
    images:string;
    title:string;
    currentprice:number;
    originalprice:number;
    pricehistory:PriceHistoryItem[]|[];
    highestprice:number;
    lowestprice:number;
    averageprice:number;
    discountrate:number;
    description:string;
    category:string;
    reviewscount:number;
    stars:number;
    isoutofstock:Boolean;
    users?:User[];
}

export type NotificationType={
    
}