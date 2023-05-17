import React from "react";

type IssueMobileProps = {
	id: string;
	description: string;
	date: string;
	status: string;
	isUpdated: boolean;
	color?: string;
  borderColor?: string;
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

type IconButtonProps = {
	icon?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	color?: string;
	width?: string;
	height?: string;
	onHover?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

type BoxEmptyProps = {
	title?: string;
	icon?: string;
	alt?: string;
	color?: string;
};

export type {
	IssueMobileProps,
	IconsProps,
	OptionMenuStyleProps,
	OptionMenuProps,
	IconButtonProps,
	BoxEmptyProps,
};
