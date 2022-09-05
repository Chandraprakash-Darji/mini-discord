import { extendType, nonNull, objectType, stringArg } from "nexus";
import serverModal from "../../models/ServerSchema";

// For Channel
export const Channels = objectType({
    name: "Channels",
    definition(t) {
        t.nonNull.string("_id");
        t.nonNull.string("name");
        t.nonNull.string("typo");
    },
});

// For Category
export const Category = objectType({
    name: "Category",
    definition(t) {
        t.nonNull.string("_id");
        t.nonNull.string("name");
        t.nonNull.list.nonNull.field("channels", {
            type: "Channels",
        });
    },
});

export const channelMutation = extendType({
    type: "Mutation",
    definition(t) {
        t.nonNull.field("addChannel", {
            type: "Server",
            args: {
                name: nonNull(stringArg()),
                typo: nonNull(stringArg()),
                serverId: nonNull(stringArg()),
                categoryId: stringArg(),
            },
            async resolve(_, args, ctx) {
                const { userId } = ctx;

                if (!userId) {
                    throw new Error("Cannot add Channel without logging in.");
                }

                const { name, typo, serverId, categoryId } = args;

                const server = await serverModal.findById(serverId);

                if (!server) throw new Error("Server not found");

                if (categoryId) {
                    const ifCateogary = server.category.find(
                        (c) => c._id.toString() === categoryId
                    );

                    if (!ifCateogary) throw new Error("Cateogary not found");

                    await serverModal.findByIdAndUpdate(
                        serverId,
                        {
                            $push: {
                                category: {
                                    name,
                                    typo,
                                },
                            },
                        },
                        { new: true }
                    );
                }

                if (!categoryId) {
                    await serverModal.findByIdAndUpdate(
                        serverId,
                        { $push: { channels: { name, typo } } },
                        { new: true }
                    );
                }

                const res = {
                    ...server.toObject(),
                    _id: server._id.toString(),
                };
                console.log(res);
                return res;
            },
        });
    },
});
