function verificarLogin(usuarioLogado: boolean) {
	if (!usuarioLogado) {
		window.location.replace("/login");
	}
}

export { verificarLogin };
