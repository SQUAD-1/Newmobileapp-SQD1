import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";
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
	$isClicked?: boolean;
};

type OptionMenuProps = {
	name: string;
	path: string;
	alt: string;
	iconUnselect: string;
	iconSelect: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	$isSelected?: boolean;
};

type IconButtonProps = {
	path?: string;
	alt?: string;
	icon: string | StaticImport;
	color?: string;
	width?: string;
	height?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
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
