const express = require('express')
    , router = express.Router()

router.post("/", (req, res) => {
    res.send({
        token: 'test123'
    });
})