const express=require('express');
const ejs=require('ejs');
const app=express();
app.set('view engine',ejs);
const mongoose=require('mongoose');
const port=3000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const cookieParser=require('cookie-parser');
app.use(cookieParser());
const {checkAuthentication}=require('./middlewares/authentication');
app.use(checkAuthentication);
app.use(express.static('public'));

//datbase connection
// const connectToMongoDB=require('./DatabaseConnect');
async function connection(url){
    try{
           mongoose.connect(url);
           console.log(`connected to mongoDB`);
    }
    catch(err){
        console.log(`error in connecting to DATABASE${err}`);

    }
}
connection("mongodb+srv://guddu36999:e6yfmnUa81SelExl@cluster0.yrp6quw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

//routings
const staticRoutes=require('./routes/staticRoutes');
app.use('/',staticRoutes);
const donationRoutes=require('./routes/donation');
app.use('/donation',donationRoutes);
const userRoutes=require('./routes/user');
app.use('/user',userRoutes);
const dashboardRoutes=require('./routes/dashboard');
app.use('/dashboard',dashboardRoutes);


app.listen(port,(err)=>{
    if(err)console.log(err);
    else console.log(`server is running on port:${port}`);
});