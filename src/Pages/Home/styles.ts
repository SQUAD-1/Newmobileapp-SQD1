import styled from "styled-components";

export const ScreenContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	background-color: #ffffff;
`;

export const Overflowdiv = styled.div`
	height: 68.8vh;
	width: 100%;
	overflow-y: scroll;
	@media (max-height: 667px) and (min-height: 0px) {
		height: 56vh;
	}
	@media (max-height: 740px) and (min-height: 668px) {
		height: 60vh;
	}
`;

export const MainMobile = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	padding: 1.25rem 1rem;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	background-color: #ffffff;
`;

export const HomeContent = styled.div`
	display: flex;
	flex-flow: column;
	flex-grow: 1;
	gap: 1rem;
	align-items: center;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	position: fixed;
	width: 100%;
	bottom: 11rem;
	align-items: center;
	justify-content: center;
`;

export const BoxEmptyContainer = styled.div`
	position: absolute;
	top: 39%;
`;
