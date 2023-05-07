import { CalledMobile } from '../../Components/Home/CalledMobile';
import { HeaderMobile } from '../../Components/Home/HeaderMobile';
import { NavigationBar } from '../../Components/MenuNavegation';
import { MainMobile, ScreenContainer } from '../Home/styles';
import { Calls } from './styles';
import mockChamados from './mockChamados';

export const Chamados = () => {
  return (
    <ScreenContainer>
      <MainMobile>
        <HeaderMobile userName="Wellington" pageTittle="Meus Chamados" />
        <Calls>
          {mockChamados.map((item) => (
            <CalledMobile key={item.id} {...item} />
          ))}
        </Calls>
      </MainMobile>
      <NavigationBar />
    </ScreenContainer>
  );
};