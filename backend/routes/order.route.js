import express from "express";
import { fetchOrder, newOrder } from "../controllers/order.controller.js";
const router = express.Router();

router.get("/order", fetchOrder);
router.post("/order", newOrder);

export default router;