import { useEffect, useState } from 'react';
import { freeCodeCamp, ServerChannelsIn } from '../../data/serverinfo';
import { useServerIds } from '../../utils/getAllServerIds';
import DiscordIcon from '../Icons/DiscordIcon';
import RenderChannel from './RenderChannel';
import Skelaton from './Skelaton';

interface Props {
    server: string;
    channel: string;
}
const SideBar = ({ server, channel }: Props) => {
    const { allServerID } = useServerIds();
    const [serverData, setServerData] = useState<ServerChannelsIn | null>(null);
    const [showScrollBar, setShowScrollBar] = useState(false);

    let isPresent = allServerID.filter((ser) => ser === server).length > 0;
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        if (!isLoading) setIsLoading(true);
        setTimeout(() => {
            if (freeCodeCamp.id === server) {
                setServerData(freeCodeCamp);
                setIsLoading(false);
            } else {
                setIsLoading(false);
                setServerData(null);
            }
        }, 0);
    }, [server]);

    if ((!server && !channel) || !isPresent)
        return (
            <div id="sidebar" className="h-screen w-60 bg-[#ffffff11] overflow-hidden">
                <Skelaton />
            </div>
        );
    if (isLoading)
        return (
            <div className="h-screen w-60 bg-[#ffffff11] aspect-square flex justify-center items-center">
                <div className="relative">
                    <div className="w-10 absolute aspect-square border-4 border-bgDark rounded-full left-0 top-0 " />
                    <div className="animate-spin w-10 aspect-square border-4 border-transparent border-l-white rounded-full" />
                </div>
            </div>
        );
    if (serverData)
        return (
            <div
                id="sidebar"
                className={`h-screen w-60 bg-[#ffffff11] font-bold text-sm ${
                    showScrollBar ? 'overflow-y-auto' : 'overflow-y-hidden  pr-[0.4rem]'
                } overflow-x-hidden`}
                onMouseOver={() => setShowScrollBar(true)}
                onMouseOut={() => setShowScrollBar(false)}
            >
                <div className="w-full">
                    <div className="h-14 flex justify-between items-center gap-3 p-3">
                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis ">
                            {serverData.label}
                        </span>
                        <DiscordIcon />
                    </div>
                    <div className="h-1 bg-bgDark" />
                    <div className="pt-3 p-1">
                        <RenderChannel channels={serverData.channels} />
                    </div>
                </div>
            </div>
        );
    return (
        <div
            id="sidebar"
            className="h-screen w-60 bg-[#ffffff11] font-bold overflow-hidden flex justify-center pt-10"
        >
            Something Went Wrong
        </div>
    );
};

export default SideBar;
