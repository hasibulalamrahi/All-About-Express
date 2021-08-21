//This is the simpliest express example of using app.use(express.text())
const express = require('express')
const app = express()
app.use(express.text());
app.get('/',(req,res)=>{
    res.send('This is the homepage');
});

app.get('/about',(req,res)=>{
    res.send('This is the about page');
})

app.post('/',(req,res)=>{
    console.log(req.body);
    res.send('This is the homepage with post request');
})

app.listen(3000,()=>{
    console.log('Listening at the port 3000');
})