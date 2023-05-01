import { useState } from "react";
import { Fildset, Input, Legend, LegendText } from "./styles";

export interface ILegendProps {
    legendText?: string;
    widht?: string;
    inputType?: string;
    placeholder?: string;
    height?: string;
    maxLength?: number;
}

export const InputLegend = ({
    legendText,
    inputType,
    placeholder,
    widht,
    height,
    maxLength,
}: ILegendProps) => {
    const [write, setWrite] = useState<string>("");

    const isMaxDate = inputType === "date" ? "2023-12-31" : '';

    return (
        <Fildset height={height} widht={widht}>
            <Legend>
                <LegendText>{legendText}</LegendText>
            </Legend>

            <Input
                placeholder={placeholder}
                type={inputType}
                maxLength={maxLength}
                onChange={(e) => setWrite(e.target.value)}
                max={isMaxDate}
            />
        </Fildset>
    );
};
