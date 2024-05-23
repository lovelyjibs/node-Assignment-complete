
const express = require("express")

const app = express()

app.listen(8000, ()=>{
    console.log("server started runnin...");

})

app.get("/users", (request, response)=>{

    response.json("Hello World")
 
 }
 
    
 )

app.get("/users",(request, response)=>{
    response.json["apple" , "banana","orange"]   

})


