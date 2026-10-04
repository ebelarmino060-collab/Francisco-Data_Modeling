import express from "express";
import {animals} from "../controllers/animals.js";
const router = express.Router();
router.post("/animal", animals.insert);
router.get("/getall", animals.all);
router.get("/getone/:id", animals.findOne);

export default router;