interface CalledMobileProps {
    color?: string;
    callNumber?: string;
    callDescription?: string;
    callDate?: string;
    callStatus?: string;
    updated?: boolean;
}

type IconsProps = {
    width?: string;
    height?: string;
    color?: string;
};

interface ContainerMenuProps {
    isClicked?: boolean;
}

export type { CalledMobileProps, IconsProps, ContainerMenuProps };
