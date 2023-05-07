import styled from "styled-components";

export const ScreenContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background-color: #ffffff;
`;

export const MainMobile = styled.div`
	display: flex;
	width: 100%;
	padding: 1.25rem 1rem;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	background-color: #ffffff;
`;

export const HeaderContent = styled.div`
	display: flex;
	flex-flow: column;
	flex-grow: 1;
	gap: 1rem;
	align-items: center;
	overflow-y: scroll;
	`;

export const ButtonWrapper = styled.div`
display: flex;
position: fixed;
width: 100%;
bottom: 11rem;
align-items: center;
justify-content: center;
`;
