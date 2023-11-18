import Link from "next/link";
import styled from "styled-components";

interface CustomLinkProps {
	color?: string;
}

export const CustomLink = styled(Link)<CustomLinkProps>`
	text-decoration: none;
	color: ${({ color }) => (color ? color : "#252728")};
`;
