import styled from "styled-components";
import { Link } from "react-router-dom";
import { OptionMenuStyleProps } from "../../Assets";

export const ContainerMenu = styled.div`
	position: fixed;
	bottom: 0px;
	width: 100%;
`;

export const MenuList = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 2rem 0 2rem;
	background-color: #f5f5f5;
`;

export const OptionMenuStyle = styled.a<OptionMenuStyleProps>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	background-color: ${({ isClicked }) =>
		isClicked === true ? "#7AC143" : "#F5F5F5"};
`;

export const IconArea = styled.div<OptionMenuStyleProps>`
	display: flex;
	width: 64px;
	height: 32px;
	border-radius: 16px;
	align-items: center;
	justify-content: center;
	background-color: ${({ isClicked }) => (isClicked ? "#7AC143" : "#F5F5F5")};
`;

export const TextMenu = styled.p<OptionMenuStyleProps>`
	text-decoration: none;
	text-align: center;
	font-family: Inter;
	font-size: 12px;
	font-weight: 500;
	line-height: 16px;
	color: ${({ isClicked }) => (isClicked ? "#7AC143" : "#252728")};
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
`;
