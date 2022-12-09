const mongoose = require("mongoose");
//const validator = require("validator");

const taskSchema = new mongoose.Schema({
    task : {
        type:String,
        required:true,
        minlength:3,

    }    
})
//creating Collection
const Task = new mongoose.model('Task',taskSchema);

module.exports = Task;