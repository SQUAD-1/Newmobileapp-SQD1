import { Fildset, TextArea, Legend, LegendText } from './styles';

export interface ILegendProps {
  legendText?: string;
  widht?: string;
  placeholder?: string;
  height?: string;
}

export const FildsetTextArea = ({
  legendText,
  placeholder,
  widht,
  height,
}: ILegendProps) => {
  return (
    <Fildset height={height} widht={widht}>
      <Legend>
        <LegendText>{legendText}</LegendText>
      </Legend>
      <TextArea placeholder={placeholder} />
    </Fildset>
  );
};
