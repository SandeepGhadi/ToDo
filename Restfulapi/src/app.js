const express = require("express");
const Task = require("./models/task");
require("./db/conn");
const task = require("./models/task");
const app = express();
const port = process.env.PORT || 8000 

app.get('/',(req,res) => {
    res.send('Hello world! Sandeep!!!')
})

app.use(express.json());
//new task
app.post('/task',(req, res)=>{
    console.log(req.body);
    const todo  = new Task(req.body)

    todo.save().then(() =>{
        res.status(201).send(todo);
    }).catch((e)=>{
        res.status(400).send(e);
    })
   // res.send("hello from other side yo");
})


app.listen(port,() => {

    console.log(` app listening on port ${port}`)
})
