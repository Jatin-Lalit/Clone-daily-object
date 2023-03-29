const express=require("express")
const fs=require("fs")
const app=express();

const cors = require('cors')

app.use(cors())

app.get("/watches",(req,res)=>{
let data=JSON.parse(fs.readFileSync("./db.json","utf-8"))

res.send(data.appleBands)

})
app.get("/ele",(req,res)=>{
    let data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
    
    res.send(data.ele)
    
    })



app.listen(1212,()=>{
    console.log("it's on")
})