import express from "express";
import mysql from "mysql";
import cors from "cors";
import cookieParser from 'cookie-parser';
import  jwt from "jsonwebtoken";



const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors(
    {
        origin:["http://localhost:3000"],
        methods:["POST,GET"],
        credentials:true    
    }
));


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'login'
})



app.post('/Addnew', (req, res) => {
    let a=req.body
    console.log(a);
    let data ={firstname:a.firstname,email:a.email,phone:a.phone,city:a.city,Password:a.Password,confirmpassword:a.confirmpassword};
    let sql="INSERT INTO register SET ?";
    let query= db.query(sql,data,(err,results)=>{
        if(err)return res.json({message:"Error in node"});
        return res.json(results);    
    })

})
app.post('/Main', (req,res) =>{
    const sql = "SELECT * FROM register WHERE email=? AND Password=?";
    db.query(sql, [req.body.email, req.body.password], (err, results) =>{
        if(err) return res.json({message:"Error"});
        if(results.length > 0){
            const name=results[0].name;
            const token =jwt.sign({name},"our-jsonwebtoken-secret-key",{expiresIn:'1d'});
            res.cookie('token',token);
            
            return res.json({Main:true});
        } else {
            return res.json({Main:false});
        }
    })
})

app.get('/Home',(req,res)=>{
    res.clearCookie('token')
    return res.json({Status:true})
})



app.listen(8081, () => {
    console.log("Hey there");
})