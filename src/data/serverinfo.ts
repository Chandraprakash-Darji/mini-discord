export interface ServerIn {
    id: string;
    label: string;
    unread: false | number;
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
        unread: false | number;
        id: '@me';
    };
}

export const serverInfo: InfoIn = {
    me: {
        unread: 1,
        id: '@me',
    },
    servers: [
        {
            id: '1',
            label: 'Detaux',
            unread: 2,
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
            unread: 4,
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
                    unread: 2,
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

export interface channelIn {
    type: 'text' | 'voice';
    id: string;
    label: string;
    unread: false | number;
}
export interface folderServerIn {
    id: string;
    type: 'folder';
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
            unread: 3,
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
                    id: '2',
                    label: 'leave',
                    unread: 3,
                },
                {
                    type: 'voice',
                    id: '3',
                    label: 'rules',
                    unread: false,
                },
                {
                    type: 'text',
                    id: '4',
                    label: 'verify',
                    unread: false,
                },
                {
                    type: 'text',
                    id: '5',
                    label: 'information',
                    unread: false,
                },
                {
                    type: 'text',
                    id: '6',
                    label: 'faq',
                    unread: false,
                },
                {
                    type: 'text',
                    id: '7',
                    label: 'annoucment',
                    unread: false,
                },
                {
                    type: 'text',
                    id: '8',
                    label: 'permant-invitation-link',
                    unread: false,
                },
                {
                    type: 'text',
                    id: '9',
                    label: 'self-roles',
                    unread: false,
                },
            ],
        },
        {
            type: 'folder',
            id: '3',
            label: 'Events',
            channels: [
                {
                    type: 'text',
                    id: '1',
                    label: 'event-annoucements',
                    unread: false,
                },
                {
                    type: 'text',
                    id: '2',
                    label: 'giveaway',
                    unread: 3,
                },
            ],
        },
        {
            type: 'folder',
            id: '4',
            label: 'main',
            channels: [
                {
                    type: 'text',
                    id: '1',
                    label: 'general',
                    unread: false,
                },
                {
                    type: 'text',
                    id: '2',
                    label: 'discussions',
                    unread: false,
                },
                {
                    type: 'text',
                    id: '3',
                    label: 'media',
                    unread: false,
                },
                {
                    type: 'text',
                    id: '4',
                    label: 'introduction',
                    unread: false,
                },
            ],
        },
        {
            type: 'folder',
            id: '5',
            label: 'Dev discussions',
            channels: [
                {
                    type: 'text',
                    id: '1',
                    label: 'web-devlopment',
                    unread: false,
                },
                {
                    type: 'text',
                    id: '2',
                    label: 'bot-devlopment',
                    unread: false,
                },
                {
                    type: 'text',
                    id: '3',
                    label: 'apps-development',
                    unread: false,
                },
                {
                    type: 'text',
                    id: '4',
                    label: 'mod-development',
                    unread: false,
                },
            ],
        },
    ],
};
