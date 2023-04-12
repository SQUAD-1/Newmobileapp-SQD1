import styled from "styled-components"

export const ContainerMenu = styled.div`
display: flex;
flex-direction: row;
width: 100%;
background-color: red;
`;

export const Option = styled.span`
display: flex;
flex-direction: row;
font-size: 12px;
font-weight: 500;
align-items: center;
color: #252728;

&:hover {
    color: #7AC143;
}
`;
