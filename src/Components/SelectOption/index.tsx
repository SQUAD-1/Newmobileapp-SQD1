import { ChangeEvent, ReactNode, useState } from "react";
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
	const [selectedValue, setSelectedValue] = useState<string>("");
	const handleTipoChamadoChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const tipoChamado = event.target.value;
		setSelectedValue(tipoChamado);
	};

	return (
		<Fildset
			height={height}
			width={width}>
			<Legend>
				<LegendText>{legendText}</LegendText>
			</Legend>
			<TextArea
				onChange={handleTipoChamadoChange}
				required
				value={selectedValue}
				name={placeholder}>
				{children}
			</TextArea>
		</Fildset>
	);
};





