import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

import { connectDB } from "./config/db.js";
import postRouter from "./postRouter.js";

dotenv.config();

connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}
app.use(express.json());
app.use("/api/", postRouter);

app.listen(PORT, console.log(`Server running on port ${PORT}`));

export default app;
