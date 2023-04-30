import {
    CalledContainer, CalledContent, CalledNumber, CalledDescription, CalledState, CalledStatus, OpeningText, StatusText, IconeSelo
} from "./styles";
import { Selo } from "../Icons";

export interface CalledMobileProps {
    color?: string;
    callNumber?: string;
    callDescription?: string;
    callDate?: string;
    callStatus?: string;
    updated?: boolean;
}

export const CalledMobile = ({
    color,
    callNumber,
    callDescription,
    callDate,
    callStatus,
    updated,
}: CalledMobileProps) => {
    return (
        <CalledContainer color={color}>
            <IconeSelo>{updated ? <Selo /> : null}</IconeSelo>
            <CalledContent>
                <CalledNumber>{callNumber}</CalledNumber>
                <CalledDescription>{callDescription}</CalledDescription>
            </CalledContent>
            <CalledState>
                <CalledStatus>
                    Aberto em:
                    <OpeningText>{callDate}</OpeningText>
                </CalledStatus>
                <CalledStatus>
                    Status
                    <StatusText>{callStatus}</StatusText>
                </CalledStatus>
            </CalledState>
        </CalledContainer>
    );
};