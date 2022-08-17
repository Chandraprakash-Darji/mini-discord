import { model, Schema } from "mongoose";

// User interface
interface UserIn {
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
