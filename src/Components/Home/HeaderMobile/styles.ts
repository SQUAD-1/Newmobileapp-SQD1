import styled from "styled-components";

export const HeaderHome = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 3rem;
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

export const UserText = styled.text`
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 2.5rem;
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
    height: 3rem;
    display: flex;
    padding: 0 2rem;

    @media (max-width: 320px) {
        padding: 0;
    }
`;

export const TittleText = styled.text`
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.25rem;
    color: #000000;

    font-size: 1.75rem;
    line-height: 1.75rem;
`;
