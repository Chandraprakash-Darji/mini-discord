import { getAllServersDB, getServerDB } from "../database/serverListDatabase";

export const getAllServersServices = () => {
    try {
        return getAllServersDB();
    } catch (error) {
        throw error;
    }
};

export const getServerService = (serverId: string) => {
    try {
        return getServerDB(serverId);
    } catch (error) {
        throw error;
    }
};
