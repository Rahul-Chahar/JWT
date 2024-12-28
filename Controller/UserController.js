const userModel = require('../Models/userModel');

const jwt = require('jsonwebtoken');

const handleUserSignUp= (req, res) => {
    try{
    userModel.create(req.body).then(()=>{
        res.json({message:"User created successfully"}).status(201);
    }).catch((err)=>{
        res.json({message:err.message}).status(500);
    })
}
catch(err){
    res.json({message:err.message}).status(500);
}   
}

const handleUserLogin = (req, res) => {
    try{
    let {email} = req.body;
    userModel.find({email:email}).then((response)=>{

        if(response.length>=1){
            jwt.sign(req.body, process.env.SECRET_KEY, (err, token)=>{
                if(err){
                    res.json({message:err.message}).status(500);
                }
                else{
                    res.json({message:"Login successful",
                         data:req.body,
                         token:token}).status(200);
                }
        })
    }
})
    }
    catch(err){
        res.json({message:err.message}).status(500);
    }

}


const getDetails = (req, res) => {

}


module.exports = {handleUserSignUp, handleUserLogin, getDetails};