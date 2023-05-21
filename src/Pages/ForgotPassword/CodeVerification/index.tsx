import { Link } from "react-router-dom";
import { BackButton } from "../../../Components/BackButton";
import { CodeVerificationContainer, CodeVerificationContent, CodeVerificationTitle } from "./styles";
import { BoxEmpty } from "../../../Components/BoxEmpty";
import VerificationIcon from "../../../Assets/verification.svg";
import { InputBoxValidation } from "../../../Components/InputCodeValidation";
import { FooterButtons } from "../../../Components/FooterButtons";

export const CodeVerification = () => {
	return (
		<CodeVerificationContainer>
			<Link to="/login">
				<BackButton
					actionText={"Login"}
					color="#AA0E27"
					fontWeight={"600"}
				/>
			</Link>
			<BoxEmpty
				title="Dados confirmados!"
				icon={VerificationIcon}
				color="#68A439"
				fontSize="16px"
			/>
			<CodeVerificationContent>
				<CodeVerificationTitle>
					Digite abaixo o código enviado ao seu email!
				</CodeVerificationTitle>
				<InputBoxValidation />
			</CodeVerificationContent>
			<FooterButtons
				LastPage="/RecuperarSenha"
				NextPage="/NovaSenha"
			/>
		</CodeVerificationContainer>
	);
};
