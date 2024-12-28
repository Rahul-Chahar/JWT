const jwt = require('jsonwebtoken');
const verify= (req, res, next) => {
    const tokencheck=req.headers['authorization'];
    const extractedToken=tokencheck.split(' ')[1];
    // "Bearer <token>" => ["Bearer", "<token>"]
    if(extractedToken){
    jwt.verify(extractedToken,process.env.SECRET_KEY,(err,decoded)=>{
        if(err){
            res.json({message:err.message}).status(500);
        }
        else{
            req.body=decoded;
            next();
        }
    })
    }
}

module.exports = verify;