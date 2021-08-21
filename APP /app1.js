const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res
    .status(200)
    // .send('Hello from the server side!!');
    // .write("Hi its Hasib")
    .json({message:'Hello From the other side',app:'Hasibs APP'})

});
app.post('/',(req,res)=>{
    res.send('You can post to this End-point');
});
const port = 3000;
app.listen(port,()=>{
    console.log(`App running at port ${port}..`);
})