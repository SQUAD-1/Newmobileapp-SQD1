import styled from "styled-components";

export const RegisterContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100vw;
	height: fit-content;
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

export const PasswordText = styled.span``;

export const LeftImg = styled.img`
	position: absolute;
	margin-top: -5.5rem;
	left: 2.5rem;
`;

export const RightImg = styled.img`
	position: absolute;
	margin-top: -0.5rem;
	right: 3rem;
`;

export const InputImg = styled.div``;

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
  margin-top: 28px;
	padding: 12px;
	align-self: center;
	background-color: #8eca5f;
	margin-bottom: 12px;
	img {
		width: 16px;
		heigth: 16px;
	}
`;

export const FormInput = styled.input`
	display: flex;
	outline: none;
	heigth: 100%;
	width: 100%;
`;
export const InputArea = styled.fieldset`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	width: auto;
	height: 55px;
	border-radius: 4px;
	border: 1px solid #49454f;
	flex: none;
	order: 0;
	align-self: stretch;
	flex-grow: 0;
	padding-left: 10px;
	background-color: inherit;
	& > span {
		color: #b3261e;
		font-size: 1.2rem;
		font-weight: 400;
	}

	& > input {
		display: flex;
		align-items: center;
		padding-right: 4px;
		width: 100%;
		background-color: #f8fcf6;
		padding: 8px 4px;
		border-radius: 4px 4px 0px 0px;
		margin-bottom: 8px;
		font-size: 16px;
		color: #1c1b1fb2;
		font-weight: 400;
	}
`;
