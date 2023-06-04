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
	gap: 0.6rem;

	@media (max-width: 320px) {
		padding: 0;
	}
`;

type UserTextProps = {
	color?: string;
};

export const UserText = styled.div<UserTextProps>`
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 2.3rem;
	line-height: 2.75rem;
	display: flex;
	align-items: center;
	letter-spacing: 0.01em;
	color: ${({ color }) => color ?? "#7ac143"};

@media(max-width: 320px) {
	font-size: 2.25rem;
	line-height: 2.25rem;
}
`;

export const PageTitle = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

@media(max-width: 320px) {
	padding: 0;
}
`;

export const TittleText = styled.div`
font-family: "Inter";
font-style: normal;
font-weight: 700;
font-size: 1.8rem;
line-height: 2.25rem;
color: #000000;
text-transform: capitalize;
line-height: 1.75rem;
`;

export const ButtonImage = styled.img`
width: auto;
height: 2.4rem;
`;
