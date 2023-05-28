import styled from "styled-components";

export const RecoverPasswordContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	padding: 1.25rem 3rem;
	gap: 1rem;
	background-color: #f8fcf6;
`;

export const HeaderText = styled.text`
	font-family: Inter;
	// margin-top: -20px;
	font-size: 16px;
	font-weight: 400px;
	line-height: 24px;
	letter-spacing: 0.01em;
	text-align: left;
	color: #4f5256;
`;

export const HeaderTitle = styled.text`
	font-family: "Inter";
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	color: #4f5256;
`;

export const HeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: fit-content;
	gap: 1rem;
	margin-bottom: 36px;
`;

export const ContainerButton = styled.div`
	display: flex;
	gap: 0 1rem;
	padding: 2.6rem 0 1.6rem;
	justify-content: end;
	position: absolute;
	bottom: 0;
	margin-right: 3rem;
	border-top: 1px solid #cac4d0;
	width: -webkit-fill-available;
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: fit-content;
	width: 100%;
	gap: 1rem;
	background-color: inherit;
	padding: 56px 0px 84px 0px;
`;
