import React from 'react';

type CalledMobileProps = {
	color?: string;
	callNumber?: string;
	callDescription?: string;
	callDate?: string;
	callStatus?: string;
	updated?: boolean;
};

type IconsProps = {
	width?: string;
	height?: string;
	color?: string;
};

type OptionMenuStyleProps = {
	isClicked?: boolean;
};

type OptionMenuProps = {
	name: string;
	path: string;
	alt: string;
	iconUnselect: string;
	iconSelect: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	isSelected?: boolean;
};

export type {
	CalledMobileProps,
	IconsProps,
	OptionMenuStyleProps,
	OptionMenuProps,
};
