import { ReactNode } from "react";
import { Fildset, Legend, LegendText, TextArea } from "./styles";

export interface ILegendProps {
    legendText?: string;
    width?: string;
    placeholder?: string;
    height?: string;
    children?: ReactNode;
}

export const SelectOption = ({
    legendText,
    placeholder,
    width,
    height,
    children,
}: ILegendProps) => {
    return (
        <Fildset height={height} width={width}>
            <Legend>
                <LegendText>{legendText}</LegendText>
            </Legend>
            <TextArea required name={placeholder}>
                {children}
            </TextArea>
        </Fildset>
    );
};





