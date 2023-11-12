"use client";
import { ButtonNew } from "@/components/Buttons";
import { IssueMobile } from "@/components/CalledMobile";
import { HeaderMobile } from "@/components";
import { NavigationBar } from "@/components/NavBar";
import { ButtonWrapper } from "./styles";
import { issueMobileData } from "./data";
import { FlexContainer, PageContainer } from "@/components/PageStruct/style";
import { LoadingScreen } from "@/components/LoadingScreen";
import { MainContainer } from "../pesquisa/styles";
import { BoxEmpty } from "@/components";
const Homepage = () => {
	const issuesNumber = 8; // issueMobileData.length;
	const isLoading = false;
	const listaChamados = issueMobileData;
	return (
		<FlexContainer>
			<HeaderMobile
				userName={"Colaborador"}
				pageTittle="Meus chamados"
				issueQuantify={issuesNumber}
			/>
			{/* <PageStructContainer justifyContent={hasContent ? "flex-start" : "center"}>*/}
			<PageContainer>
				{isLoading ? (
					<LoadingScreen overlayOn={false} />
				) : (
					<>
						<MainContainer>
							{listaChamados && listaChamados?.length ? (
								listaChamados.map((issue) => {
									return (
										<IssueMobile
											key={issue.id}
											id={issue.id}
											nome={issue.nome}
											date={issue.date}
											status={issue.status}
											isUpdated={issue.isUpdated}
										/>
									);
								})
							) : (
								// <BoxEmptyContainer>
								<BoxEmpty
									alt="caixa vazia"
									title="Não há chamados no momento."
									color="#494949"
								/>
								// </BoxEmptyContainer>
							)}
						</MainContainer>
						<ButtonWrapper>
							{issuesNumber < 5 ? <ButtonNew /> : null}
						</ButtonWrapper>
					</>
				)}
			</PageContainer>
			<NavigationBar />
		</FlexContainer>
	);
};

export default Homepage;
