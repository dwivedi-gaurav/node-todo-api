const mongoose=require('mongoose');
const validator=require('validator');
const jwt=require('jsonwebtoken');
const _=require('lodash');
const bcrypt=require('bcryptjs');

var UserSchema=new mongoose.Schema({
  email:{
    type:String,
    required:true,
    minlength:1,
    trim:true,
    unique:true,
    validate:{
      //vaidator:validator.isEmail;
      validator:(value)=>{
        return validator.isEmail(value);
      },
      message:'{VALUE} is not a valid email'
    }
  },
  password:{
    type:String,
    required:true,
    minlength:6
  },
  tokens:[{
    access:{
      type:String,
      required:true
    },
    token:{
      type:String,
      required:true
    }
  }]
});

UserSchema.methods.toJSON=function(){                                   // Overriding instance method.
  var user=this;
  return _.pick(user,['_id','email']);
}

UserSchema.methods.generateAuthToken=function(){                      //Instanse methd.
  var user=this;
  var access='auth';
  var token=jwt.sign({_id:user._id.toHexString(),access},process.env.JWT_SECRET).toString();
  user.tokens.push({access,token});
  return user.save().then(()=>{
    return token;
  });
}

UserSchema.methods.removeToken=function(token){
  var user=this;
  return user.updateOne({
    $pull:{
      tokens:{
        token:token
      }
    }
  });
}

UserSchema.statics.findbyToken=function(token){
  var User=this;
  var decoded;
  try {
    decoded=jwt.verify(token,process.env.JWT_SECRET);
  } catch (e) {
      return new Promise((resolve,reject)=>{                      //We can simply use return Promise.reject()
        reject();
      });
  }
  return User.findOne({
    _id:decoded._id,
    'tokens.token':token,
    'tokens.access':'auth'
  });
}

UserSchema.statics.findByCredentials=function(email,password){
  var User=this;
  return User.findOne({
    email
  }).then((user)=>{
    if(!user){
      return Promise.reject();
    }
    return new Promise((resolve,reject)=>{
      bcrypt.compare(password,user.password,(err,result)=>{
         if(result){
           resolve(user);
         }else{
           reject();
         }
       });
    });
  });
}

UserSchema.pre('save',function(next){
  var user=this;
  if(user.isModified('password')){
    bcrypt.genSalt(10,(err,salt)=>{
      bcrypt.hash(user.password,salt,(err,hash)=>{
          user.password=hash;
          next();
      });
    });
  }else{
    next();
  }
});

var User=mongoose.model('User',UserSchema);

module.exports={
  User
}
