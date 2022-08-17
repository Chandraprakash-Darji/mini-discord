import { Request } from "express";
import { decodeAuthHeader } from "../utils/auth";

export interface Context {
    userId?: string; // Context type
}

export const context = ({ req }: { req: Request }): Context => {
    // Geting token if it exist
    const token =
        req && req.headers.authorization
            ? decodeAuthHeader(req.headers.authorization)
            : null;

    return {
        userId: token?.userId,
    };
};
