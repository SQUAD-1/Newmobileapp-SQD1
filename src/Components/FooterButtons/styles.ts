import styled from "styled-components";

export const ButtonsContainer = styled.div`
display: flex;
justify-content: flex-end;
gap: 8px;
width: 100%;
height: 72px;
align-items: center;
border-top: 1px solid #cac4d0;
`;

export const BackButton = styled.button`
	display: flex;
	width: 86px;
	height: 40px;
	justify-content: center;
	align-items: center;
	border-radius: 100px;
	border: 1px solid #635f60;
	color: #635f60;
	background-color: #ffffff;
`;

export const NextButton = styled.button`
	display: flex;
	width: 101px;
	height: 40px;
	justify-content: center;
	align-items: center;
	border-radius: 100px;
	background-color: #7ac143;
	color: #ffffff;
`;
