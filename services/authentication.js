const jwt=require('jsonwebtoken');
const secret="20aAA20$";

function createToken(user){
    const payload={
        _id:user._id,
        name:user.name,
        email:user.email,
        city:user.city,
    }
    return jwt.sign(payload,secret);
}

function verifyToken(token){
    return jwt.verify(token,secret);
}

module.exports={
    createToken,
    verifyToken
}