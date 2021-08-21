//This is the simpliest express example of using app.use(express.static())
const express = require('express')
const app = express()
app.use(express.static(`${__dirname}/Resource/`,{
    index: 'file.txt',
}));
// app.get('/',(req,res)=>{
//     res.send('This is the homepage');
// });

app.get('/',(req,res)=>{
    res.send('This is the about page');
})

app.post('/',(req,res)=>{
    // console.log(req.body);
    res.send('This is the homepage with post request');
})

app.listen(3000,()=>{
    console.log('Listening at the port 3000');
})