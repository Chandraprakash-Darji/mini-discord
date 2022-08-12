import { serverListIn } from '../data/serverinfo';

export const getAllServerIds = ({ servers }: serverListIn): number[] => {
    let lst: number[] = [];

    servers.forEach((server) => {
        if (server.type === 'folder')
            lst = [...lst, ...getAllServerIds({ servers: server.servers })];
        else lst.push(server.id);
    });

    return lst;
};
