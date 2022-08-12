import { useState } from 'react';
import { serverInfo } from '../../data';
import DiscordIcon from '../Icons/DiscordIcon';
import PlusIcon from '../Icons/plusIcon';
import NavBtn from './NavBtn';
import RenderServerList from './RenderServerList';

const Navigation = () => {
    const [serverlist, setServerlist] = useState(serverInfo);
    return (
        <div
            id="nav"
            className="w-[72px] bg-[#ffffff02] flex flex-col items-center py-1 h-screen overflow-y-auto"
        >
            <nav className="w-full flex flex-col items-center gap-2 py-2">
                {/* DiscordIcon */}
                <NavBtn
                    icon={<DiscordIcon />}
                    label="Home"
                    unread={serverlist.me.unread}
                    id={serverlist.me.id}
                />
                {/* Divider */}
                <hr className="w-8 border-white/25 mx-auto my-1" />
                {/* Servers */}
                <RenderServerList servers={serverlist.servers} />
                {/* Divider */}
                {serverlist.servers.length > 0 && (
                    <hr className="w-8 border-white/25 mx-auto my-1" />
                )}
                {/* Create Server */}
                <NavBtn
                    icon={<PlusIcon />}
                    label="Add a Server"
                    secondary
                    unread={false}
                    id={null}
                />
            </nav>
        </div>
    );
};

export default Navigation;
