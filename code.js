const express=require("express");
const app=express();
const orderRoutes=require("./routes/orderRoutes");

app.use("/orders",orderRoutes);
const path=require("path");
app.use(express.static("."));

app.get("/getdata",(req,res)=>{

    res.send("Get data called");
    
})
app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"./login.html"));
})
// app.get("/orders/",(req,res)=>{
//     res.send("Order Home PAge")
// })
// app.get("/orders/details",(req,res)=>{
//     res.send("Order details PAge")
// })
// app.get("/orders/history",(req,res)=>{
//     res.send("Order histry PAge")
// })
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./home.html"));
})



app.listen(3000,(err)=>{

console.log("Server started...");

})