const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/sandeepDb",{
    useNewUrlParser : true,
    useUnifiedTopology:true
}).then(() =>{
    console.log("Connection Successful");
}).catch((e)=>{
    console.log("No connection",e);
})