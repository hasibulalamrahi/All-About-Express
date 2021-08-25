const express = require('express');
const app = express();

app.set('view engine','ejs')
app.get('/about',(req,res)=>{
    res.render('../views/pages/about',{
        name : 'hasib'
    })
});

app.listen(3000,()=>{
    console.log('Listening at port 3000')
});