const user=require('../model/user');
const crypto=require('crypto');
const {createToken}=require('../services/authentication');
const donation=require('../model/donation');

async function handleHomePage(req,res){
    if(req.user){
        const data=await donation.find({city:req.user.city});
        return res.render('home.ejs',{user:req.user,data:data});
    }
   else return res.render('home.ejs');
}

async function handleUserSignup(req,res){
    const USER=await user.findOne({email:req.body.email});
    if(USER)return res.render("signup.ejs",{msg:"a user already exits using that email."});
    await user.create({
        name:req.body.name,
        email:req.body.email,
        city:req.body.city,
        password:req.body.password,
    });
    return res.render('login.ejs');
};

async function handleUserLogin(req,res){
    const {email,password}=req.body;
    const USER=await user.findOne({email});
    if(!USER)return res.render("login.ejs",{msg1:"no user found using this email!"});
    const salt=USER.salt;
    const hash=crypto.createHash('sha256');
    hash.update(password+salt);
    const hashed_password=hash.digest('hex');
    const token=createToken(USER);
    if(USER.password===hashed_password)return res.cookie("token",token).redirect('/');
    else res.render('login.ejs',{msg2:"wrong user crediantials!"});
}

async function handleUserLogout(req,res){
    return res.clearCookie('token').redirect('/');
}

module.exports={
    handleUserLogin,
    handleUserSignup,
    handleUserLogout,
    handleHomePage,
}