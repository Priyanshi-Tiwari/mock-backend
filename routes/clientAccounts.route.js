import express from "express";
import { getAllClientAccounts, getClientAccountByName, createClientAccount } from "../controllers/clientAccounts.controller.js";

const router = express.Router();

router.post('/', createClientAccount);
router.get('/', getAllClientAccounts);
router.get('/:name', getClientAccountByName);

export default router;