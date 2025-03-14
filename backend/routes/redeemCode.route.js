import express from "express";
import { upload, remove, types, variants, viewCodes } from "../controllers/redeemCode.controller.js";
const router = express.Router();

router.get("/types", types);
router.get("/variants", variants);
router.post("/upload", upload);
router.delete("/remove", remove);
router.get("/viewCodes", viewCodes);

export default router