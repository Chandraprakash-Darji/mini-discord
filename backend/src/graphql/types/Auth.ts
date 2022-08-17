import { extendType, nonNull, objectType, stringArg } from "nexus";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModal from "../../models/UserSchema";
import { APP_SECRET } from "../../utils/auth";
import { UserInputError } from "apollo-server";

export const AuthPayload = objectType({
    name: "AuthPayload",
    definition(t) {
        t.nonNull.string("token");
        t.nonNull.field("user", {
            type: "User",
        });
    },
});

export const AuthMutation = extendType({
    type: "Mutation",
    definition(t) {
        t.nonNull.field("signup", {
            type: "AuthPayload",
            args: {
                username: nonNull(stringArg()),
                profileUrl: stringArg(),
                password: nonNull(stringArg()),
            },
            async resolve(_, args) {
                const { username, profileUrl, password } = args;

                const ifExist = await userModal.findOne({ username });
                if (ifExist) {
                    throw new UserInputError("User Exist");
                }

                const hashPassword = await bcrypt.hash(password, 10);

                const user = new userModal({
                    username,
                    profileUrl: profileUrl || "",
                    password: hashPassword,
                    online: true,
                });

                const res = await user.save();
                const token = jwt.sign({ userId: res._id }, APP_SECRET);
                return {
                    user: { ...res.toObject(), id: res._id.toString() },
                    token,
                };
            },
        });
        t.nonNull.field("login", {
            type: "AuthPayload",
            args: {
                username: nonNull(stringArg()),
                password: nonNull(stringArg()),
            },
            async resolve(_, { username, password }) {
                const user = await userModal.findOne({ username });
                if (!user) {
                    throw new UserInputError("No user found");
                }

                const valid = bcrypt.compare(password, user.password);
                if (!valid) {
                    throw new UserInputError("Wrong crendetials");
                }

                const token = jwt.sign({ userId: user.id }, APP_SECRET);

                return {
                    user: { ...user.toObject(), id: user._id.toString() },
                    token,
                };
            },
        });
    },
});
