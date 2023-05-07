interface CalledMobileProps {
    color?: string;
    callNumber?: string;
    callDescription?: string;
    callDate?: string;
    callStatus?: string;
    updated?: boolean;
}

interface IconsProps {
    width?: string;
    height?: string;
    color?: string;
}

interface ContainerMenuProps {
    isClicked?: boolean;
    color?: string;
}

export type { CalledMobileProps, IconsProps, ContainerMenuProps };
