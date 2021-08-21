//This is the simpliest express example of using express.Router()
//Roter method is case sensitive by default 
const express = require('express')
const app = express()
const router = express.Router();  //returns an object hrere
//we can make the router case sensitive by followings
// const router = express.Router({
//     caseSensitive:false,
// });

app.use(router);

router.get('/',(req,res)=>{
    res.send('This is the homepage');
});

router.get('/about',(req,res)=>{
    res.send('This is the about page');
})

router.post('/',(req,res)=>{
    // console.log(req.body);
    res.send('This is the homepage with post request');
})

app.listen(3000,()=>{
    console.log('Listening at the port 3000');
})