var express = require('express');
var router = express.Router();





router.get('/', (req, res) => {
    /* res.send('/being hit');*/
    res.render('women-earrings', { title: 'Express' });
});


router.get('/example', (req, res) => {
    res.send('/example being hit');
});

module.exports = router;