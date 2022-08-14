import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.headers.authorization)
            throw new Error("No authorization header found");
        // get the token from the authorization header
        const token = req.headers.authorization.split(" ")[1];
        // check if the token matches the supposed origin
        const decodedToken = jwt.verify(token, "RANDOM-TOKEN");
        // retrieve the user details of the logged in user
        const user = decodedToken;
        // pass the the user down to the endpoints here
        req.user = user;
        // pass down functionality to the endpoint
        next();
    } catch (error) {
        res.status(401).json({
            error: new Error("Invalid request!"),
        });
    }
};
