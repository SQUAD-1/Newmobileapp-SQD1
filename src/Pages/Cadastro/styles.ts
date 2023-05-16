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
	justify-content: center;
	border-radius: 100px;
	height: 40px;
	width: 265px;
	gap: 8px;
	align-self: center;
  background-color: red;
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
width:  auto;
height: 55px;
border-radius: 4px;
border: 1px solid #49454f;
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
padding-left: 10px;
background-color: none;
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
