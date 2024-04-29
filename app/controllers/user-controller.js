const jwt=require('jsonwebtoken')//npm install jsonwebtoken
const usersCltr={}
usersCltr.login=(req,res)=>{
    const body=req.body
    if(body.email==process.env.EMAIL && body.password==process.env.PASSWORD){
        const token=jwt.sign({id:process.env.ID},process.env.JWT_SECRET,{expiresIn:"2d"})
        res.json({token:token})
    }else{
        res.status(401).json({
            notice:'invalid user'
        })
    }
}
module.exports=usersCltr