import BodyParser from "body-parser";
import dotenv from "dotenv";
import express, { Express } from "express";
import v1Router from "./v1/routes/serverListRoutes";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || "3000";

app.use(BodyParser.json());
app.use("/api/v1/serverList", v1Router);

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
