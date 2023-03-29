var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    let x = req.query.x;
    let rand = Math.random().toFixed(2);
    let atan = Math.atan(rand).toFixed(2);
    let exp = Math.exp(rand).toFixed(2);
    let expm1 = Math.expm1(rand).toFixed(2);
    if (x == undefined) {
        x = rand;
    }

    res.render('computation', {
        atanVal: `Math.atan() applied to ${x} is ${atan}`,
        exp: `Math.exp() applied to ${x} is ${exp}`,
        expm1: `Math.expm1() applied to ${x} is ${expm1}`,
    });
});

module.exports = router;