import styled from "styled-components";

export const FlexContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 100vw;
	height: 93vh;
	gap: 0.4rem;
	padding: 2rem;
`;

export const MainContainer = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem 0 2rem 0;
	width: 100%;
	height: max-content;
	gap: 1.3rem;
	overflow: scroll;
	overflow-x: visible;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const SearchContainer = styled.div`
	width: 100%;
	height: fit-content;
`;

export const SearchPageContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	overflow: hidden;
`;
