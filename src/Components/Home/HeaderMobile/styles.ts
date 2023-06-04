import styled from "styled-components";

export const HeaderHome = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 1.5rem;
`;

export const UserName = styled.div`
	height: 3.5rem;
	display: flex;
	align-items: center;
	padding: 0 2rem;
	gap: 0.6rem;

	@media (max-width: 320px) {
		padding: 0;
	}
`;

export const UserText = styled.div`
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 2.3rem;
	line-height: 2.75rem;
	display: flex;
	align-items: center;
	letter-spacing: 0.01em;
	color: #7ac143;

	@media (max-width: 320px) {
		font-size: 2.25rem;
		line-height: 2.25rem;
	}
`;

export const PageTitle = styled.div`
	display: flex;
	padding: 0 2rem;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 320px) {
		padding: 0;
	}
`;

export const TittleText = styled.div`
	font-family: "Inter";
	font-style: normal;
	font-weight: 700;
	font-size: 2rem;
	line-height: 2.25rem;
	color: #000000;
	text-transform: capitalize;

	font-size: 1.75rem;
	line-height: 1.75rem;
`;

export const ButtonImage = styled.img`
	width: auto;
	height: 2.4rem;
`;
