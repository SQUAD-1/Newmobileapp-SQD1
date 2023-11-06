import Link from "next/link";
import { PlusIcon } from "@/assets/Icons";
import { ButtonNewCalled } from "./styles";

export const ButtonNew = () => {
	return (
		<ButtonNewCalled>
			<Link href="/OpenCall">
				<PlusIcon />
			</Link>
		</ButtonNewCalled>
	);
};
