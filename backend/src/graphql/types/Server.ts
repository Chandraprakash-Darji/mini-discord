import { Types } from "mongoose";
import { extendType, nonNull, objectType, stringArg } from "nexus";
import serverModal from "../../models/ServerSchema";
import userModal from "../../models/UserSchema";

export const Server = objectType({
    name: "Server",
    definition(t) {
        t.nonNull.string("id");
        t.nonNull.string("admin");
        t.string("icon");
        t.string("gif");
        t.nonNull.string("name");
        t.nonNull.string("createdAt");
        // t.nonNull.list.nonNull.string("channels");
        // t.nonNull.list.nonNull.string("cateogary");
        t.nonNull.list.nonNull.field("members", {
            type: "User",
            async resolve(parent) {
                const server = await serverModal.findById(parent.id);

                if (!server) throw new Error("Server not found");

                const members = await userModal
                    .find({
                        _id: {
                            $in: server.members.map(
                                (mem) => new Types.ObjectId(mem)
                            ),
                        },
                    })
                    .lean();
                return members.map((m) => ({
                    ...m,
                    id: m._id.toString(),
                }));
            },
        });
    },
});

export const ServerMutation = extendType({
    type: "Mutation",
    definition(t) {
        t.nonNull.field("addServer", {
            type: "Server",
            args: {
                name: nonNull(stringArg()),
                userId: nonNull(stringArg()),
                icon: stringArg(),
                gif: stringArg(),
            },
            async resolve(_, args) {
                const { name, gif, userId, icon } = args;

                const server = new serverModal({
                    name,
                    admin: userId,
                    icon: icon || "",
                    gif: gif || "",
                    createdAt: new Date().toISOString(),
                    members: [userId],
                });
                const res = await server.save();

                await userModal.findByIdAndUpdate(userId, {
                    $push: { c_servers: res._id, j_servers: res._id },
                });

                return {
                    ...res.toObject(),
                    id: res._id.toString(),
                };
            },
        });
        t.nonNull.field("delServer", {
            type: "Boolean",
            args: {
                userId: nonNull(stringArg()),
                serverId: nonNull(stringArg()),
            },
            async resolve(_, args) {
                const { userId, serverId } = args;

                const server = await serverModal.findById(serverId);

                if (!server) throw new Error("Server not found");

                if (server?.admin !== userId) throw new Error("Not Authorized");

                await serverModal.findByIdAndDelete(serverId);
                const res = await serverModal.findById(serverId);
                return res === null;
            },
        });
    },
});
