import { SvgProps } from '../../data/serverinfo';

const PlusIcon = ({ size }: SvgProps) => {
    const sizeIcon = size ? size : 18;
    return (
        <span style={{ width: sizeIcon, aspectRatio: '1 / 1' }}>
            <svg aria-hidden="true" role="img" width="100%" height="100%" viewBox="0 0 18 18">
                <polygon
                    fill-rule="nonzero"
                    fill="currentColor"
                    points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"
                ></polygon>
            </svg>
        </span>
    );
};

export default PlusIcon;
