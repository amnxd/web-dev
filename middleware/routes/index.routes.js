const express = require('express');
const { request } = require('../src/app');

const app = express();

router.get('/', (req, res) =>{
    res.json({
        message: "this is the api"
    })
})

module.exports = router;