import express from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router=express.Router();

router.post("/register",async(req,res)=>{
  const {email,password}=req.body;
  const hashed=await bcrypt.hash(password,10);
  const user=await User.create({email,password:hashed});
  res.json(user);
});

router.post("/login",async(req,res)=>{
  const {email,password}=req.body;
  const user=await User.findOne({email});
  const valid=await bcrypt.compare(password,user.password);
  if(!valid) return res.status(401).json("Invalid");

  const token=jwt.sign({id:user._id},process.env.JWT_SECRET);
  res.json({token});
});

export default router;
