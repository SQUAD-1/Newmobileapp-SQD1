import axios from "axios";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";
import { getMessaging, getToken } from "firebase/messaging";

const api = axios.create({
	baseURL: "https://fc-services-server.onrender.com/",
});

interface UserLoginProps {
	email: string;
	senha: string;
}

function UserLogin(formEmail: string, formSenha: string) {
	const email = formEmail;
	const senha = formSenha;
	api
		.post("/Login", { email, senha })
		.then((response) => {
			localStorage.setItem("userData", JSON.stringify(response.data));
			window.location.href = "/home";
		})
		.catch(() => {
			alert("email ou senha inválido");
		});
}

const firebaseConfig = {
	apiKey: "AIzaSyCqxUA1e5PkreGVyVmBIAwPLtedvpcNyKE",
	authDomain: "fc-services-ba67f.firebaseapp.com",
	projectId: "fc-services-ba67f",
	storageBucket: "fc-services-ba67f.appspot.com",
	messagingSenderId: "832715583514",
	appId: "1:832715583514:web:b11852a49f50f5a6f521a3",
	measurementId: "G-TC74613GEW",
};

const requestNotifyPermission = () => {
	console.log("Requesting permission...");
	Notification.requestPermission().then((permission) => {
		if (permission === "granted") {
			console.log("Notification permission granted.");
		} else {
			console.log("Unable to get permission to notify.");
		}
	});
};

const firebaseInit = (messagingOn = true) => {
	console.log("Iniciando Firebase...");
	const app = initializeApp(firebaseConfig);
	console.log(`Firebase inicializado!\n${app.name} com o firebase ativo!`);

	console.log("Iniciando analytics...");
	const analytics = getAnalytics(app);

	console.log("Iniciando performance...");
	const perf = getPerformance(app);

	requestNotifyPermission();
	messagingOn
		? () => {
			console.log("Iniciando messaging...");
			const messaging = getMessaging(app);
			getToken(messaging, {
				vapidKey:
						"BCXu27hcY86FdDGJXd0mhXq0GN9dkriDJqsN-gtI4mkAMo1Ey6FRtfs4dSMtwDLJmcFpywY9s4eNvywZMPwlTYo",
			})
				.then((currentToken) => {
					if (currentToken) {
						console.log(currentToken);
					} else {
						// Show permission request UI
						console.log(
							"No registration token available. Request permission to generate one."
						);
					}
				})
				.catch((err) => {
					console.log("An error occurred while retrieving token. ", err);
				});
			return messaging;
		}
		: () => console.log("Messaging desativado");
	return { analytics, perf };
};

export {
	api,
	UserLogin,
	firebaseInit,
	firebaseConfig,
	requestNotifyPermission,
};

export type { UserLoginProps };
