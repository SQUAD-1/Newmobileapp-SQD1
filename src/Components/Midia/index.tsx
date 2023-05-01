import { MidiaContainer, MidiaDiv, MidiaImg, MidiaText } from "./styles";
import MidiaPhoto from "../../images/MidiaPhoto.png";
import MidiaVideo from "../../images/MidiaVideo.png";
import MidiaDoc from "../../images/MidiaDoc.png";

export const Midia = () => {
  return (
    <>
      <MidiaContainer>
        <MidiaText>Mídia</MidiaText>
        <MidiaDiv>
          <MidiaImg src={MidiaPhoto}></MidiaImg>
          <MidiaImg src={MidiaVideo}></MidiaImg>
          <MidiaImg src={MidiaDoc}></MidiaImg>
        </MidiaDiv>
      </MidiaContainer>
    </>
  );
};
