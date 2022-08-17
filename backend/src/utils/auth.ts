import jwt from "jsonwebtoken";

export const APP_SECRET = "ChandraprakashIsAw3some";

export interface AuthTokenPayload {
    userId: string;
}

export function decodeAuthHeader(authHeader: String): AuthTokenPayload {
    // parse payload from auth header
    const token = authHeader.replace("Bearer ", "");

    // If token doesn't exist
    if (!token) {
        throw new Error("No token found");
    }
    // Verify the jwt token
    return jwt.verify(token, APP_SECRET) as AuthTokenPayload; 
}
