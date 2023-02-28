const express = require("express");
const app = express();

app.get("/api/hello",(req,res)=>{
    res.send("반가워요")
})

app.listen(5000,()=>{
    console.log("Server Start");
})