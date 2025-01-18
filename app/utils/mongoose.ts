import mongoose from "mongoose";



let isconnected = false;

export const connectDB=async()=>{
mongoose.set('strictQuery',true);
if(!process.env.MONGOOSE_URL){
    return console.log("URL FOR DATABASE CONNECTION ISNT AVAILABLE");
    
}
if(isconnected){
return console.log("using existing database");

}

try {
    await mongoose.connect(process.env.MONGOOSE_URL)
    isconnected=true;
    console.log("MONGO DB IS CONNECTED");
    
} catch (error) {
    console.log(error);
    
}
}