const mongoose = require('mongoose');

module.exports = mongoose.model({
  'Match',{
    playerone:String,
    playertwo:String,
    playerOneElo:Number,
    playerOneNewElo: Number,
    playerTwoElo:Number,
    playerTwoNewElo:Number,
    result: Boolean,
    date:{
      type:Date, default:Date.now
    }
  }
});
