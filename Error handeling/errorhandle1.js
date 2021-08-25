const express = require('express');
const fs = require('fs')
const app = express()

app.get('/',(req,res,next)=>{
    setTimeout(function(){
        try{
            console.log(a);
        }
        catch(err){
            next(err);
        }
    },1000);
})

app.use((req,res,next)=>{
    console.log('This segment is not called');
    next();
});

app.use((err,req,next)=>{
    if(res.headersSent){
        next("There was a problem");
    }
    else{
        if(err.message){
            res.status(500).send(err.message)
        }
        else {
            res.send("There was an error")
        }
    }
});

app.listen(3000,()=>{
    console.log('app listening at port 3000')
})