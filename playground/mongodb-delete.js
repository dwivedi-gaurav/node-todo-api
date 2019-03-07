//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb'); //ES6 destructuring to create variable of object property.

// var obj=new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client)=>{  //Added { useNewUrlParser: true } because of deprication warning
  if(err){
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');
  const db=client.db('TodoApp');

  //deleteMany()
  // db.collection('Todos').deleteMany({text:'Something to do'}).then((result)=>{
  //   console.log(result);
  // },(err)=>{
  //   console.log('Unable to delete Todos',err);
  // });

  //deleteOne()
  db.collection('Todos').deleteOne({text:'Complete NodeJS course on priority'}).then((result)=>{
    console.log(result);
  },(err)=>{
    console.log('Unable to delete Todos',err);
  });

  //findOneAndDelete().......Deletes and returns the document deleted.
  db.collection('Todos').findOneAndDelete({cpmpleted:false}).then((result)=>{
    console.log(result);
  },(err)=>{
    console.log('Unable to delete Todos',err);
  });

  client.close();
});
