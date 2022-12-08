import express from "express";
import * as openPositionsControllerJs from "../controllers/openPositions.controller.js";


const router = express.Router();


router.get("/", openPositionsControllerJs.getAllOpenPositions);


export default router;