const express=require('express');

const router=express.Router();

router.get('/',(req,res)=>{
    res.send("Hello from express js!");
})

module.exports=router;