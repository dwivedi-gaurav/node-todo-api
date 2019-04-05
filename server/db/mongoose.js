const mongoose=require('mongoose');

mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser: true,useCreateIndex: true});

module.exports={
  mongoose
}


//these env. variables are set by node js
// process.env.NODE_ENV==='test'
// process.env.NODE_ENV==='development'
// process.env.NODE_ENV==='production'
