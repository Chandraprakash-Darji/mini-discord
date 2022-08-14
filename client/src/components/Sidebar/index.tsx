import { useEffect, useState } from 'react';
import { freeCodeCamp, ServerChannelsIn } from '../../data/serverinfo';
import { useServerIds } from '../../utils/getAllServerIds';
import CeveronDownicon from '../Icons/CeveronDownicon';
import IconBtn from '../Icons/IconBtn';
import Loader from '../LogicLeass/Loader';
import RenderChannel from './RenderChannel';
import Skelaton from './Skelaton';
import UserProfile from './UserProfile';
interface Props {
    server: string;
    channel: string;
}
const SideBar = ({ server, channel }: Props) => {
    const { allServerID } = useServerIds();
    const [serverData, setServerData] = useState<ServerChannelsIn | null>(null);

    let isPresent = allServerID.filter((ser) => ser === server).length > 0;
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        if (!isLoading) setIsLoading(true);
        setTimeout(() => {
            if (freeCodeCamp.id === server) {
                setServerData(freeCodeCamp);
            } else {
                setServerData(null);
            }
            setIsLoading(false);
        }, 500);
    }, [server]);

    if ((!server && !channel) || !isPresent)
        return (
            <div id="sidebar" className="h-screen w-60 bg-[#ffffff11] font-bold text-sm">
                <div className="h-[calc(100vh-52px)] z-0 overflow-hidden">
                    <Skelaton />
                </div>
                <UserProfile />
            </div>
        );
    if (isLoading)
        return (
            <div className="h-screen w-60 bg-[#ffffff11] font-bold text-sm ">
                <div className="relative h-[calc(100vh-52px)] w-full flex justify-center">
                    <Loader />
                </div>
                <UserProfile />
            </div>
        );
    if (serverData)
        return (
            <div id="sidebar" className="h-screen w-60 bg-[#ffffff11] font-bold text-sm ">
                <div className="w-full">
                    <div className="h-12 flex justify-between items-center gap-3 p-3">
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis ">
                            {serverData.label}
                        </span>
                        <IconBtn size={28}>
                            <CeveronDownicon />
                        </IconBtn>
                    </div>
                    <div className="h-[.1rem] bg-bgDark" />
                    <div className="channels py-3 p-1 h-[calc(100vh-48px-52px)] overflow-y-scroll overflow-x-hidden relative">
                        <RenderChannel channels={serverData.channels} />
                    </div>
                    <UserProfile />
                </div>
            </div>
        );
    return (
        <div id="sidebar" className="h-screen w-60 bg-[#ffffff11] font-bold text-sm ">
            <div className="h-[calc(100vh-52px)] text-center pt-16 text-lg">Something Went Wrong</div>
            <UserProfile />
        </div>
    );
};

export default SideBar;
