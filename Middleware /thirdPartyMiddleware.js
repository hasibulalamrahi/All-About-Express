const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());

const adminRouter = express.Router();
const logger = (req,res,next) =>{
    console.log('Hi there')

    next()
}

adminRouter.use(logger);
adminRouter.get('/dashboard',(req,res)=>{
    res.send('Dashboard');
})

app.use('/admin',adminRouter);
app.get('/about',(req,res)=>{
    res.write("This is an About Page");
})

app.listen(3000,()=>{
    console.log('listening on port 3000');
})