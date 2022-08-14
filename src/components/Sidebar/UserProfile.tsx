import ClosedDefeanIcon from '../Icons/ClosedDefeanIcon';
import CloseMicIcon from '../Icons/CloseMicIcon';
import GearIcon from '../Icons/GearIcon';
import IconBtn from '../Icons/IconBtn';

const UserProfile = () => {
    return (
        <div className="h-[52px] flex gap-2 p-2 items-center justify-between bg-bgDark">
            <div className="flex gap-2 p-1 items-center justify-between hover:bg-white/10 rounded-lg group ">
                <figure className="h-8 aspect-square ">
                    <img
                        src="https://github.com/Chandraprakash-Darji.png"
                        alt=""
                        className="w-full  aspect-square"
                    />
                </figure>
                <div className="flex flex-col w-20 ">
                    <div>Chandra</div>
                    <div className="text-xs flex flex-col gap-2 relative overflow-hidden ">
                        <span className="transition-all duration-300 whitespace-nowrap overflow-hidden text-ellipsis w-full relative top-0 group-hover:-top-5">
                            You are not a drop in the ocean.you are the entire ocean in a drop.
                            #1163♡♡
                        </span>
                        <span className="transition-all duration-300 absolute top-5 group-hover:top-0">
                            #4132
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex gap-3 ">
                <IconBtn size={20}>
                    <CloseMicIcon />
                </IconBtn>
                <IconBtn size={20}>
                    <ClosedDefeanIcon />
                </IconBtn>
                <IconBtn size={20}>
                    <GearIcon />
                </IconBtn>
            </div>
        </div>
    );
};

export default UserProfile;
