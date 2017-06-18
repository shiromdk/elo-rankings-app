const express = require('express');
const router = express.Router();
const path = require("path");

router.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'../../client/dist/js','index.html'));
});

router.get('/leaderboard',(req,res)=>{
  res.sendFile(path.join(__dirname,'../public','index.html'));
});

module.exports = router;
