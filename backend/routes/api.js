const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const User = require('../models/User')
db = 'mongodb+srv://MoinShaikh611:Monu@78654321@moincluster.typtf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(db, { useNewUrlParser: true , useUnifiedTopology: true},err=>{
    if(err) {
        console.log(err);
    }
    else{
        console.log('connected to db')
    }
})

router.get('/',(req,res) =>{
    res.json({message:"Hello from the api"})
})

router.post('/login',(req,res) =>{
    const userData = req.body;  
    const user = new User(userData)
    user.save();

    res.status(201).json({
        email:req.body.email,
        password:req.body.password
    })
})

module.exports = router;