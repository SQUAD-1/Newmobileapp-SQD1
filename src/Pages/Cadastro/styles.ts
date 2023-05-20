import styled from "styled-components";

export const RegisterContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100vw;
	height: 100vh;
	padding: 1.25rem 3rem;
	gap: 1.25rem;
	background-color: #f8fcf6;
`;

export const HeaderRegister = styled.text`
	font-family: Inter;
	margin-top: -20px;
	font-size: 16px;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: 0.01em;
	text-align: left;
	color: #000000;
`;

export const TitleInputArea = styled.text`
	font-family: Inter;
	font-style: normal;
	font-size: 16px;
	font-weight: 600;
	line-height: 24px;
	letter-spacing: 0.01em;
	text-align: left;
	color: #5a8f19;
`;

interface RegisterButtonProps {
	isInactive?: boolean;
}

export const RegisterButton = styled.button<RegisterButtonProps>`
	display: flex;
	align-items: center;
	color: #ffffff;
	justify-content: center;
	border-radius: 100px;
	height: 40px;
	width: 318px;
	gap: 8px;
	padding: 12px;
	align-self: center;
	background-color: #8eca5f;
	margin-bottom: 12px;
	img {
		width: 16px;
		height: 16px;
	}
`;
