import DiscordIcon from '../Icons/DiscordIcon';
import PlusIcon from '../Icons/plusIcon';
import Loader from '../LogicLeass/Loader';
import NavBtn from './NavBtn';
import RenderServerList from './RenderServerList';
import { useGetServersQuery } from '../../services/DcMini';

const Navigation = () => {
    const { data: serverlist, error, isFetching } = useGetServersQuery();
    if (isFetching)
        return (
            <div id="nav" className="w-[72px] bg-[#ffffff02] flex flex-col items-center h-screen">
                <Loader />
            </div>
        );

    if (serverlist)
        return (
            <div id="nav" className="w-[72px] bg-[#ffffff02] flex flex-col items-center h-screen">
                <nav className="flex flex-col items-center gap-2 py-2 w-[72px]">
                    {/* DiscordIcon */}
                    <NavBtn
                        icon={<DiscordIcon />}
                        label="Home"
                        unread={serverlist?.me.unread}
                        id={serverlist?.me.id}
                    />
                    {/* Divider */}
                    <hr className="w-8 border-white/25 mx-auto my-1" />
                    {/* Servers */}
                    <RenderServerList servers={serverlist?.servers} />
                    {/* Divider */}
                    {serverlist?.servers.length > 0 && (
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
    return (
        <div id="nav" className="w-[72px] bg-[#ffffff02] flex flex-col items-center h-screen">
            {error && <div>Error</div>}
        </div>
    );
};

export default Navigation;
