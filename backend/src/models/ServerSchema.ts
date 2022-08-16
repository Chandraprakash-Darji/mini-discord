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
        type: Schema.Types.ObjectId,
        ref: "users",
    },
    icon: String,
    gif: String,
    name: String,
    channels: [channelSchema],
    cateogary: [cateogarySchema],
    members: [String],
    createdAt: String,
});

export default model("Server", ServerSchema);
