var express = require("express");
var router = express.Router();
var path = require("path");

router.use(function timelog(req, res, next){
    console.log("time: " , Date.now())
    next();
})

router.get("/survey", function (req, res){
    res.sendFile(path.resolve("./app/public/survey.html"))
})

router.get("/", function (req, res){
    res.sendFile(path.resolve("./app/public/home.html"))
})

module.exports = router;