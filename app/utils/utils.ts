import { PriceHistoryItem } from "@/types";


export function extractprice(...elements:any) {
    for(let ele of elements){
        const pricetext = ele.text().trim();
        if(pricetext){
return pricetext.replace(/[^\d.]/g,'');
        }
    }
    return '';
}

export function extractdescription($:any){
const selectors=[
    ".a-unordered-list .a-list-item",
    ".a-expander-content p"
]
for(const selector of selectors){
    const elements =$(selector);
    if(elements.length > 0){
        const text = elements.map((_:any,element:any)=>$(element).text().trim()).get().join("\n");
        return text;
    }
}
}

export function gethighestprice(pricelist:PriceHistoryItem[]):number{
    let highp=pricelist[0];
    for(let i=0;i<pricelist.length;i++){
        if(pricelist[i].price > highp.price){
            highp=pricelist[i];
        }
    }
    return highp.price;
}
export function getlowestprice(pricelist:PriceHistoryItem[]):number{
    let lowp=pricelist[0];
    for(let i=0;i<pricelist.length;i++){
        if(pricelist[i].price < lowp.price){
            lowp=pricelist[i];
        }
    }
    return lowp.price;
}

export function getaverageprice(pricelist:PriceHistoryItem[]){
   const sum = pricelist.reduce((acc,curr)=>acc+curr.price,0);
   const avg = sum / pricelist.length || 0
   return avg 
}
export function extractcurrency(elements:any) {
    const currencytext = elements.text().trim().slice(0,1);
    return currencytext?currencytext:'';
}