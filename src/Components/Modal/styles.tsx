import styled from "styled-components";
import theme from "../../styles/theme";

interface ModalProps {
    isTrue: boolean;
}

export const ModalContainer = styled.section<ModalProps>`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: ${theme.colors.neutral.opacity};
    z-index: 2;

    display: ${(isTrue) => (isTrue ? "flex" : "none")};
`;

export const ModalContet = styled.section`
    background-color: ${theme.colors.green["015"]};
    margin: auto;
    width: 30rem;
    height: 24rem;
    box-shadow: 0px 7px 14px rgba(0, 0, 0, 0.24);
    border-radius: 12px;
`;

export const MessageSuccess = styled.h1`
    color: ${theme.colors.neutral.white};
    text-align: center;
    flex-direction: column;
    font-size: 20px;
    font-family: inter;
    font-weight: 600;
    display: flex;
    margin-top: 14rem;
`;
