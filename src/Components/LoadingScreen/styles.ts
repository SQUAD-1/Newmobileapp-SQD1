import styled from "styled-components";

export const Container = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
`;

export const Circle = styled.div`
	height: 80px;
	width: 80px;
	border-radius: 50%;
	box-shadow: 0 1px 5px red;
	border: 5px solid white;
	border-top-color: #ea374d;
	animation: rotate 1s linear infinite;

	@keyframes rotate {
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
