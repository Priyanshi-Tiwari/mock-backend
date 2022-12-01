import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const database = mongoose.connect(
    process.env.INTERNAL_PORTAL_DB_URI,
    { maxPoolSize: 10 }
).catch(err => console.log('DB connection error ', err));

export default database;