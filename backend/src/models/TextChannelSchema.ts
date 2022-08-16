import { model, Schema } from "mongoose";

const messageSchema = new Schema({
    sender: {
        type: Schema.Types.ObjectId,
        ref: "users",
    },
    createdAt: String,
    body: String,
});

const TextSchema = new Schema({
    name: String,
    createdAt: String,
    messages: [messageSchema],
    users: [
        {
            type: Schema.Types.ObjectId,
            ref: "users",
        },
    ],
});

export default model("textChannel", TextSchema);
