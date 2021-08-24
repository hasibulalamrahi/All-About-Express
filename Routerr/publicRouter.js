const express = require('express');
const publicRouter = express.Router();
const log = (req,res,next) =>{
    console.log('I am Logging on to Something')
    next()
}
publicRouter.param('user',(req,res,next,id)=>{
    if(id==='1'){
        req.user = 'Admin'
    }
    else{
        req.user = 'Anonymous'
    }
    next()
})
// publicRouter.all('*',log)
// publicRouter.get('/:user','12')
publicRouter.get('/:user',(req,res)=>{
    res.send(`Hello ${req.user}`)
})
publicRouter.get('/',(req,res)=>{
    res.send('Dashboard');
})

publicRouter.get('/login',(req,res)=>{
    res.send(' Public Login')
})

module.exports = publicRouter;