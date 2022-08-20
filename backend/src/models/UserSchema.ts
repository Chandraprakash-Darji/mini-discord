import { model, Schema } from "mongoose";
import { UserIn } from "../types";

const UserSchema = new Schema<UserIn>({
    username: {
        type: String,
        unique: true,
        required: [true, "Username is required"],
        match: [/^[a-zA-Z0-9]+$/, "is invalid"],
        index: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    profileUrl: String,
    createdAt: {
        type: String,
        default: new Date().toISOString(),
    },
    servers: [
        {
            id: {
                type: String,
                required: true,
            },
            mode: {
                type: String,
                required: true,
            },
        },
    ],
    online: {
        type: Boolean,
        required: true,
    },
});
const userModal = model("User", UserSchema);
export default userModal;
