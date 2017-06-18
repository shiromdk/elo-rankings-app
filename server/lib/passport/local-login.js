const jwt = require('jsonwebtoken');
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

  return User.findOne({username:userData.username},(err,user)=>{
    if(err){return done(err)}
    if(!user){
      const error = new Error("Incorrect Username or password");
      error.name = 'IncorrectCredentialsError';
      return done(error);
    }
    return user.comparePassword(userData.password,(passwordErr,isMatch)=>{
      if(err){return done(err)}
      if(!isMatch){
        const error = new Error('Incorrect Username or password');
        error.name = 'IncorrectCredentialsError';

        return done(error);
      }
      const payload = {
       sub: user._id
     };
     const token = jwt.sign(payload, "secretphraseyeah");
     const data = {
       name: user.name
     };
     return done(null, token, data);
    })
  })

});
