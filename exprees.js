
import express from 'express';


const app = express();
const port = 8080;


app.get('/', (req, res) => {
    res.send('Hello, World!');
});


app.listen(8000, () => {
    console.log(`Server is listening at 8000`);
}); 
