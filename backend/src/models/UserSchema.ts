import { model, Schema } from "mongoose";

const UserSchema = new Schema({
    username: String,
    port: Number,
    profileUrl: String,
    createdAt: String,
    Servers: [String],
    password: String,
    logs: { last_login: Date, last_password_reset: Date },
    online: Boolean,
});

export default model("User", UserSchema);
