// import  express  from "express";
import express from "express"
import cors from 'cors';
import { QuizRoutes } from "./routes/QuizRoutes.js";
import { userRoutes } from "./routes/user-routes.js";
const app=express();
app.use(express.json())
app.use(cors());
app.use('/',QuizRoutes) //using callback
app.use('/',userRoutes)

const server=app.listen(1234,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("server started",server.address().port);
    }
})