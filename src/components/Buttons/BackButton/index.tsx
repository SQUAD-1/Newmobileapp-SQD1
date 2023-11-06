import { Container, BackIcon, TextBack } from "./styles";
import ArrowLeft from "@/assets/Icons/png/arrowLeft.png";
import { useRouter } from "next/navigation";

interface BackButtonProps {
	actionText: string;
}

export const BackButton = ({ actionText }: BackButtonProps) => {
	const router = useRouter();
	return (
		<Container onClick={() => router.back()}>
			<BackIcon
				src={ArrowLeft}
				alt="voltar"
			/>
			<TextBack>{actionText}</TextBack>
		</Container>
	);
};
