import express from "express";
import Order from "../models/Order.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// Create Order
router.post("/", protect, async (req, res) => {
  const { products, totalAmount } = req.body;

  const order = await Order.create({
    user: req.user.id,
    products,
    totalAmount
  });

  res.json(order);
});

// Get My Orders
router.get("/my", protect, async (req, res) => {
  const orders = await Order.find({ user: req.user.id });
  res.json(orders);
});

// Admin: Get All Orders
router.get("/", protect, async (req, res) => {
  const orders = await Order.find().populate("user");
  res.json(orders);
});

export default router;
