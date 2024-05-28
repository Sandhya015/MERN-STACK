const User = require("../models/user-models");

const home = async (req, res) => {
    try {
        res.status(200).send("Hello World my dear friend");
    } catch (error) {
        console.log(error);
    }
};

const register = async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = await User.create({ username, email, phone, password });
        res.status(201).json(newUser); 
    
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { home, register };
