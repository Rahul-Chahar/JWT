var express = require('express');
var app = express();
var dotenv = require('dotenv');
const router = require('./Routes/UserRoute');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


mongoose.connect('mongodb://localhost:27017/mydatabase')
.then(()=>{
    console.log("Database connected successfully");
})
.catch((err)=>{
    console.log(err);
});



app.use('/api/v1/user', router); // router middleware

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})


/* ENV
PORT=5002
SECRET_KEY="1130Rahul"
*/