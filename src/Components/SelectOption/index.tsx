import { ReactNode } from "react";
import { Fildset, Legend, LegendText, TextArea } from "./styles";

export interface ILegendProps {
  legendText?: string;
  widht?: string;
  placeholder?: string;
  height?: string;
  children?: ReactNode;
}

export const SelectOption = ({
  legendText,
  placeholder,
  widht,
  height,
  children,
}: ILegendProps) => {
  return (
    <Fildset height={height} widht={widht}>
      <Legend>
        <LegendText>{legendText}</LegendText>
      </Legend>
      <TextArea required name={placeholder}>
        {children}
      </TextArea>
    </Fildset>
  );
};
