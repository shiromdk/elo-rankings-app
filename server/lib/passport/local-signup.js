const User = require('../../config/models/user');
const PassportLocalStrategy = require('passport-local').Strategy;

module.exports = new PassportLocalStrategy({
  usernameField:'username',
  passwordField:'password',
  session:false,
  passReqToCallback:true
},(req,username,password,done)=>{
  const userData = {
    username:username.trim(),
    password:passowrd.trim(),
  };
  const newUser = new User(userData);
  newUser.save((err)=>{
    if(err){ return done(err);}
    return done(null);
  })
})
