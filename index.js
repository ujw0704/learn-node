import fs, { readFile } from "fs"

// fs.writeFile ("text.txt","hello how are you ",(err)=>{
//     if(err){
//         console.log(err)
 
//     } 
// })




// fs.readFile("text.txt",(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data.toString()) 
        
//     }

// })




fs.appendFile("text.txt","i am vikas ",(err)=>{
    if(err){
        console.log(err)
 
    } 
})
