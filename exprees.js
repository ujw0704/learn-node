
import express from 'express';


const app = express();
const port = 8080;


const students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 21 }
  ];




app.get('/', (req, res) => {
    res.send("Hello World!");
    
});
console.log("Hello World!")




app.listen(8000, () => {
    console.log(`Server is listening at 8000`);
}); 


app.get("/exprees.js",(req, res)=>{
   res.send(students)

})
console.log(students)