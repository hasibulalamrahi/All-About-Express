const fs = require('fs');
const express = require('express');
const app = express();
app.use(express.json()); //Middleware - a function which can modify incoming requests


const tours = JSON.parse(fs.readFileSync(`${__dirname}/Dev_Data/DEV/tours-simple.json`));
// const tours = JSON.parse(fs.readFileSync('/Dev_Data/DEV/tours-simple.json'));

app.get('/api/v1/tours',(req,res)=>{
    res.status(200).json({
        status:'success',
        results: tours.length,
        data:{
            tours 
        }
    })
});
app.post('/api/v1/tours',(req,res)=>{
    // console.log(req.body);
    const newId = tours[tours.length-1].id +1;
    const newTour = Object.assign({id:newId},req.body);
    tours.push(newTour);
    fs.writeFile(`${__dirname}/Dev_Data/DEV/tours-simple.json`,JSON.stringify(tours),err=>{
        res.status(201).json({
            status :'success',
            data:{
                tour :newTour
            }

        })
    })
    // res.send('DONE');
})
const port = 3000;
app.listen(port,()=>{
    console.log(`App running at port ${port}..`);
});
