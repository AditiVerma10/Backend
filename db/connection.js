const URL='mongodb+srv://admin:admin123@mycluster.42pe4ox.mongodb.net/userdb?retryWrites=true&w=majority';
import mongoose from "mongoose";
const promise=mongoose.connect(URL);
promise.then(data=>{
    console.log('database connected...');
}).catch(err=>{
    console.log('error during database connection',err)
})
export default mongoose;
