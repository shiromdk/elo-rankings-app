const mongoose = require('mongoose');

module.exports = mongoose.model(
  'Player',{
    firstname:String,
    lastname:String,
    elo:Number,
    wins:Number,
    losses:Number,
    matchesplayed:Number
  });
