function trocarImagem(idImagem, imagem) {
	document.getElementById(idImagem).querySelector("img").src = imagem;
}

function gerarAnoAtual() {
	let dataAtual = new Date
	document.getElementById("ano").innerHTML = dataAtual.getFullYear()
}