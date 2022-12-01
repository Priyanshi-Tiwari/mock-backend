import http from "http";
import app from "./app.js";
import dotenv from "dotenv";
import database from "./database/database.js";

const server = http.createServer(app);

// load configs
dotenv.config();

const port = process.env.PORT || 4040;

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})