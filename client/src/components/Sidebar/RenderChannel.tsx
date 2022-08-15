import { channelIn, folderServerIn } from '../../types';
import CeveronDownicon from '../Icons/CeveronDownicon';
import GearIcon from '../Icons/GearIcon';
import HashIcon from '../Icons/HashIcon';
import IconBtn from '../Icons/IconBtn';
import PersonPlusIcon from '../Icons/PersonPlusIcon';
import PlusIcon from '../Icons/plusIcon';
import VoiceIcon from '../Icons/VoiceIcon';

interface Props {
    channels: Array<channelIn | folderServerIn>;
}

const RenderChannel = ({ channels }: Props) => {
    return (
        <div className="flex flex-col text-grayText">
            {channels.map((channel) => {
                if (channel.type === 'text')
                    return (
                        <div
                            className={`flex gap-2 w-full p-[5px] px-2 hover:bg-white/5 rounded-md items-center hover:text-text/80  group after:w-1 after:bg-white after:absolute after:-left-0  after:rounded-r-full  ${
                                channel.unread ? 'after:h-2 text-text' : 'after:h-0'
                            } `}
                            key={channel.id}
                        >
                            <span className="text-xl text-grayText">
                                <HashIcon />
                            </span>
                            <span className="mr-auto overflow-hidden whitespace-nowrap text-ellipsis">
                                {channel.label}
                            </span>
                            <div className="hidden group-hover:opacity-100 group-hover:flex gap-1">
                                <PersonPlusIcon />
                                <IconBtn size={16}>
                                    <GearIcon />
                                </IconBtn>
                            </div>
                        </div>
                    );
                if (channel.type === 'voice')
                    return (
                        <div
                            className={`flex gap-2 w-full p-[5px] px-2 hover:bg-white/5 rounded-md items-center hover:text-text/80 group`}
                            key={channel.id}
                        >
                            <span className="text-xl text-grayText">
                                <VoiceIcon />
                            </span>
                            <span className="mr-auto overflow-hidden whitespace-nowrap text-ellipsis">
                                {channel.label}
                            </span>
                            <div className="hidden group-hover:opacity-100 group-hover:flex gap-1">
                                <PersonPlusIcon />
                                <IconBtn size={16}>
                                    <GearIcon />
                                </IconBtn>
                            </div>
                        </div>
                    );
                if (channel.type === 'cateogary')
                    return (
                        <div
                            key={channel.id}
                            className="flex flex-col w-full rounded-md justify-center py-1"
                        >
                            <span className="flex p-1 text-sm items-center overflow-hidden whitespace-nowrap text-ellipsis">
                                <IconBtn size={18}>
                                    <CeveronDownicon />
                                </IconBtn>
                                <span className="mr-auto">{channel.label.toUpperCase()}</span>
                                <IconBtn>
                                    <PlusIcon />
                                </IconBtn>
                            </span>
                            <div className="pl-2">
                                <RenderChannel
                                    channels={channel.channels.slice().sort((prev, now) => {
                                        if (prev.type === 'text') return -1;
                                        return 1;
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
