const mongoose = require("mongoose");

const URI ="mongodb://127.0.0.1:27017/mern_admin";

// mongoose.connect(URI);

const connectDb = async() =>{
try{
    await mongoose.connect(URI);
    console.log("connection suuccessful to db");

}catch(error){
    console.log("datbase failed to connect");
    process.exit(0);
}
}
module.exports =connectDb;