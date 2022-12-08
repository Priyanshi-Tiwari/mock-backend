import express from "express";
import cors from "cors";
import clientAccountsRoute from "./routes/clientAccounts.route.js";
import openPositionsRoute from './routes/openPositions.route.js'

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/client-accounts', clientAccountsRoute);
app.use('/api/v1/open-positions', openPositionsRoute);

app.use("*", (req, res) => res.status(404).json({error: "not found"}));

export default app;