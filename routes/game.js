var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.sendFile('public/game/main.html', { root: '.'});
});

module.exports = router;
