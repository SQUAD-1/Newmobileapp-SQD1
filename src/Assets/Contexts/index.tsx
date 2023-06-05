/* eslint-disable no-unused-vars */
import {
	ReactNode,
	useCallback,
	useContext,
	useMemo,
	useState,
	createContext,
} from "react";

interface TypeCallContextProps {
	resumo: string;
	tipo: string;
	descricao: string;
	dataOcorrido: string;
	file: Array<File>;
	idChamado: number;
	changeTipo(value: string): void;
	changeResumo(value: string): void;
	changeDescricao(value: string): void;
	changeDataOcorrido(value: string): void;
	changeFile(value: Array<File>): void;
	changeIdChamado(value: number): void;
}

interface TypeCallProviderProps {
	children: ReactNode;
}

export const TypeCallContext = createContext({} as TypeCallContextProps);

export const TypeCallProvider = ({ children }: TypeCallProviderProps) => {
	const [resumo, setResumo] = useState("");
	const [tipo, setTipo] = useState("");
	const [descricao, setDescricao] = useState("");
	const [dataOcorrido, setDataOcorrido] = useState("");
	const [file, setFile] = useState<Array<File>>([]);
	const [idChamado, setIdChamado] = useState(0);


	const changeTipo = useCallback((value: string) => {
		setTipo(value);
	}, []);

	const changeResumo = useCallback((value: string) => {
		setResumo(value);
	}, []);

	const changeDescricao = useCallback((value: string) => {
		setDescricao(value);
	}, []);

	const changeDataOcorrido = useCallback((value: string) => {
		setDataOcorrido(value);
	}, []);

	const changeIdChamado = useCallback((value: number) => {
		setIdChamado(value);
	}, []);

	const changeFile = useCallback(
		(value: Array<File>) => {
			setFile(value);
		},
		[setFile]
	);

	const typeCallContextProviderValue = useMemo(() => {
		return {
			tipo,
			resumo,
			dataOcorrido,
			descricao,
			file,
			idChamado,
			changeResumo,
			changeDataOcorrido,
			changeDescricao,
			changeTipo,
			changeFile,
			changeIdChamado,
		};
	}, [
		tipo,
		resumo,
		dataOcorrido,
		descricao,
		file,
		idChamado,
		changeResumo,
		changeDataOcorrido,
		changeDescricao,
		changeTipo,
		changeFile,
		changeIdChamado,
	]);

	return (
		<TypeCallContext.Provider value={typeCallContextProviderValue}>
			{children}
		</TypeCallContext.Provider>
	);
};

export const useTypeCall = (): TypeCallContextProps => {
	const typeCallContext = useContext(TypeCallContext);

	if (!typeCallContext) {
		throw new Error("usetypeCall must be used within an typeCallProvider");
	}

	return typeCallContext;
};
