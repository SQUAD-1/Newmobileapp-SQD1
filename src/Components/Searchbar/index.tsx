import { useEffect, useState } from "react";
import { SearchIcon } from "../../Assets";
import filter from "../../Assets/Images/Filter.png";
import { Divider, StyledSearchBar, StyledSearchBarContainer } from "./styles";
import { debounce } from "lodash";

interface SearchbarProps {
	// eslint-disable-next-line no-unused-vars
	getInputValue: (value: string) => void;
}

const Searchbar = ({ getInputValue }: SearchbarProps) => {
	const [search, setSearch] = useState("");
	const debouncedGetInputValue = debounce(getInputValue, 1500);

	useEffect(() => {
		debouncedGetInputValue(search);
		return () => {
			debouncedGetInputValue.cancel();
		};
	}, [debouncedGetInputValue, search]);

	return (
		<StyledSearchBarContainer
			borderColor="#7AC143"
			padding="0 .8rem 0 1.2rem ">
			<SearchIcon
				color="#5A8F19"
				height="2.4rem"
				width="2.4rem"
			/>
			<StyledSearchBar
				onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
					setSearch(event.target.value)
				}
				value={search}
				type="text"
				placeholder="Pesquise o nome ou id do chamado "
			/>
			<Divider
				color="#7AC143"
				width="0.3rem"
				height="60%"
			/>
			<img
				src={filter}
				width="25rem"
				height="25rem"
				alt="Filtro"
			/>
		</StyledSearchBarContainer>
	);
};

export default Searchbar;
