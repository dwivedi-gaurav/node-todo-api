const bcrypt=require('bcryptjs');

var pass='abcd123!';

bcrypt.genSalt(10,(err,salt)=>{
  bcrypt.hash(pass,salt,(err,hash)=>{
    console.log(hash);
  });
});

var hashedPass='$2a$10$FVPfkNcpTtHeQaZ2i4VxMeeaU53AmY4biX5W09uNxxsHWvvJI.Mwa';

bcrypt.compare(pass,hashedPass,(err,res)=>{
  console.log(res);
});
