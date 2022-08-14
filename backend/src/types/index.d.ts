import { JwtPayload } from "jsonwebtoken";

export interface ErrorIn extends Error {
    status: number;
}

declare global {
    namespace Express {
        interface Request {
            user?: string | JwtPayload;
        }
    }
}
