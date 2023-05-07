import EmptyBox from "../../Assets/Images/EmptyBox.png";
import { ButtonNew } from "../Home/ButtonNew";
import { RequestsEmpty, RequestsTitle } from "./styles";

export interface BoxEmptyProps {
    title?: string;
    color?: string;
    alt?: string;
}

export const BoxEmpty = ({ title, alt, color }: BoxEmptyProps) => {
    return (
        <RequestsEmpty>
            <img src={EmptyBox} alt={alt} />
            <RequestsTitle color={color}>{title}</RequestsTitle>

            <ButtonNew />
        </RequestsEmpty>
    );
};
