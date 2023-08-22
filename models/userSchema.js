import mongoose from "mongoose";

 const userSchema = new mongoose.Schema({
    username:{
        type : String,
        required: true,
        unique: false,
    },
    password:{
        type: String,
        required:true,
        unique: false,

    }
 })

 const user =  mongoose.model('user',userSchema)

 export default user;
