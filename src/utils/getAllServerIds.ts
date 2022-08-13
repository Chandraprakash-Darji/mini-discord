import { serverInfo, serverListIn } from '../data/serverinfo';

export const useServerIds = () => {
    const getAllServerIds = ({ servers }: serverListIn): string[] => {
        let lst: string[] = [];

        servers.forEach((server) => {
            if (server.type === 'folder')
                lst = [...lst, ...getAllServerIds({ servers: server.servers })];
            else lst.push(server.id);
        });

        return lst;
    };
    const allServerID = [...getAllServerIds(serverInfo), '@me'];
    return { allServerID };
};
