
const express = require("express");
const router = express.Router();
const {addPage} = require("../views");
const bodyParser = require("body-parser");
const {Page} = require("../models");

//OR const addPage = require("../views/addPage");


router.use(bodyParser.urlencoded({extended: false}));


router.get('/', async (req, res, next) => {
  res.redirect('/');
})

router.post('/', async (req,res,next) => {

  const page = new Page({
    title: res.json(req.body.title),
    content: res.json(req.body.content)
  })

  try{
    await page.save();
    res.redirect('/');
  }
  catch(error){
    next(error)
  }

})

router.get('/add', async (req,res,next) => {
  res.send(addPage());

})

module.exports = router;
