const verifyUser=(req,res,next)=>{
    const token=req.cookies.token;
    if(!token){
        return res.json({Message:"we need token please provide"})
    }else {
        jwt.verify(token,"our-jsonwebtoken-secret-key",(err,decoded)=>{
            if(err){
                return res.json({Message:"authentication error"})
            }else {
                req.name=decoded.name;
                next()
            }
        })
    }
}

app.get('/',verifyUser,(req,res)=>{
    return res.json({Status:"success",name:req.name})
})
// ------------------------------------server-------------------------------