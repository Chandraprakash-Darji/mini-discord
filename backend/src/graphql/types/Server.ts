import { Types } from "mongoose";
import { extendType, nonNull, objectType, stringArg } from "nexus";
import serverModal from "../../models/ServerSchema";
import userModal from "../../models/UserSchema";

export const Server = objectType({
    name: "Server",
    definition(t) {
        t.nonNull.string("_id");
        t.nonNull.string("admin");
        t.string("icon");
        t.string("gif");
        t.nonNull.string("name");
        t.nonNull.string("createdAt");
        t.nonNull.list.nonNull.field("channels", {
            type: "Channels",
        });
        t.nonNull.list.nonNull.field("category", {
            type: "Category",
        });
        t.nonNull.list.nonNull.field("members", {
            type: "User",
            async resolve(parent) {
                const server = await serverModal.findById(parent._id);

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
                    _id: m._id.toString(),
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
                icon: stringArg(),
                gif: stringArg(),
            },
            async resolve(_, args, ctx) {
                const { userId } = ctx;

                if (!userId) {
                    throw new Error("Cannot add Server without logging in.");
                }

                const { name, gif, icon } = args;

                const server = new serverModal({
                    name,
                    admin: userId,
                    icon: icon || "",
                    gif: gif || "",
                    members: [userId],
                });
                const res = await server.save();

                await userModal.findByIdAndUpdate(userId, {
                    $push: { servers: { id: res._id, mode: "c" } },
                });

                return {
                    ...res.toObject(),
                    _id: res._id.toString(),
                };
            },
        });
        t.nonNull.field("delServer", {
            type: "Boolean",
            args: {
                serverId: nonNull(stringArg()),
            },
            async resolve(_, args, ctx) {
                const { userId } = ctx;

                if (!userId) {
                    throw new Error("Cannot delete server without logging in.");
                }

                const { serverId } = args;

                const server = await serverModal.findById(serverId);

                if (!server) throw new Error("Server not found");

                if (server?.admin !== userId) throw new Error("Not Authorized");

                server.members.forEach((mem) => {
                    userModal.findByIdAndUpdate(mem, {
                        $pull: { servers: { _id: serverId } },
                    });
                });

                await serverModal.findByIdAndDelete(serverId);

                const res = await serverModal.findById(serverId);
                return res === null;
            },
        });
    },
});
