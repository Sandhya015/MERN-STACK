const home = async(req,res)=>{
    try{
        res.status(200).send("Hello World my dear friend");
        
    }catch(error){
        console.log(error);
    }
};

const register = async(req,res)=>{
    try{
        res.status(200).send("welcome to the registration page");
        
    }catch(error){
        res.status(400).send({msg:"page not found"});
    }
};
module.exports = {home,register};