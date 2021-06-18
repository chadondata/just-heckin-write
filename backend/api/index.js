const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

ROUTER.get('/echo', (req, res) => {
    res.header('Content-Type', 'application/json');
    res.send(JSON.stringify(req.body));
})

module.exports = ROUTER;