const express = require('express');

const app = express();
app.locals.title = 'My App';
app.get('/',(req,res)=>{
    console.log(app.locals.title);  // we are accessing this title variable from any where in our app
    res.send('This is our homepage');
});
app.listen(3000,()=>{
    console.log('listening to the port 3000 ...')
})