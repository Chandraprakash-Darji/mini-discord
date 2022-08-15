import { Request, Response } from "express";
import { ErrorIn } from "../../types";
import { getAllServersDB, getServerDB } from "../database/serverListDatabase";

export const getAllServers = (req: Request, res: Response) => {
    try {
        res.send({ status: "OK", data: getAllServersDB() });
    } catch (error) {
        res.status((error as ErrorIn)?.status || 500).send({
            status: "FAILED",
            data: { error: error instanceof Error ? error?.message : error },
        });
    }
};

export const getServer = (req: Request, res: Response) => {
    const {
        params: { serverId },
    } = req;
    if (!serverId) {
        res.status(400).send({
            status: "FAILED",
            error: "Parameter ':serverId' can not be empty",
        });
    }
    try {
        const server = getServerDB(serverId);
        res.send({ status: "OK", data: server });
    } catch (error) {
        res.status(404).send({
            status: "FAILED",
            message: (error as Error).message,
        });
    }
};

export const createServer = (req: Request, res: Response) => {
    res.send("create One servers");
};
export const updateServer = (req: Request, res: Response) => {
    res.send("update One servers");
};

export const deleteServer = (req: Request, res: Response) => {
    res.send("delte One servers");
};
