import { model, Schema } from "mongoose";

const UserSchema = new Schema({
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
        required: true,
    },
    j_servers: [String],
    c_servers: [String],
    online: {
        type: Boolean,
        required: true,
    },
});
const userModal = model("User", UserSchema);
export default userModal;
