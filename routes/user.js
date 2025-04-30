const express=require('express');
const router=express.Router();
const {handleProfile}=require('../controller/user');


router.get('/profile',handleProfile);

module.exports=router;