import {
    CalledContainer,
    CalledContent,
    CalledNumber,
    CalledDescription,
    CalledState,
    CalledStatus,
    OpeningText,
    StatusText,
} from "./styles";

export interface CalledMobileProps {
    color?: string;
    callNumber?: string;
    callDescription?: string;
    callDate?: string;
    callStatus?: string;
}

export const CalledMobile = ({
    color,
    callNumber,
    callDescription,
    callDate,
    callStatus,
}: CalledMobileProps) => {
    return (
        <CalledContainer color={color}>
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
