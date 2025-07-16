// routes/mailRoutes.js
import express from "express";
import { sendMail } from "../controllers/mailController.js";
import { upload } from "../middlewares/uploadMiddleware.js";

const router = express.Router();

router.post("/send", upload.single("resume"), sendMail);

export default router;
