// const {SHA256}=require('crypto-js');
//
// var msg="I am gaurav dwivedi";
// var hash=SHA256(msg).toString();
//
// console.log(`Message: ${msg}`);
// console.log(`Hash: ${hash}`);
//
// var data={
//   id:4
// }
//
// var token={
//   data,
//   hash:SHA256(JSON.stringify(data)+'someSecretForSalt').toString()
// }

//Client or a person in the middle trying to manupulate the data
      // token.data.id=5;
      // token.hash=SHA256(JSON.stringify(token.data)).toString()
//==============================================================

// var resultHash=SHA256(JSON.stringify(token.data)+'someSecretForSalt').toString()
//
// if(resultHash===token.hash){
//   console.log('Data was not changed');
// }else{
//   console.log('Data was changed. Do not TRUST!');
// }

//The above steps of creating a token and verifying it is called JWT
//To do all the above stuffs we can use npm library jsonwebtoken
//====================================================================================================================================

const jwt=require('jsonwebtoken');

var data={
  id:10
}

var token=jwt.sign(data,'someSecretForSalt');
var decoded=jwt.verify(token,'someSecretForSalt');

console.log(token);
console.log(`Decoded: ${JSON.stringify(decoded)}`);
