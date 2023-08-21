import express from 'express';
import cors from "cors"

 
const app = express();
const port = 8080;




app.get("/form",(req, res)=>{
   res.send(form)
   console.log(form)
})

app.listen(8000, () => {
    console.log(`Server is listening at 8000`);
}); 
