import { BoxEmptyProps } from "../../Assets"; 
import EmptyBox from "../../Assets/Images/EmptyBox.png";
import { RequestsEmpty, RequestsTitle } from "./styles";

export const BoxEmpty = ({ title, icon, alt, color }: BoxEmptyProps) => {
	return (
		<RequestsEmpty>
			<img
				src={icon ?? EmptyBox}
				alt={alt}
			/>
			<RequestsTitle color={color}>{title}</RequestsTitle>
		</RequestsEmpty>
	);
};
