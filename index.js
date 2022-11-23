const express=require("express")
const app=express()
const port=2000;
const cors=require("cors")
const Teachers=require("./data.js")
const emp=[{id:1,name:"abhi",position:"software"},{id:2,name:"nani",position:"ceo"},{id:3,name:"sunny",position:"mr executive"}]
app.use(cors())


app.get("/",(req,res)=>{
	res.send("hii i am a server")
	})
app.get("/user",(req,res)=>{
	res.send("connecting to server")
})
app.get("/emp",(req,res)=>{
	res.json(emp)
})
app.get("/Teachers",(req,res)=>{
	res.json(Teachers)
})
app.listen(port,()=>console.log("server is created in port in 2000"))