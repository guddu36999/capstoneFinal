const donation=require('../model/donation');


function handleDonationPage(req,res){
    if(req.user)return res.render('donationpage.ejs',{user:req.user});
    else return res.render('donationPage.ejs');
}

async function handleDonationListing(req,res){
    await donation.create({
        title:req.body.title,
        timings:req.body.timings,
        address:req.body.address,
        description:req.body.description,
        imageUrl:req.file.filename,
        name:req.body.name,
        contact:req.body.contact,
        city:req.user.city
    });
    return res.redirect('/');
}


module.exports={
    handleDonationPage,
    handleDonationListing,

}