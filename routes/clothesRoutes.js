import express from "express";
import { cloths } from "../controllers/Cloths.js";
const router = express.Router();

router.post("/clothes", cloths.insert);
router.get("/getall", cloths.all);
router.get("/getone/:id", cloths.findOne);

export default router;