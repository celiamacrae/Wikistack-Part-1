
const express = require("express");
const router = express.Router();
const {addPage} = require("../views");
const bodyParser = require("body-parser");

//OR const addPage = require("../views/addPage");


router.use(bodyParser.urlencoded({extended: false}));


router.get('/', function (req, res, next){
  res.redirect('/');
})

router.post('/', function(req,res,next){
  res.red('/');
})

router.get('/add', function(req,res,next){
  res.send(addPage());
})












module.exports = router;
