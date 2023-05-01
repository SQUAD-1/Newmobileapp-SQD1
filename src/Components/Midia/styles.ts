import styled from "styled-components";

export const MidiaContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 0px 0px 16px;
    gap: 8px;
    width: 366px;
    height: 128px;
    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
`;

export const MidiaDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;

    width: 272px;
    height: 80px;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.16));

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`;
export const MidiaText = styled.span`
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`;

export const MidiaImg = styled.img``;
