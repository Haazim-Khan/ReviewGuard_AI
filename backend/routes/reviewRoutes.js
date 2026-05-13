import { Router } from "express";
const router = Router();
import { analyzeReview } from "../controllers/reviewController.js";

router.post("/analyze", analyzeReview);

export default router;