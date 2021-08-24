
const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();
const adminRoute = express.Router(); //sub-app 
app.use(cookieParser())
adminRoute.get('/dashboard',(req,res)=>{ 
    console.log(req.baseUrl);    //will give us admin
    console.log(req.originalUrl);  //the original Url in this case is admin/dashboard
    console.log(req.url);  //the original Url in this case is admin/dashboard

    res.send('We are in Admin Dashboard');
})
app.use('/admin',adminRoute);
app.get('/user/:id',(req,res)=>{
    console.log(req.baseUrl); //will give blank
    console.log(req.originalUrl); //will give  the portion except local host 
    console.log(req.Url); //will give blank
    console.log(req.cookies)
    console.log(req.route)
    res.send('Hello World');
})

app.listen(3000,()=>{
    console.log('Listening on port : 3000');
})