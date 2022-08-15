// For Single Server in Serverlist
export interface ServerIn {
    id: string;
    label: string;
    unread: false | number;
    type: 'server';
    icon: string | null;
    gif: string | null;
}
// For Folder in ServerList
export interface FolderIn {
    type: 'folder';
    id: string;
    servers: ServerIn[];
}
// For Servers in ServerList
export interface serverListIn {
    servers: Array<ServerIn | FolderIn>;
}
// For ServerList
export interface InfoIn extends serverListIn {
    me: {
        unread: false | number;
        id: '@me';
    };
}

// For Channel in serverData
export interface channelIn {
    type: 'text' | 'voice';
    id: string;
    label: string;
    unread: false | number;
}
// For Category in serverData
export interface folderServerIn {
    id: string;
    type: 'cateogary';
    label: string;
    channels: channelIn[];
}
// For serverData
export interface ServerChannelsIn {
    id: string;
    label: string;
    unread: boolean;
    channels: Array<channelIn | folderServerIn>;
}

// For SVG Props
export interface SvgProps {
    size?: number;
    children: React.ReactNode;
}

// Login Response
export interface LoginRes {
    message: string;
    email: string;
    token: string;
}
