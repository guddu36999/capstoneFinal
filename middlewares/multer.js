const multer=require('multer');

//setting up multer
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
          cb(null,'./public');
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname);
    }
});

const upload=multer({storage:storage});

module.exports=upload;