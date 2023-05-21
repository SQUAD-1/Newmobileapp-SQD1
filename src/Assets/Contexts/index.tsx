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
	changeTipo(value: string): void;
	changeResumo(value: string): void;
	changeDescricao(value: string): void;
	changeDataOcorrido(value: string): void;
	changeFile(value: Array<File>): void;
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

	console.log("setFile", file);

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

	const changeFile = useCallback((value: Array<File>) => {
		setFile(value);
	}, []);

	const typeCallContextProviderValue = useMemo(() => {
		return {
			tipo,
			resumo,
			dataOcorrido,
			descricao,
			file,
			changeResumo,
			changeDataOcorrido,
			changeDescricao,
			changeTipo,
			changeFile,
		};
	}, [
		tipo,
		resumo,
		dataOcorrido,
		descricao,
		file,
		changeResumo,
		changeDataOcorrido,
		changeDescricao,
		changeTipo,
		changeFile,
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
