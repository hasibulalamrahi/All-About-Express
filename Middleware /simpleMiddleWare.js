//Application level middleware
const express = require('express');
const app = express();

const myMiddleware1 = (req,res,next) =>{
    console.log('I am Logging 1');
    next()
};

const myMiddleware2 = (req,res,next) =>{
    console.log('I am Logging 2');
    // next()
    next()
};


app.use(myMiddleware1);
app.use(myMiddleware2);


app.get('/about',(req,res)=>{
    res.send('About ');
});

app.listen(3000,()=>{
    console.log('listening on port 3000');
})