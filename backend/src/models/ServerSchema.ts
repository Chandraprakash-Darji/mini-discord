import { model, Schema } from "mongoose";
import { categoryIn, channelIn, ServerIn } from "../types";

//* For channel
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

//* For Category
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

//* For Server
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
