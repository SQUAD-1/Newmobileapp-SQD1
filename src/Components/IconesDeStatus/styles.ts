import styled from "styled-components";

interface ContainerStatusProps{
  showPlay?: boolean;
}

export const IconeDeStatusContainerGenreal = styled.section``;

export const ContianerPlay = styled.div<ContainerStatusProps>`
	position: ${({showPlay}) => showPlay ? "fixed" : "none"};
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 2rem;
	right: 4rem;
	bottom: 8.2em;
`;

export const IconeDeStatusContainer = styled.div<ContainerStatusProps>`
	position: ${({showPlay}) => showPlay ? "none" : "fixed"};
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 2rem;
	right: 4rem;
	bottom: 8.2em;
`;

export const ContainerReiniciar = styled.div<ContainerStatusProps>``;
