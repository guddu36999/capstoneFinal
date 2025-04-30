const donation=require('../model/donation');

async function handleProfile(req,res){
    try{
        const data=await donation.find({createdBy:req.user.email});
        return res.render("profilePage.ejs",{Data:data,user:req.user});
    }
    catch(err){
        console.log(err);
    }

};

module.exports={
    handleProfile
}