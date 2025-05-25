const express=require('express');
const router=express.Router();
const donation=require('../model/donation');

router.get('/',async(req,res)=>{
    try{
        const data=await donation.find({});
        return res.render('dashboard.ejs',{data:data});
    }
    catch(err){
        console.log(err);
        return res.send("error in the server side");
    }
});


module.exports=router;

