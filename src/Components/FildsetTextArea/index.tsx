import { Fildset, TextArea, Legend, LegendText } from "./styles";

export interface ILegendProps {
	legendText?: string;
	widht?: string;
	placeholder?: string;
	height?: string;
	onChange?: () => void;
}

export const FildsetTextArea = ({
	legendText,
	placeholder,
	widht,
	height,
	onChange,
}: ILegendProps) => {
	return (
		<Fildset
			height={height}
			widht={widht}
			onChange={onChange}>
			<Legend>
				<LegendText>{legendText}</LegendText>
			</Legend>
			<TextArea placeholder={placeholder} />
		</Fildset>
	);
};
