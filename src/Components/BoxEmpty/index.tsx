import EmptyBox from "../../Assets/Images/EmptyBox.png";
import { ButtonNew } from "../Home/ButtonNew";
import { RequestsEmpty, RequestsTitle } from "./styles";

export interface BoxEmptyProps {
title: string;
}

export const BoxEmpty = ({title}:BoxEmptyProps) => {
return(
    <RequestsEmpty>
    <img src={EmptyBox} alt="caixa vazia" />
    <RequestsTitle>{title}</RequestsTitle>

    <ButtonNew />
</RequestsEmpty>
)
}
