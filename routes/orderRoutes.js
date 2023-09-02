const express=require("express");
const router=express.Router();
router.get("/",(req,res)=>{
        res.send("Order Home PAge")
    })
    router.get("/details/:xyz",(req,res)=>{
        res.send("Order details PAge"+req.params.xyz);

    })
    router.get("/history",(req,res)=>{
        res.send("Order histry PAge")
    })
    ///gmap/hp/punjab
    //gmap/hp/haryana
    //gmap/abc/xyz
    router.get("/gmap/:from/:to",(req,res)=>{
        res.send("Order histry PAge"+req.params.from+" "+req.params.to);
    })
module.exports=router;
