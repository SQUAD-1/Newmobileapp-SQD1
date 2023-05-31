import styled from "styled-components";

type ContainerStyleProps = {
	color?: string;
	borderColor?: string;
	hoverColor?: string;
};

export const IssueContainer = styled.div<ContainerStyleProps>`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 1.2rem 1.4rem 1.2rem 0.8rem;
	gap: 3rem;
	width: 100%;
	height: 9rem;
	background-color: ${({ color }) => color ?? "#D9F5C5"};
	border-radius: 1.2rem;
	border: 0.35rem solid ${({ borderColor }) => borderColor ?? "#7AC143"};
	transition: 0.4s ease-in-out;

	&:hover {
		background-color: ${({ hoverColor }) => hoverColor ?? "#d7ffcd"};
		box-shadow: 0px 16px 26px rgba(0, 0, 0, 0.24);
	}

	@media (max-width: 390px) {
		gap: 1.5rem;
	}

	@media (max-width: 320px) {
		width: 100%;
	}
`;

export const IconeSelo = styled.section`
	position: relative;
	margin-bottom: 7rem;
	margin-left: -2rem;
`;

export const IssueContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	padding: 0.4rem 0;
	width: max-content;
	height: max-content;
	gap: 1.6rem;

	@media (max-width: 390px) {
		gap: 1rem;
	}
`;

export const IssueState = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;
	width: max-content;
	height: 100%;
`;

export const IssueNumber = styled.text`
	height: 1rem;
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 1.4rem;
	line-height: 1.8rem;
	display: flex;
	align-items: center;
	letter-spacing: 0.01em;
	color: #111314;
`;

export const IssueDescription = styled.text`
	font-family: "Inter";
	font-style: normal;
	font-weight: 600;
	font-size: 1.4rem;
	line-height: 1.8rem;
	display: flex;
	align-items: center;
	letter-spacing: 0.05em;
	color: #111314;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	word-wrap: break-word;

	@media (max-width: 390px) {
		font-size: 1.5rem;
		line-height: 1.5rem;
	}
`;

export const IssueStatus = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0;
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 1rem;
	line-height: 1rem;
	gap: 0.25rem;
`;

export const OpeningText = styled.text`
	display: flex;
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 1.25rem;
	line-height: 1.25rem;
	color: #111314;

	@media (max-width: 390px) {
		font-size: 1.25rem;
		line-height: 1.25rem;
	}
`;

export const StatusText = styled.text`
	font-family: "Inter";
	font-style: normal;
	font-weight: 600;
	font-size: 1.25rem;
	line-height: 1.25rem;
	display: flex;
	align-items: center;
	letter-spacing: 0.01em;
	color: #111314;

	@media (max-width: 390px) {
		font-size: 1.25rem;
		line-height: 1.25rem;
	}
`;
