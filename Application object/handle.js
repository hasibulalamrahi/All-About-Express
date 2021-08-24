const handle = (req,res)=>{
    console.log(req.app.locals.title);  // we are accessing this title variable from any where in our app
    res.send('This is our homepage');
}

module.exports = handle;