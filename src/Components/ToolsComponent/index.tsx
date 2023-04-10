import {
    Attach,
    BorderBottom,
    Camera,
    ContianerGeneralToolsComponent,
    Image,
    ToolsComponentContianer,
    Video,
} from "./styles";
import anexar from "./svg/Anexar.svg";
import video from "./svg/Video.svg";
import imagem from "./svg/Imagem.svg";
import camera from "./svg/Camera.svg";
import { useState } from "react";

interface TypesToolsCompoent {
    postImage: (image: string) => void;
}

export const ToolsComponent = ({ postImage }: TypesToolsCompoent) => {
    const [file, setFile] = useState<string>("");
    const [image, setImageUrl] = useState<string>("");

    postImage(image);

    const handleSubmit = (e: Event) => {
        e.preventDefault();
        console.log(file);
    };

    const handleFileChange = (e: any) => {
        const selectedFile = e.target.files[0];
        console.log("selected", selectedFile);
        setFile(selectedFile);

        if (selectedFile) {
            const imageUrl = URL.createObjectURL(selectedFile);
            setImageUrl(imageUrl);
        }
    };

    console.log("imageurl", image);
    return (
        <ContianerGeneralToolsComponent>
            <ToolsComponentContianer onSubmit={() => handleSubmit}>
                <Attach htmlFor="file_input">
                    <input
                        type="file"
                        name="file_input"
                        id="file_input"
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                    />
                    <img src={anexar} alt="Icon anexar" />
                </Attach>
                <Video htmlFor="file_input">
                    <input
                        type="file"
                        name="file_input"
                        id="file_input"
                        style={{ display: "none" }}
                    />
                    <img src={video} alt="Icon Video" />
                </Video>
                <Image htmlFor="file_input">
                    <input
                        type="file"
                        name="file_input"
                        id="file_input"
                        style={{ display: "none" }}
                    />
                    <img src={imagem} alt="Icon Image" />
                </Image>
                <Camera htmlFor="file_input">
                    <input
                        type="file"
                        name="file_input"
                        id="file_input"
                        style={{ display: "none" }}
                    />
                    <img src={camera} alt="Icon Camera" />
                </Camera>
            </ToolsComponentContianer>

            <BorderBottom />
        </ContianerGeneralToolsComponent>
    );
};
