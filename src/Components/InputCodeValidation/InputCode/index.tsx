import { ChangeEvent, useRef, useState } from "react";
import { ValidationInput, InputCodeContainer, Inputs } from "./styles";

interface InputCodeProps {
	length: number;
	height?: string;
	width?: string;
}

const InputCode = ({ length, height, width }: InputCodeProps) => {
	const [code, setCode] = useState([...Array(length)].map(() => ""));
	const inputs = useRef<HTMLInputElement[]>([]);

	const processInput = (e: ChangeEvent<HTMLInputElement>, slot: number) => {
		const num = e.target.value.toUpperCase();
		if (/[^A-Z0-9]/.test(num)) return;
		const newCode = [...code];
		newCode[slot] = num;
		setCode(newCode);
		if (slot !== length - 1 && inputs.current !== null) {
			inputs.current[slot + 1].focus();
		}
	};

	const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>, slot: number) => {
		if (
			e.keyCode === 8 &&
			!code[slot as number] &&
			slot !== 0 &&
			inputs.current !== null
		) {
			const newCode = [...code];
			newCode[slot - 1] = "";
			setCode(newCode);
			inputs.current[slot - 1].focus();
		}
	};

	return (
		<InputCodeContainer>
			<Inputs>
				{code.map((num, index) => {
					const key = index + 1;
					return (
						<ValidationInput
							key={key}
							height={height}
							width={width}
							type="text"
							maxLength={1}
							value={num}
							autoFocus={!code[0].length && index === 0}
							onChange={(e) => processInput(e, index)}
							onKeyUp={(e) => onKeyUp(e, index)}
							ref={(ref) => inputs.current.push(ref as HTMLInputElement)}
						/>
					);
				})}
			</Inputs>
		</InputCodeContainer>
	);
};

export { InputCode };
