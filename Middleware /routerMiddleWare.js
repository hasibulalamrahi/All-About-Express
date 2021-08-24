//Application level middleware
const express = require('express');
const app = express();
const adminRouter = express.Router();
const logger = (req,res,next) =>{
   console.log( `${new Date(Date.now()).toLocaleString()} - ${req.method} -- ${req.originalUrl} -- ${req.protocol} --${req.ip}`)
   next()
}
app.use('/admin',adminRouter);
adminRouter.use(logger);
adminRouter.get('/dashboard',(req,res)=>{
    res.send('Dashboard');
})


app.get('/about',(req,res)=>{
    res.send('About ');
});

app.listen(3000,()=>{
    console.log('listening on port 3000');
})