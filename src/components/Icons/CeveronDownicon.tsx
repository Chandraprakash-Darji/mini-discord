import { SvgProps } from '../../data/serverinfo';

const CeveronDownicon = ({ size }: SvgProps) => {
    const sizeIcon = size ? size : 24;
    return (
        <span
            style={{ width: sizeIcon }}
            className="justify-center items-center flex aspect-square"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
                <path
                    fill="currentColor"
                    d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
                ></path>
            </svg>
        </span>
    );
};

export default CeveronDownicon;
