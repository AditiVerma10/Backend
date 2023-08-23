import { UserModel } from "../db/models/user-schema.js";
export const userController={
   async login(request,response){
     console.log("333")
     const body=request.body;
        console.log('request body is',body);
        const userInfo=request.body;
        try{
        const doc= await UserModel.create(userInfo)
        if(doc && doc._id){
        response.json({message:'Login Successfully'});
        }
        else(response.json({message:'Login Failed'}));
    }
    catch(err){
        console.log('error',err)
        (response.json({message:'Login Failed'}));
    }

    }
}