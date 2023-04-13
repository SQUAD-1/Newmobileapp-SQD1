import { Fildset, Input, Legend, LegendText } from "./styles";

export interface ILegendProps {
    legendText?: string;
    widht?: string;
    inputType?: string;
    placeholder?: string;
    height?: string;
}

export const InputLegend = ({
    legendText,
    inputType,
    placeholder,
    widht,
    height,
}: ILegendProps) => {
    return (
        <Fildset height={height} widht={widht}>
            <Legend>
                <LegendText>{legendText}</LegendText>
            </Legend>
            <Input placeholder={placeholder} type={inputType}></Input>
        </Fildset>
    );
};
