const express = require("express")
const router = express.router();

router.get("/login",function (req,res,next){
    res,render("login");

});

module.exports=router;
