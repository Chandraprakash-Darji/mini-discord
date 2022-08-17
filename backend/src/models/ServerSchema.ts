import { model, Schema } from "mongoose";

const channelSchema = new Schema({
    name: String,
    type: String, // voice | text
    createdAt: String,
});

const cateogarySchema = new Schema({
    name: String,
    type: String, // cateogary
    channels: [channelSchema],
    createdAt: String,
});

const ServerSchema = new Schema({
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
    // channels: [channelSchema],
    // cateogary: [cateogarySchema],
    members: [String],
    createdAt: {
        type: String,
        required: true,
    },
});
const serverModal = model("Server", ServerSchema);
export default serverModal;
