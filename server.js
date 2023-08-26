const express=require("express");
const path=require("path");

//http
//const server=createserver()
const app=express()
app.use(express.static("."));
app.use(express.urlencoded({extended:false}))
// app.get("/getdata",(req,res)=>{
//     console.log(req.query);
//     res.send("Welcome "+req.query.yourname);

// })

app.post("/getdata",(req,res)=>{
    console.log(req.body);
    res.send("Welcome "+req.body.yourname);
})
//callback
//app.get(endpoint,callback)
//req.url  req.method
//if(req.url=="/" && req.method=="GET")

// app.get("/",(req,res)=>{
//    //console.log(__dirname)
//    res.send("Demo");
//    //res.sendFile(path.join(__dirname,"./index.html"));

// })
// app.get("*",(req,res)=>{
//     res.send("Another")
// })

// app.get("/about",(req,res)=>{
//     res.end("about us");
// })

app.listen(3000,(err)=>{

    console.log("Server started...")
});
