import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
`;

export const ImgBackIcon = styled.img`
	width: 24px;
	height: 24px;
	margin-top: 2px;
`;

export const ImgBackIconRed = styled.img`
	width: 24px;
	height: 28px;
	margin-top: 2px;
	margin-right: -4px;
`;

interface BackButtonProps {
	actionText?: string;
	color?: string;
	fontWeight?: string;
}

export const TextBack = styled.span<BackButtonProps>`
	font-family: "Inter";
	font-style: normal;
	font-weight: ${({ fontWeight }) => fontWeight || 500};
	font-size: 1.6rem;
	display: flex;
	line-height: 36px;
	align-items: center;
	letter-spacing: 0.01em;
	color: ${({ color }) => color || "#000000"};
`;
