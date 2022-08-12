export interface ServerIn {
    id: number;
    label: string;
    unread: boolean;
    type: 'server';
    icon: string | null;
    gif: string | null;
}

export interface FolderIn {
    type: 'folder';
    id: number;
    servers: ServerIn[];
}
export interface serverListIn {
    servers: Array<ServerIn | FolderIn>;
}
export interface InfoIn extends serverListIn {
    me: {
        unread: boolean;
        id: '@me';
    };
}

export const serverInfo: InfoIn = {
    me: {
        unread: true,
        id: '@me',
    },
    servers: [
        {
            id: 1,
            label: 'Detaux',
            unread: true,
            type: 'server',
            icon: '/server-icons/detaux.webp',
            gif: null,
        },
        {
            id: 2,
            label: 'markitUp',
            unread: false,

            type: 'server',
            icon: '/server-icons/markitUp.webp',
            gif: null,
        },
        {
            id: 3,
            label: 'Multiverse',
            unread: false,

            type: 'server',
            icon: '/server-icons/multiverse.webp',
            gif: '/server-icons/multiverse.gif',
        },
        {
            id: 4,
            label: 'MLH',
            unread: true,

            type: 'server',
            icon: '/server-icons/mlh.webp',
            gif: null,
        },
        {
            type: 'folder',
            id: 7,
            servers: [
                {
                    id: 5,
                    label: 'freeCodeCamp',
                    unread: true,
                    type: 'server',
                    icon: '/server-icons/freeCodeCamp.webp',
                    gif: null,
                },
                {
                    id: 6,
                    label: 'ZeroToMastery',
                    type: 'server',
                    unread: false,
                    icon: null,
                    gif: null,
                },
            ],
        },
    ],
};
