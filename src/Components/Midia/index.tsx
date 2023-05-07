import { MidiaContainer, MidiaDiv, MidiaImg, MidiaText } from './styles';
import MidiaPhoto from '../../Images/MidiaPhoto.png';
import MidiaVideo from '../../Images/MidiaVideo.png';
import MidiaDoc from '../../Images/MidiaDoc.png';

export const Midia = () => {
  return (
    <MidiaContainer>
      <MidiaText>Mídia</MidiaText>
      <MidiaDiv>
        <MidiaImg src={MidiaPhoto} />
        <MidiaImg src={MidiaVideo} />
        <MidiaImg src={MidiaDoc} />
      </MidiaDiv>
    </MidiaContainer>
  );
};
