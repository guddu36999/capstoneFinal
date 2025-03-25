const mongoose=require('mongoose');
const crypto=require('crypto');

const userSchema=new mongoose.Schema({
   name:{type:String,required:true},
   email:{type:String,required:true,unique:true},
   city:{type:String,required:true},
   password:{type:String,required:true},
   salt:{type:String},
});

userSchema.pre('save',function(next){
    const salt=crypto.randomBytes(16).toString('hex');
    const hash=crypto.createHash('sha256');
    hash.update(this.password+salt);
    this.salt=salt;
    this.password=hash.digest('hex');
    next();
});



const user=mongoose.model('user',userSchema);

module.exports=user;