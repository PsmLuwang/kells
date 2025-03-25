import express from "express";
import { upload, remove, types, variants, viewCodes, priceUpdate } from "../controllers/redeemCode.controller.js";
const router = express.Router();

router.get("/types", types);
router.get("/variants", variants);
router.post("/variants/priceUpdate", priceUpdate);
router.post("/upload", upload);
router.delete("/remove", remove);
router.get("/viewCodes", viewCodes);

export default router