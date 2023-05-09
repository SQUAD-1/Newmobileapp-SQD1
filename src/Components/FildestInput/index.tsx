import { Fildset, Input, Legend, LegendText } from "./styles";

export interface ILegendProps {
    legendText?: string;
    width?: string;
    inputType?: string;
    placeholder?: string;
    height?: string;
}

export const InputLegend = ({
    legendText,
    inputType,
    placeholder,
    width,
    height,
}: ILegendProps) => {
    return (
        <Fildset height={height} width={width}>
            <Legend>
                <LegendText>{legendText}</LegendText>
            </Legend>
            <Input placeholder={placeholder} type={inputType}></Input>
        </Fildset>
    );
};
