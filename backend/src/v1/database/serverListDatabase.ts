import DB from "./db.json";

export const getAllServersDB = () => {
    try {
        const allServerList = { me: DB.me, servers: DB.servers };
        return allServerList;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

export const getServerDB = (serverId: string) => {
    try {
        const server = DB.serverChannels.find(
            (server) => server.id === serverId
        );
        if (!server) {
            throw {
                status: 404,
                message: `Can't find Server with the id '${serverId}'`,
            };
        }
        return server;
    } catch (error) {
        throw error;
    }
};
