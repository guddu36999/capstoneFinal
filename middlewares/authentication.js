const {verifyToken}=require('../services/authentication');

function checkAuthentication(req,res,next){
    const token=req.cookies.token;
    if(!token)return next();
    const payload=verifyToken(token);
    req.user=payload;
    next();
};

function checkLoggedIn(req,res,next){
    if(!req.cookies.token)return res.render("donationPage.ejs",{msg:"login please for posting offerings"});
    const token=req.cookies.token;
    const payload=verifyToken(token);
    if(!payload)return res.render("donationPage.ejs",{msg:"login please for posting offerings"});
    next();
}

module.exports={
    checkAuthentication,
    checkLoggedIn
};


