import { Link } from "react-router-dom";
import { PlusIcon } from "../Icons";
import { ButtonNewCalled } from "./styles";

export const ButtonNew = () => {
    return (
        <ButtonNewCalled>
            <Link to="/OpenCall">
            <PlusIcon />
            </Link>
        </ButtonNewCalled>
    );
};
