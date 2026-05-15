function executarSistema(){
    // Dados de entrada
    const nome = document.getElementById("inputNome").value;
    const idade = parseInt(document.getElementById("inputIdade").value);
    const valor = parseFloat(document.getElementById("inputValor").value);
    const cupom = document.getElementById("inputCupom").value === "true";

    // Dados de saída
    const msg = document.getElementById("mensagem-autorizacao");
    const lista = document.getElementById("lista-estoque");
    const relatorio = document.getElementById("relatorio-final");

    // Validação para campos vazios
    if (!nome || isNaN(idade) || isNaN(valor)) {
        alert("Por favor preencha todos os campos acima!");
        return;
    }

    // Regra de negócio
    if(idade >=16){
        msg.innerText = `Venda Autorizada: ${nome}`;
        msg.style.color = "#00ff88";

        // Desconto
        let valorFinal = (valor > 500 || cupom) ? valor *0.85 : valor;

    // Estoque
    let esteque = ["Placa de Vídeo", "Processador", "Memória Ram"];
    lista.innerHTML = ""; // Limpa e lista Anterior
    }
}