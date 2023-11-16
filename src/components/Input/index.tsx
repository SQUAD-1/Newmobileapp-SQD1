import { ClearDisabledIcon } from "@/assets";
import iconeTets from "@/assets/Images/Clear.png";
import {
	InputContainer,
	InputComponent,
	ContentContainer,
	SupportText,
  ErrorText,
  Label,
} from "./styles";
import { type } from "os";
import { Icon } from "..";
import { StaticImageData } from "next/image";

export interface InputStylesProps {
	backgroundColor?: string;
	textColor?: string;
	rightIcon?: string;
	leftIcon?: string;
	borderColor?: string;
	width?: string;
	height?: string;
	placeholderColor?: string;
}

export interface ActionButton {
	onClick?: () => void;
	icon?: StaticImageData;
  size?: number;
	color?: string;
	alt?: string;
}

interface InputProps {
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value?: string;
	placeholder?: string;
	isValid?: boolean;
	errorText?: string;
	warnText?: string;
	labelText?: string;
	trailingButton?: ActionButton;
	leadingButton?: ActionButton;
	type: "text" | "password" | "email" | "number" | "tel" | "search" | "url";
	style?: InputStylesProps;
}

const CustomInput = ({
	type = "text",
	placeholder,
	isValid = false,
	labelText,
	errorText,
	onChange,
	style,
	value,
	warnText,
	leadingButton,
	trailingButton,
}: InputProps) => {
	return (
		<InputContainer>
      {labelText && <Label>{labelText}</Label>}
			<ContentContainer>
				{leadingButton && (
					<Icon
						src={leadingButton?.icon}
						alt={leadingButton?.alt}
						onClick={leadingButton?.onClick}
            size={leadingButton?.size}
            hasPadding
					/>
				)}

				<InputComponent
					placeholder={placeholder}
					onChange={onChange}
					type={type}
					value={value}
				/>
				{trailingButton && (
					<Icon
						src={trailingButton?.icon}
						alt={trailingButton?.alt}
						onClick={trailingButton?.onClick}
            hasPadding
					/>
				)}
			</ContentContainer>
			{!isValid && <ErrorText>{errorText}</ErrorText>}
		</InputContainer>
	);
};

export { CustomInput };
