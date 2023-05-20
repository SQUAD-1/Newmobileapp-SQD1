import { BoxEmptyProps } from "../../Assets";
import EmptyBox from "../../Assets/Images/EmptyBox.png";
import { RequestsEmpty, RequestsTitle } from "./styles";

export const BoxEmpty = ({ title, icon, alt, color, fontSize }: BoxEmptyProps) => {
	return (
		<RequestsEmpty>
			<img
				src={icon ?? EmptyBox}
				alt={alt}
			/>
			<RequestsTitle color={color} fontSize={fontSize}>{title}</RequestsTitle>
		</RequestsEmpty>
	);
};
