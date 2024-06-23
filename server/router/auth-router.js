const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");
const signupSchema = require("../validations/auth-validator");
const validate = require("../middlewares/validate_middleware"); 


router.route("/").get(authcontrollers.home);
router.route("/register").post(validate(signupSchema), authcontrollers.register);
router.route("/login").post(authcontrollers.login);

module.exports = router;
