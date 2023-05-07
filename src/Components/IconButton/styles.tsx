import styled from "styled-components";
import { IconButtonProps } from "../../Assets";

const IconButtonWrapper = styled.div``;

const CustomButton = styled.button<IconButtonProps>`
	width: ${(props) => props.width ?? "2.5rem"};
	height: ${(props) => props.height ?? "2.5rem"};
	color: ${(props) => props.color ?? "#fff"};
	background-color: transparent;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	&:hover {
		transform: scale(1.1);
		color: ${(props) => (props.onHover ? "#fff" : "#fff")};
	}
`;

export { IconButtonWrapper, CustomButton };
