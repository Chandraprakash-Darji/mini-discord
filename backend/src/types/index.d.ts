import { Types } from "mongoose";

//* For Channel
export interface channelIn {
    _id: Types.ObjectId;
    name: string;
    typo: "voice" | "text";
}

//* For Category
export interface categoryIn {
    _id: Types.ObjectId;
    name: string;
    typo: "cateogary";
    channels: channelIn[];
}

//* For Server
export interface ServerIn {
    _id: Types.ObjectId;
    admin: string;
    name: string;
    icon: string;
    gif: string;
    channels: Types.DocumentArray<channelIn>;
    category: Types.DocumentArray<categoryIn>;
    members: string[];
    createdAt: string;
}

//* User interface
export interface UserIn {
    username: string;
    password: string;
    profileUrl?: string;
    createdAt: string;
    servers: [
        {
            id: string;
            mode: string;
        }
    ];
    online: boolean;
}