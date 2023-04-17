import styled from "styled-components";
import { CalledMobileProps } from "./index";

export const CalledContainer = styled.div<CalledMobileProps>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    gap: 3rem;
    width: 90%;
    height: 9rem;
    background-color: ${({ color }) => color};
    border-radius: 0.75rem;

    &:hover {
        border: 3px solid #7ac143;
        box-shadow: 0px 8px 7px rgba(0, 0, 0, 0.24);
    }

    @media (max-width: 390px) {
        gap: 1.5rem;
    }

    @media (max-width: 320px) {
        width: 100%;
    }
`;

export const CalledContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0.5rem;
    gap: 0.75rem;
    width: 70%;
    height: 100%;

    @media (max-width: 390px) {
        gap: 1rem;
    }
`;

export const CalledState = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0.5rem;
    gap: 0.5rem;
    width: 30%;
    height: 100%;
`;

export const CalledNumber = styled.text`
    height: 1rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.25rem;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    color: #111314;
`;

export const CalledDescription = styled.text`
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.5rem;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    color: #111314;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;

    @media (max-width: 390px) {
        font-size: 1.5rem;
        line-height: 1.5rem;
    }
`;

export const CalledStatus = styled.div`
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
