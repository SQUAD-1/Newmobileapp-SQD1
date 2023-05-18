import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	width: 100%;
	gap: 10px;
	align-items: center;
	margin-bottom: 3.5rem;
`;

export const ImgBackIcon = styled.img`
	width: 11px;
	height: 15px;
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
	font-size: 2rem;
	display: flex;
	align-items: center;
	letter-spacing: 0.01em;
	color: ${({ color }) => color || "#000000"};
`;
