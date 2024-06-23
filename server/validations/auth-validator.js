const { z } = require ("zod");

const signupSchema = z.object({

    username:z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"name atleast of 3 charecter"})
    .max(255,{message:"name must not be more than 225 charectwer"}),

    email:z
    .string({required_error:"email is required"})
    .trim()
    .min(3,{message:"email atleast of 3 charecter"})
    .max(255,{message:"email must not be more than 225 charectwer"}),

    phone:z
    .string({required_error:"phone Number is required"})
    .trim()
    .min(10,{message:"phonenNumber  atleast of 10 charecter"})
    .max(255,{message:"phonenNumber  must not be more than 225 charectwer"}),

    pssword:z
    .string({required_error:"password is required"})
    .trim()
    .min(10,{message:"password atleast of 10 charecter"})
    .max(1024,{message:"password  must not be more than 1024 charectwer"}),

});

module.exports = signupSchema;
