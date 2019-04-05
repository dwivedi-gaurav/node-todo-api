var env=process.env.NODE_ENV || 'development';      //since NODE_ENV is not set on development

console.log('ENV ****',env);

if(env==='development'){
  process.env.PORT=3000;
  process.env.MONGODB_URI='mongodb://localhost:27017/TodoApp';
}else if(env==='test'){
  process.env.PORT=3000;
  process.env.MONGODB_URI='mongodb://localhost:27017/TodoAppTest';
}

console.log('MONGODB_URI ****',process.env.MONGODB_URI);
