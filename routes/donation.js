const express=require('express');
const router=express.Router();
const {handleDonationPage,handleDonationListing,handleDelete}=require('../controller/donation');
const donation=require('../model/donation');
const {checkLoggedIn}=require('../middlewares/authentication');

const upload=require('../middlewares/multer');

router.get('/donationPage',handleDonationPage);

router.post('/donationListing',checkLoggedIn,upload.single('file'),handleDonationListing);

router.get('/delDonation/:id',handleDelete);

module.exports=router;