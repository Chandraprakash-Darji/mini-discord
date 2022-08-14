import BodyParser from "body-parser";
import dotenv from "dotenv";
import express, { Express } from "express";
import v1Router from "./v1/routes/serverListRoutes";
import dbConnect from "./v1/database/dbConnect";
import authRouter from "./v1/routes/authRoute";

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config();

// execute database connection
dbConnect();
// Intialize App
const app: Express = express();
const PORT = process.env.PORT || "3000";

// Curb Cores Error by adding a header here
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});

// Setup BodyParser to parse JSON
app.use(BodyParser.json());

// routes for ServerList path
app.use("/api/v1/serverList", v1Router);

// auth Route
app.use("/api/v1/auth", authRouter);

// Start Server
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
