import { channelIn, folderServerIn } from '../../data/serverinfo';
import PlusIcon from '../Icons/plusIcon';

interface Props {
    channels: Array<channelIn | folderServerIn>;
}

const RenderChannel = ({ channels }: Props) => {
    return (
        <div className="flex flex-col gap-1 text-grayText ">
            {channels.map((channel) => {
                if (channel.type === 'text')
                    return (
                        <div
                            className={`flex gap-2 w-full p-2 hover:bg-white/5 rounded-md items-center hover:text-text group `}
                            key={channel.id}
                        >
                            <span className="text-xl">#</span>
                            <span className="mr-auto">{channel.label}</span>
                            <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible flex">
                                <PlusIcon />
                                <PlusIcon />
                            </div>
                        </div>
                    );
                if (channel.type === 'voice')
                    return (
                        <div
                            className={`flex gap-2 w-full p-2 hover:bg-white/5 rounded-md items-center hover:text-text group`}
                            key={channel.id}
                        >
                            <span className="text-xl">#</span>
                            <span className="mr-auto overflow-hidden whitespace-nowrap text-ellipsis">
                                {channel.label}
                            </span>
                            <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible flex">
                                <PlusIcon />
                                <PlusIcon />
                            </div>
                        </div>
                    );
                if (channel.type === 'folder')
                    return (
                        <div
                            key={channel.id}
                            className="flex flex-col w-full rounded-md justify-center"
                        >
                            <span className="flex justify-between p-1 text-sm item-center">
                                <span>{channel.label.toUpperCase()}</span>
                                <PlusIcon />
                            </span>
                            <div className="pl-2">
                                <RenderChannel channels={channel.channels} />
                            </div>
                        </div>
                    );
            })}
        </div>
    );
};

export default RenderChannel;
