import { model, Schema, Types } from "mongoose";

// For Channel
interface channelIn {
    _id: Types.ObjectId;
    name: string;
    typo: "voice" | "text";
}

const channelSchema = new Schema<channelIn>({
    name: {
        type: String,
        required: true,
    },
    typo: {
        type: String,
        enum: ["voice", "text"],
        required: true,
    },
});

// For Category
interface categoryIn {
    _id: Types.ObjectId;
    name: string;
    typo: "cateogary";
    channels: channelIn[];
}

const cateogarySchema = new Schema<categoryIn>({
    name: {
        type: String,
        required: true,
    },
    typo: {
        type: String,
        default: "cateogary",
    },
    channels: [channelSchema],
});

// For Server
interface ServerIn {
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

const ServerSchema = new Schema<ServerIn>({
    admin: {
        type: String,
        required: true,
    },
    icon: String,
    gif: String,
    name: {
        type: String,
        required: true,
    },
    channels: [channelSchema],
    category: [cateogarySchema],
    members: [String],
    createdAt: {
        type: String,
        default: new Date().toISOString(),
    },
});
const serverModal = model("Server", ServerSchema);
export default serverModal;
