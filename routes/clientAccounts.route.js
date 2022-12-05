import express from "express";
import * as clientAccountsControllerJs from "../controllers/clientAccounts.controller.js";

const router = express.Router();

router.post("/", clientAccountsControllerJs.createClientAccount);
router.get("/", clientAccountsControllerJs.getAllClientAccounts);
router.get("/:name", clientAccountsControllerJs.getClientAccountByName);
router.put("/", clientAccountsControllerJs.updateClientAccount);

export default router;