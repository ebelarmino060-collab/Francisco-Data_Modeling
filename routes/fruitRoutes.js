import express from "express";
import {fruits} from "../controllers/fruits.js";
const router = express.Router();
router.post("/fruits", fruits.insert);
router.get("/getall", fruits.all);
router.get("/getone/:id", fruits.findOne);

export default router;