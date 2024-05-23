const express = require("express");
const router = express.Router();

router.route("/").get((req,res) => {

    res.status(200).send("Hello World my dear friend");
});

router.route("/register").get((req,res) => {

        res.status(200).send("Welcome To the  registration page");
    })

module.exports = router;