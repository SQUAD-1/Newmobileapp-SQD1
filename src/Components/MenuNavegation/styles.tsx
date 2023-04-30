import { HTMLAttributes } from "react";
import styled from "styled-components"

interface ContainerMenuProps {
    isClicked?: boolean;
  }

export const ContainerMenu = styled.div`
position: fixed;
bottom: 0;
width: 100%;
padding: 0;
/* width: calc(100% - 1rem); */
`;

export const MenuList = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
padding: 1rem;
background-color: #F5F5F5;
`;

export const OptionMenu = styled.a`
text-decoration: none;
display: flex;
justify-content: center;
flex-direction: column;
text-decoration: none;
`; 

export const IconArea = styled.div<ContainerMenuProps>`
display: flex;
width: 64px;
height: 32px;
background-color: ${({isClicked}) => isClicked === true ? '#7AC143' : '#F5F5F5'};
border-radius: 16px;
align-items: center;
justify-content: center;
`;

export const TextMenu = styled.p<ContainerMenuProps>`
text-decoration: none;
text-align: center;
font-family: Inter;
font-size: 12px;
font-weight: 500;
line-height: 16px;
color: ${props => props.isClicked ? '#7AC143' : '#252728'} ;
list-style: none;
`;

