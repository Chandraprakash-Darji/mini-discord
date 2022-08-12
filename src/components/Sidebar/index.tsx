interface Props {
    server: string | null;
    channel: string | null;
}
const SideBar = ({ server, channel }: Props) => {
    if (!server && !channel)
        return (
            <div id="sidebar" className="h-screen w-60 bg-[#ffffff11] overflow-auto">
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
    else
        return (
            <div id="sidebar" className="h-screen w-60 bg-[#ffffff11]">
                Op
            </div>
        );
};

export default SideBar;
