//Error Handelling middleware
const express = require('express');
const app = express();
const adminRouter = express.Router();
const logger = (req,res,next) =>{
   console.log( `${new Date(Date.now()).toLocaleString()} - ${req.method} -- ${req.originalUrl} -- ${req.protocol} --${req.ip}`)
   throw new Error('This is an Error')
}
app.use('/admin',adminRouter);
adminRouter.use(logger);
adminRouter.get('/dashboard',(req,res)=>{
    res.send('Dashboard');
})


app.get('/about',(req,res)=>{
    res.send('About ');
});

const errorMiddleware = (err,req,res,next)=>{
    console.log(err.message);
    res.status(500).send('There was a server side error!');
};
adminRouter.use(errorMiddleware);
app.listen(3000,()=>{
    console.log('listening on port 3000');
})