const express = require('express');
const adminRouter = require('./adminRouter')
const publicRouter = require('./publicRouter')
const app = express();

app.get('/',(req,res)=>{
    res.send('Home');
})

app.get('/about',(req,res)=>{
    res.send('About');
})
app.use('/admin',adminRouter)
app.use('/public',publicRouter)

app.listen(3000,()=>{
    console.log('Listening to the port 3000');
})