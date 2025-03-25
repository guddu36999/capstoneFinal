const mongoose=require('mongoose');

const donationSchema=new mongoose.Schema({
    title:{type:String,required:true},
    timings:{type:String,required:true},
    address:{type:String,required:true},
    description:{type:String,required:true},
    imageUrl:{type:String,required:true},
    name:{type:String,required:true},
    contact:{type:String,required:true},
    city:{type:String,required:true},
},{
    timestamps:true
});

const donation=mongoose.model('donation',donationSchema);

module.exports=donation;