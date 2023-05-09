import {
	Attach,
	BorderBottom,
	Camera,
	ContianerGeneralToolsComponent,
	Image,
	ToolsComponentContianer,
	Video,
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
import { useEffect, useState } from "react";

interface TypesToolsCompoent {
	postImage: (image: Array<string>) => void;
	postImage: (image: Array<string>) => void;
}

export const ToolsComponent = ({ postImage }: TypesToolsCompoent) => {
	const [file, setFile] = useState<string>("");
	const [image, setImageUrl] = useState<Array<string>>([]);

	useEffect(() => {
		postImage(image);
	}, [postImage, image]);
	useEffect(() => {
		postImage(image);
	}, [postImage, image]);

	const handleFileChange = async (e: any) => {
		const selectedFile = e.target.files[0];
		console.log("selected", selectedFile);
		setFile(selectedFile);
	const handleFileChange = async (e: any) => {
		const selectedFile = e.target.files[0];
		console.log("selected", selectedFile);
		setFile(selectedFile);

		if (selectedFile) {
			// const imageUrl = URL.createObjectURL(selectedFile);
			setImageUrl((state) => [...state, selectedFile]);
		}
	};

	const handleCameraButtonClick = async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({
				audio: false,
				video: true,
			});
			const video = document.createElement("video");
			video.srcObject = stream;
			video.play();
	const handleCameraButtonClick = async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({
				audio: false,
				video: true,
			});
			const video = document.createElement("video");
			video.srcObject = stream;
			video.play();

			const canvas = document.createElement("canvas");
			const context = canvas.getContext("2d");
			const canvas = document.createElement("canvas");
			const context = canvas.getContext("2d");

			video.addEventListener("loadedmetadata", () => {
				canvas.width = video.videoWidth;
				canvas.height = video.videoHeight;
			});
			video.addEventListener("loadedmetadata", () => {
				canvas.width = video.videoWidth;
				canvas.height = video.videoHeight;
			});

			const takePicture = () => {
				if (context) {
					context.drawImage(video, 0, 0, canvas.width, canvas.height);
					const imageData = canvas.toDataURL("image/png");
					postImage([imageData]);
					setImageUrl((state) => [...state, imageData]);
					setFile("");
					stream.getTracks().forEach((track) => track.stop());
				}
			};
			const takePicture = () => {
				if (context) {
					context.drawImage(video, 0, 0, canvas.width, canvas.height);
					const imageData = canvas.toDataURL("image/png");
					postImage([imageData]);
					setImageUrl((state) => [...state, imageData]);
					setFile("");
					stream.getTracks().forEach((track) => track.stop());
				}
			};

			const takePictureButton = document.createElement("button");
			takePictureButton.textContent = "Take picture";
			takePictureButton.addEventListener("click", takePicture);
			const takePictureButton = document.createElement("button");
			takePictureButton.textContent = "Take picture";
			takePictureButton.addEventListener("click", takePicture);

			const cancelButton = document.createElement("button");
			cancelButton.textContent = "Cancel";
			cancelButton.addEventListener("click", () => {
				setFile("");
				stream.getTracks().forEach((track) => track.stop());
			});
			const cancelButton = document.createElement("button");
			cancelButton.textContent = "Cancel";
			cancelButton.addEventListener("click", () => {
				setFile("");
				stream.getTracks().forEach((track) => track.stop());
			});

			const cameraContainer = document.createElement("div");
			cameraContainer.appendChild(video);
			cameraContainer.appendChild(takePictureButton);
			cameraContainer.appendChild(cancelButton);
			const cameraContainer = document.createElement("div");
			cameraContainer.appendChild(video);
			cameraContainer.appendChild(takePictureButton);
			cameraContainer.appendChild(cancelButton);

			const cameraOverlay = document.createElement("div");
			cameraOverlay.style.position = "fixed";
			cameraOverlay.style.top = "0";
			cameraOverlay.style.left = "0";
			cameraOverlay.style.width = "100%";
			cameraOverlay.style.height = "100%";
			cameraOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
			cameraOverlay.appendChild(cameraContainer);
			const cameraOverlay = document.createElement("div");
			cameraOverlay.style.position = "fixed";
			cameraOverlay.style.top = "0";
			cameraOverlay.style.left = "0";
			cameraOverlay.style.width = "100%";
			cameraOverlay.style.height = "100%";
			cameraOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
			cameraOverlay.appendChild(cameraContainer);

			document.body.appendChild(cameraOverlay);
		} catch (error) {
			console.log(error);
		}
	};

	console.log("imageurl", image);
	return (
		<ContianerGeneralToolsComponent>
			<ToolsComponentContianer>
				<Attach htmlFor="file_input">
					<input
						type="file"
						name="file_input"
						id="file_input"
						style={{ display: "none" }}
						onChange={handleFileChange}
					/>
					<img
						src={anexar}
						alt="Botão anexar"
					/>
				</Attach>
				<Video htmlFor="file_input">
					<input
						type="file"
						name="file_input"
						id="file_input"
						style={{ display: "none" }}
					/>
					<img
						src={video}
						alt="Botão Video"
					/>
				</Video>
				<Image htmlFor="file_input">
					<input
						type="file"
						name="file_input"
						id="file_input"
						style={{ display: "none" }}
					/>
					<img
						src={imagem}
						alt="Botão"
					/>
				</Image>
				<Camera htmlFor="file_input">
					<input
						type="file"
						name="file_input"
						id="file_input"
						style={{ display: "none" }}
					/>
					<img
						src={camera}
						alt="Botão Camera"
					/>
				</Camera>
			</ToolsComponentContianer>

			<BorderBottom />
		</ContianerGeneralToolsComponent>
	);
			<BorderBottom />
		</ContianerGeneralToolsComponent>
	);
};
