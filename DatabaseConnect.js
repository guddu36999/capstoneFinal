const mongoose=require('mongoose');

async function connectToMongoDB(){
   return await mongoose.connect("mongodb://localhost:27017/KARN");
}

module.exports=connectToMongoDB;