import { SchemaTypes } from "mongoose";
import mongoose from "../connection.js"
const Schema= mongoose.Schema;
const userSchema= new Schema({
    'username':{type:SchemaTypes.String},
    'password':{type:SchemaTypes.String}
})
export const UserModel =mongoose.model('users',userSchema)