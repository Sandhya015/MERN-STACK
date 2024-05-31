const User = require("../models/user-models");
const bcrypt = require("bcryptjs")
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

        const saltRound= 10;
        const hash_password =await bcrypt.hash(password,saltRound);

        const newUser = await User.create({ username, email, phone, password:hash_password });
        res.status(201).json(newUser); 
    
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { home, register };
