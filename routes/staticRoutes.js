const express=require('express');
const { handleUserSignup, handleUserLogin,handleUserLogout,handleHomePage } = require('../controller/staticRoutes');
const router=express.Router();

router.get('/',handleHomePage);

router.get('/signup',(req,res)=>{
   return res.render('signup.ejs');
});

router.get('/login',(req,res)=>{
    return res.render('login.ejs');
});

router.post('/signup',handleUserSignup);

router.post('/login',handleUserLogin);

router.get('/logout',handleUserLogout);

module.exports=router;