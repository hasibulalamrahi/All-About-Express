const express = require('express')

const app = express();
const admin = express();
admin.get('/dashboard',(req,res)=>{
    console.log(admin.mountpath);
    res.send('Welcome to admin dashboard');
});
app.get('/',(req,res)=>{
    res.send('Welcome to application home');
});

app.use('/admin',admin);
app.listen(3000,()=>{
    console.log('listening on port 3000');
})