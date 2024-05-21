const express = require("express");
const app = express();

app.get("/",(req,res) => {

    res.status(200).send("Hello World");
});

app.get("/register",(req,res) => {

    res.status(200).send("Welcome To the  registration page");
})
const PORT=5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port: ${PORT}`);
});