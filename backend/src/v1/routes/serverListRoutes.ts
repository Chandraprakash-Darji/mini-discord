import express from "express";

import {
    createServer,
    deleteServer,
    getAllServers,
    getServer,
    updateServer,
} from "../controllers/serverListController";
import { auth } from "../services/auth";

const router = express.Router();

router.get("/", auth, getAllServers);

router.get("/:serverId", getServer);

router.post("/", createServer);

router.patch("/:serverId", updateServer);

router.delete("/:serverId", deleteServer);

export default router;
