const express = require('express');
const { request } = require('../src/app');  

const router = express.Router();

router.use((req,res,next)=>{
    console.log("this is the middleware, between router and api")
    next()
})

router.get('/', (req, res) =>{
    res.json({
        message: "this is the api"
    })
})

module.exports = router;