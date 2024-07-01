const express  = require('express')

const router = express.Router()

router.get('/start',(req,res) => {
    res.status(200).send("start creating Api")
})

module.exports = router