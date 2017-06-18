const express = require('express');
const router = express.Router();
const passport = require('passport');
const path = require("path");
const playermodel = require('../config/models/players');

router.get('/player',(req,res)=>{
  playermodel.find((err,players)=>{
    if(err){console.log(err);}
    if(players){res.json(players);}
  })
});

router.post('/player',(req,res)=>{
  if(req.body.firstname&&req.body.lastname){
    const newplayer = new playermodel({
      firstname:req.body.firstname,
      lastname:req.body.lastname,
      elo:1000,
      wins:0,
      losses:0,
      matchesplayed:0
    });
    newplayer.save();
    res.sendStatus(201);
  }else{
    res.sendStatus(400);
  }
});

router.get('/player/:id',(req,res)=>{
  console.log(req.params.id);
  res.send(req.params.id);
});

router.post('/match',(req,res)=>{
  console.log(req.body);
  res.sendStatus(201);
});





module.exports = router;
