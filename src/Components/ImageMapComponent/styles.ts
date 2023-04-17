import styled from "styled-components";
import theme from "../../styles/theme";

interface ImageMapProps {
    radiusRightTop?: string;
    radiusRightBottom?: string;
    borderTop?: string;
    alignItems?: string;
}

export const ImageMapContainer = styled.section`
    width: calc(100%);
    height: 8rem;
    background-color: ${theme.colors.green["085"]};
    border-radius: 10px;
    display: flex;
    margin-top: 3rem;
    margin-bottom: 20rem;
`;

export const TypeFile = styled.section`
    padding-left: 1.6rem;
    margin: auto 0;
`;

export const Title = styled.h1`
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: ${theme.colors.neutral.black};
    padding: 1.6rem 2.24rem;
`;

export const ButtonActionContainer = styled.section`
    display: flex;
    flex-direction: column;
`;

export const ButtonAction = styled.section<ImageMapProps>`
    /* margin-top: 3rem; */
    background-color: ${theme.colors.green[195]};
    width: 6rem;
    height: 4rem;
    display: flex;
    justify-content: flex-end;
    align-items: ${({ alignItems }) => alignItems || "start"};
    border-top-right-radius: ${({ radiusRightTop }) =>
        radiusRightTop || "none"};
    border-bottom-right-radius: ${({ radiusRightBottom }) =>
        radiusRightBottom || "none"};
    border-top: ${({ borderTop }) => `1px solid ${borderTop}` || "none"};

    & > img{
        margin: auto;
        width: 1.5rem;
        height: 1.5rem;
    }
`;
