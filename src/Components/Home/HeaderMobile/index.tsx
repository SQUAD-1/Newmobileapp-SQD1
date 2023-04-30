import { LogoFC } from "../../../Assets/Icons";
import {
  UserName,
  UserText,
  PageTitle,
  TittleText,
  HeaderHome,
} from "./styles";

export interface HeaderMobileProps {
  userName?: string;
  pageTittle?: string;
}

export const HeaderMobile = ({ userName, pageTittle }: HeaderMobileProps) => {
  return (
    <HeaderHome>
      <LogoFC />
      {/* camylla.lima */}
      <UserName>
        <UserText>Bom dia, {userName}</UserText>
      </UserName>
      <PageTitle>
        <TittleText>{pageTittle}</TittleText>
      </PageTitle>
    </HeaderHome>
  );
};
