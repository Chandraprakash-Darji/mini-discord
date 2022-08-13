import { channelIn, folderServerIn } from '../../data/serverinfo';
import HashLockIcon from '../Icons/HashLOckIcon';
import PlusIcon from '../Icons/plusIcon';
import VoiceIcon from '../Icons/VoiceIcon';

interface Props {
    channels: Array<channelIn | folderServerIn>;
}

const RenderChannel = ({ channels }: Props) => {
    return (
        <div className="flex flex-col text-grayText ">
            {channels.map((channel) => {
                if (channel.type === 'text')
                    return (
                        <div
                            className={`flex gap-2 w-full p-[5px] px-2 hover:bg-white/5 rounded-md items-center hover:text-text group `}
                            key={channel.id}
                        >
                            <span className="text-xl">
                                <HashLockIcon />
                            </span>
                            <span className="mr-auto overflow-hidden whitespace-nowrap text-ellipsis">
                                {channel.label}
                            </span>
                            <div className="hidden group-hover:opacity-100 group-hover:flex">
                                <PlusIcon />
                                <PlusIcon />
                            </div>
                        </div>
                    );
                if (channel.type === 'voice')
                    return (
                        <div
                            className={`flex gap-2 w-full p-[5px] px-2 hover:bg-white/5 rounded-md items-center hover:text-text group`}
                            key={channel.id}
                        >
                            <span className="text-xl">
                                <VoiceIcon />
                            </span>
                            <span className="mr-auto overflow-hidden whitespace-nowrap text-ellipsis">
                                {channel.label}
                            </span>
                            <div className="hidden group-hover:opacity-100 group-hover:flex">
                                <PlusIcon />
                                <PlusIcon />
                            </div>
                        </div>
                    );
                if (channel.type === 'folder')
                    return (
                        <div
                            key={channel.id}
                            className="flex flex-col w-full rounded-md justify-center py-1"
                        >
                            <span className="flex p-1 text-sm items-center overflow-hidden whitespace-nowrap text-ellipsis">
                                <PlusIcon />
                                <span className="mr-auto">{channel.label.toUpperCase()}</span>
                                <PlusIcon />
                            </span>
                            <div className="pl-2">
                                <RenderChannel
                                    channels={channel.channels.sort((prev, now) => {
                                        if (prev.type === 'text') return -1;
                                        if (prev.type === 'voice') return 1;
                                        return 0;
                                    })}
                                />
                            </div>
                        </div>
                    );
            })}
        </div>
    );
};

export default RenderChannel;
