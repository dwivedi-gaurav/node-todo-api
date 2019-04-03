const bcrypt=require('bcryptjs');

var pass='abcd123!';

// bcrypt.genSalt(10,(err,salt)=>{
//   bcrypt.hash(pass,salt,(err,hash)=>{
//     console.log(hash);
//   });
// });

var hashedPass='$2a$10$pGI.n7VN2QAl/Zl0hysRUOfoyog0hvT7AccVhJogFXcc9Xjtm5Tr6';

bcrypt.compare(pass,hashedPass,(err,res)=>{
  console.log(res);
});
