const express = require("express");
const router = express.Router();

router.get("/",(req,res) => {

    res.status(200).send("Hello World my dear");
});

// app.get("/register",(req,res) => {

//     res.status(200).send("Welcome To the  registration page");
// })


module.exports = router;