import { Types } from "mongoose";
import { extendType, objectType } from "nexus";
import serverModal from "../../models/ServerSchema";
import userModal from "../../models/UserSchema";

export const User = objectType({
    name: "User",
    definition(t) {
        t.nonNull.string("id");
        t.nonNull.string("username");
        t.string("profileUrl");
        t.nonNull.string("createdAt");
        t.nonNull.string("password");
        t.nonNull.boolean("online");
        t.nonNull.list.nonNull.field("j_servers", {
            type: "Server",
            async resolve(parent) {
                const user = await userModal.findById(parent.id);

                if (!user) throw new Error("User not found");

                const servers = await serverModal
                    .find({
                        _id: {
                            $in: user.j_servers.map(
                                (server) => new Types.ObjectId(server)
                            ),
                        },
                    })
                    .lean();
                return servers.map((s) => ({
                    ...s,
                    id: s._id.toString(),
                }));
            },
        });
        t.nonNull.list.nonNull.field("c_servers", {
            type: "Server",
            async resolve(parent) {
                const user = await userModal.findById(parent.id);

                if (!user) throw new Error("User not found");

                const servers = await serverModal
                    .find({
                        _id: {
                            $in: user.c_servers.map(
                                (server) => new Types.ObjectId(server)
                            ),
                        },
                    })
                    .lean();
                return servers.map((s) => ({
                    ...s,
                    id: s._id.toString(),
                }));
            },
        });
    },
});

// export const UserQuery = extendType({
//     type: "Query",
//     definition(t) {
//         t.nonNull.list.nonNull.field("users", {
//             type: "User",
//             async resolve() {
//                 const res = await userModal.find().lean();
//                 return res.map((u) => ({
//                     ...u,
//                     id: u._id.toString(),
//                 }));
//             },
//         });
//     },
// });
