import { Row } from "@/styles";
import styled from "styled-components";

export const HeaderHome = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 1rem;
`;

export const UserName = styled.div`
	display: flex;
	align-items: center;
	gap: 0.6rem;

	@media (max-width: 320px) {
		padding: 0;
	}
`;

export const UserText = styled.text`
	font-style: normal;
	font-weight: 600;
	font-size: 1.5rem;
	line-height: 2.75rem;
	display: flex;
	align-items: center;
	letter-spacing: 0.01em;
	color: ${({ theme }) => theme.colors.parGreen["100"]};

	@media (max-width: 320px) {
		font-size: 2.25rem;
		line-height: 2.25rem;
	}
`;

export const PageTitle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	@media (max-width: 320px) {
		padding: 0;
	}
`;

export const TittleText = styled.text`
	font-style: normal;
	font-weight: 600;
	font-size: 1.25rem;
	line-height: 1.25rem;
	letter-spacing: 0.0125rem;
`;

export const ButtonImage = styled.img`
	width: 20px;
	height: 20px;
`;

export const FirstSection = styled(Row)`
	width: 100vw;
	height: fit-content;
	display: flex;
	flex-direction: column;
	gap: 0rem;
`;

export const SecondSection = styled(Row)``;
