import BodyParser from "body-parser";
import dotenv from "dotenv";
import express, { Express } from "express";
import v1Router from "./v1/routes/serverListRoutes";
import dbConnect from "./v1/database/dbConnect";
import authRouter from "./v1/routes/authRoute";
import cors from "cors";
// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config();

// Intialize App
const app: Express = express();
const PORT = process.env.PORT || "3000";

// execute database connection
dbConnect();

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

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
