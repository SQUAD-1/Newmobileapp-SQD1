import styled from "styled-components"

export const ContainerMenu = styled.div`
position: absolute;
bottom: 0;
width: 100%;
padding: 0;
margin-left: -1rem;
/* width: calc(100% - 1rem); */
`;

export const MenuList = styled.ul`
display: flex;
flex-direction: row;
display: flex;
justify-content: space-around;
align-items: center;
padding: 1rem;
background-color: red;
`;

export const OptionMenu = styled.li`
display: flex;
flex-direction: column;
font-size: 20px;
font-weight: 500;
align-items: center;
color: #252728;
list-style: none;

 &:hover {
    color: #7AC143;
 };
`; 
