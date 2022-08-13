import { useEffect, useState } from 'react';
import { freeCodeCamp, ServerChannelsIn } from '../../data/serverinfo';
import { useServerIds } from '../../utils/getAllServerIds';
import DiscordIcon from '../Icons/DiscordIcon';
import RenderChannel from './RenderChannel';

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
        // if (!isLoading) setIsLoading(true);
        // setTimeout(() => {
        // if (freeCodeCamp.id === server) {
        setServerData(freeCodeCamp);
        // setIsLoading(false);
        // }
        // }, 0);
    }, [server]);

    if ((!server && !channel) || !isPresent)
        return (
            <div id="sidebar" className="h-screen w-60 bg-[#ffffff11] overflow-hidden">
                <div className="py-5 px-3 flex flex-col gap-4">
                    <div className="w-20 h-5 bg-white/10 rounded-lg " />
                    <div className="flex gap-3 pl-3">
                        <div className="w-5 rounded-full aspect-square bg-white/10" />
                        <div className="w-20 h-5  rounded-lg bg-white/10" />
                    </div>
                    <div className="flex gap-3 pl-3">
                        <div className="w-5 rounded-full aspect-square bg-white/10" />
                        <div className="w-32 h-5  rounded-lg bg-white/10" />
                    </div>
                    <div className="flex gap-3 pl-3">
                        <div className="w-5 rounded-full aspect-square bg-white/10" />
                        <div className="w-16 h-5  rounded-lg bg-white/10" />
                    </div>
                    <div className="flex gap-3 pl-3">
                        <div className="w-5 rounded-full aspect-square bg-white/10" />
                        <div className="w-36 h-5  rounded-lg bg-white/10" />
                    </div>
                    <div className="flex gap-3 pl-3">
                        <div className="w-5 rounded-full aspect-square bg-white/10" />
                        <div className="w-28 h-5  rounded-lg bg-white/10" />
                    </div>
                    <div className="flex gap-3 pl-3">
                        <div className="w-5 rounded-full aspect-square bg-white/10" />
                        <div className="w-24 h-5  rounded-lg bg-white/10" />
                    </div>
                </div>
                <div className="py-5 px-3 flex flex-col gap-4">
                    <div className="w-20 h-5 bg-white/10 rounded-lg " />
                    <div className="flex gap-3 pl-3">
                        <div className="w-5 rounded-full aspect-square bg-white/10" />
                        <div className="w-32 h-5  rounded-lg bg-white/10" />
                    </div>
                    <div className="flex gap-3 pl-3">
                        <div className="w-5 rounded-full aspect-square bg-white/10" />
                        <div className="w-28 h-5  rounded-lg bg-white/10" />
                    </div>
                    <div className="flex gap-3 pl-3">
                        <div className="w-5 rounded-full aspect-square bg-white/10" />
                        <div className="w-12 h-5  rounded-lg bg-white/10" />
                    </div>
                    <div className="flex gap-3 pl-3">
                        <div className="w-5 rounded-full aspect-square bg-white/10" />
                        <div className="w-16 h-5  rounded-lg bg-white/10" />
                    </div>
                    <div className="flex gap-3 pl-3">
                        <div className="w-5 rounded-full aspect-square bg-white/10" />
                        <div className="w-24 h-5  rounded-lg bg-white/10" />
                    </div>
                    <div className="flex gap-3 pl-3">
                        <div className="w-5 rounded-full aspect-square bg-white/10" />
                        <div className="w-20 h-5  rounded-lg bg-white/10" />
                    </div>
                </div>
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
                className="h-screen w-60 bg-[#ffffff11] font-bold text-sm overflow-y-auto overflow-x-hidden"
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
    return <>Something Went Wrong</>;
};

export default SideBar;
