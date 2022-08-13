export interface ServerIn {
    id: string;
    label: string;
    unread: boolean;
    type: 'server';
    icon: string | null;
    gif: string | null;
}

export interface FolderIn {
    type: 'folder';
    id: string;
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
            id: '1',
            label: 'Detaux',
            unread: true,
            type: 'server',
            icon: '/server-icons/detaux.webp',
            gif: null,
        },
        {
            id: '2',
            label: 'markitUp',
            unread: false,
            type: 'server',
            icon: '/server-icons/markitUp.webp',
            gif: null,
        },
        {
            id: '3',
            label: 'Multiverse',
            unread: false,
            type: 'server',
            icon: '/server-icons/multiverse.webp',
            gif: '/server-icons/multiverse.gif',
        },
        {
            id: '4',
            label: 'MLH',
            unread: true,
            type: 'server',
            icon: '/server-icons/mlh.webp',
            gif: null,
        },
        {
            type: 'folder',
            id: '7',
            servers: [
                {
                    id: '5',
                    label: 'freeCodeCamp',
                    unread: true,
                    type: 'server',
                    icon: '/server-icons/freeCodeCamp.webp',
                    gif: null,
                },
                {
                    id: '6',
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

interface channelIn {
    type: string;
    id: string;
    label: string;
    unread: boolean;
}
interface folderServerIn {
    id: string;
    type: 'text' | 'voice' | 'folder';
    label: string;
    channels: channelIn[];
}

export interface ServerChannelsIn {
    id: string;
    label: string;
    unread: boolean;
    channels: Array<channelIn | folderServerIn>;
}

export const freeCodeCamp: ServerChannelsIn = {
    id: '5',
    label: 'freeCodeCamp',
    unread: true,
    channels: [
        {
            type: 'voice',
            id: '1',
            label: 'Total Member: 12',
            unread: true,
        },
        {
            type: 'folder',
            id: '2',
            label: 'Information',
            channels: [
                {
                    type: 'text',
                    id: '1',
                    label: 'welcome',
                    unread: false,
                },
                {
                    type: 'text',
                    id: '1',
                    label: 'leave',
                    unread: true,
                },
                {
                    type: 'voice',
                    id: '1',
                    label: 'rules',
                    unread: false,
                },
            ],
        },
    ],
};
