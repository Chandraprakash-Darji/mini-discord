import { ReactElement, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ServerContext } from '../App';

type Props = {
    icon: ReactElement | string | null;
    secondary?: boolean;
    gif?: string | null;
    label: string;
    unread: boolean;
    id: string | '@me' | null;
};

const Btn = ({ icon, label, secondary, unread, gif, id }: Props) => {
    const server = useContext(ServerContext);
    const imgref = useRef<HTMLImageElement>(null);
    // TO set the gif image to the Icon
    const handleMouseOver = () => {
        if (!imgref.current || !gif) return;
        if (imgref.current.getAttribute('src') === gif) return;
        if (gif) imgref.current.src = gif;
    };
    const handleMouseOut = () => {
        if (!imgref.current) return;
        if (imgref.current.getAttribute('src') === icon) return;
        if (typeof icon === 'string') imgref.current.src = icon;
    };
    return (
        <div
            className={`w-12 aspect-square flex justify-center items-center rounded-[1.5rem] mb-0 hover:rounded-2xl cursor-pointer transition-all ease-out relative after:w-1 after:absolute after:bg-white after:top-1/2 after:-translate-y-1/2 after:-left-3 after:rounded-r-full hover:after:h-5 after:transition-all after:ease-out ${
                typeof icon !== 'string'
                    ? secondary
                        ? 'hover:bg-green-700 text-green-600 hover:text-white bg-white/10'
                        : 'hover:bg-violet-800 bg-white/10'
                    : ''
            } ${unread ? 'after:h-2' : 'after:h-0'} group ${
                server === id && 'after:h-9 hover:after:h-9'
            }`}
        >
            {/* If icon the display Icon */}
            {typeof icon !== 'string' && icon}
            {/* If it is not text then show label with first character on Basis of Name of Server */}
            {!icon && (
                <span className="text-white font-bold  text-lg">
                    {label.split(' ').map((c) => c[0])}
                </span>
            )}
            {/* If it is Image then then display image */}
            {typeof icon === 'string' && (
                <img
                    src={icon}
                    alt={label}
                    className="w-full h-full rounded-[1.5rem] hover:rounded-2xl transition-all ease-out"
                    ref={imgref}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    onFocus={handleMouseOver}
                    onBlur={handleMouseOut}
                />
            )}
            <div className="absolute left-[calc(100%_+_1.2rem)] w-max bg-bgDark p-2 rounded-lg shadow-lg shadow-black/10 scale-0 group-hover:scale-100 font-bold text-sm after:absolute after:border-[.3rem] after:w-0 after:h-0 after:border-r-bgDark after:border-transparent after:right-full after:top-1/2 after:-translate-y-1/2 text-white z-50 transition-all origin-left">
                {label}
            </div>
        </div>
    );
};

const NavBtn = (props: Props) => {
    if (props.id === null) return <Btn {...props} />;
    else
        return (
            <Link to={`/${props.id}`} className="active:translate-y-[.1rem]">
                <Btn {...props} />
            </Link>
        );
};

export default NavBtn;
