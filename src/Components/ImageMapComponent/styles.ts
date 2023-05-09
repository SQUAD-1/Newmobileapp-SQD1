import styled, { keyframes } from "styled-components";
import theme from "../../styles/theme";

interface ImageMapProps {
	radiusRightTop?: string;
	radiusRightBottom?: string;
	borderTop?: string;
	alignItems?: string;
	showImage?: boolean;
}

export const ImageMapContainer = styled.section`
	width: calc(100%);
	height: 8rem;
	background-color: ${theme.colors.green["085"]};
	border-radius: 10px;
	display: flex;
	margin-top: 3rem;
`;

export const FileContainer = styled.section<ImageMapProps>`
	background-color: ${theme.colors.green[185]};
	width: 4rem;
	height: 4rem;
	border-radius: 50%;
	margin: auto 0 auto 1rem;
	cursor: pointer;
`;

export const downAndUpAnimation = keyframes`
        0% {
            opacity: 0;
            transform: scale(0);
        }
        
        100% {
            opacity: 1;
            transform: scale(1);
        }
        

`;

export const TypeFile = styled.section<ImageMapProps>`
	padding-left: 1.6rem;
	margin: auto 0;
	display: ${({ showImage }) => (showImage ? "flex" : "none")};
	position: absolute;
	animation: ${downAndUpAnimation} 500ms ease-in-out;
`;

export const Title = styled.h1`
	font-weight: 500;
	font-size: 1.6rem;
	line-height: 2.4rem;
	color: ${theme.colors.neutral.black};
	padding: 1.6rem;
	width: 15rem;
`;

export const ButtonActionContainer = styled.section`
	display: flex;
	flex-direction: column;
`;

export const ButtonAction = styled.section<ImageMapProps>`
	background-color: ${theme.colors.green[195]};
	margin-left: 10rem;
	width: 6rem;
	height: 4rem;
	display: flex;
	justify-content: flex-end;
	align-items: ${({ alignItems }) => alignItems || "start"};
	border-top-right-radius: ${({ radiusRightTop }) => radiusRightTop || "none"};
	border-bottom-right-radius: ${({ radiusRightBottom }) =>
		radiusRightBottom || "none"};
	border-top: ${({ borderTop }) => `1px solid ${borderTop}` || "none"};

	& > img {
		margin: auto;
		width: 1.5rem;
		height: 1.5rem;
	}
`;
