import styled from "styled-components";
import { Link } from "react-router-dom";
import { OptionMenuStyleProps } from "../../Assets";

type MenuNavigationBarProps = {
	backgroundColor?: string;
};

export const ContainerMenu = styled.div<MenuNavigationBarProps>`
	position: fixed;
	bottom: 0;
	width: 100%;
	padding: 0;
	background-color: ${({ backgroundColor }) => backgroundColor ?? "#f5f5f5"};
`;

export const MenuList = styled.div<OptionMenuStyleProps>`
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 1rem;
	background-color: ${({ backgroundColor }) => backgroundColor ?? "#f5f5f5"};
`;

export const OptionMenuStyle = styled.a<OptionMenuStyleProps>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	background-color: ${({ isClicked }) => isClicked};
`;

export const IconArea = styled.div<OptionMenuStyleProps>`
	display: flex;
	width: 64px;
	height: 32px;
	border-radius: 16px;
	align-items: center;
	justify-content: center;
	background-color: ${({ isClicked }) => isClicked};
`;

export const TextMenu = styled.p<OptionMenuStyleProps>`
	text-decoration: none;
	text-align: center;
	font-family: Inter;
	font-size: 12px;
	font-weight: 500;
	line-height: 16px;
	color: ${({ isClicked }) => isClicked};
	list-style: none;
`;

export const CustomLink = styled(Link)<OptionMenuStyleProps>`
	display: flex;
	align-items: center;
	flex-direction: column;
	flex-grow: 1;
	flex-basis: 100%;
	height: max-content;
	gap: 0.07rem;
	background-color: ${({ isClicked }) => isClicked};
`;

export const OptionContainer = styled.button<{ backgroundColor?: string }>`
	background-color: ${({ backgroundColor }) =>
		backgroundColor ?? "rgb(245, 245, 245)"};
	text-decoration: none;
`;
