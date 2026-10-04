import express from "express";
import {drinks} from "../controllers/drinks.js";
const router = express.Router();
router.post("/drinks", drinks.insert);
router.get("/getall", drinks.all);
router.get("/getone/:id", drinks.findOne);

export default router;