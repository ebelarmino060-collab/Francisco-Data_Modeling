import express from "express";
import {vegetables} from "../controllers/vegetables.js";
const router = express.Router();
router.post("/vegetables", vegetables.insert);
router.get("/getall", vegetables.all);
router.get("/getone/:id", vegetables.findOne);

export default router;