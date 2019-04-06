var env=process.env.NODE_ENV || 'development';      //since NODE_ENV is not set on development.

if(env==='development' || env==='test'){
  var config=require('./config.json');              //Automatically parses json into javascript object.
  var envConfig=config[env];
  Object.keys(envConfig).forEach((key)=>{
    process.env[key]=envConfig[key];
  });
}
