require('dotenv').config()


const express= require('express');
const app=express()

const port=3000;
app.get ('/',(req,res)=>{
    res.send("hey my first server");
})
app.get ('/twitter',(req,res)=>{
    res.send("twitter");
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login here</h1>')
})
app.get('/Youtube',(req,res)=>{
    res.send('<h2>Chay aur code</h2>')
})
  
app.listen(process.env.PORT,()=>{
    console.log(`app listening on port ${port}`)
})